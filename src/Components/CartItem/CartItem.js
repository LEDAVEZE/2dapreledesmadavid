import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CardContext";
import '../CartItem/CartItem.css'

const CartItem = ({nombre, precio, id, quantity}) => {
    
    const { removeItem } = useContext (CartContext)


    return<>
        <div className="carro">
            <div className="productosEnCarrito">
                <h2>{nombre}</h2>
                <p>Cantidad: {quantity}</p>
                <p>Sub Total: $ {precio * quantity}</p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
            </div>    
        </div>
    </> 
}

export default CartItem;