import { Timestamp, addDoc, collection, writeBatch } from "firebase/firestore";
import { useContext, useState } from "react";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from "../../context/CardContext";
import { db } from '../../firebase/config';
import { getDocs, query, where, documentId } from 'firebase/firestore';

const Checkout = () => {
    const [loading, setLoading] = useState (false)
    const [orderId, setOrederId] = useState('')

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = async ({nombre, telefono, mail}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    nombre, telefono, mail
                },
                items: cart,
                total: totalPrice,
                date: Timestamp.fromDate(new Date())
            }
            console.log('Total Price:', totalPrice);
            console.log('ObjOrder:', objOrder);

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            
            const productsRef = collection (db, "productos")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.prodQuantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection (db, "orders")

                const orderAdded = await addDoc (orderRef, objOrder)

                setOrederId (orderAdded.id)
                clearCart()
            } else {
                console.log("Hay productos que estan fuera de stock")
            }
        }
        catch (error) {
            console.log(error)
        }
        finally{
            setLoading (false)
        }

    }
    if (loading) {
        return <><h1>Se esta generando su orden...</h1></>
    } 
    if (orderId) {
        return<><h1>EL ID de su orden es: {orderId}</h1></>
    }

    return <>
        <div>
            <h1 className="h1-checkout">CHECKOUT</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    </>
}

export default Checkout;