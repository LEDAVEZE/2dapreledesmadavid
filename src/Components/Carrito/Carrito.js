import '../Carrito/Carrito.css';
import { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Carrito = () =>{
const {cart, clearCart, totalQuantity, total} = useContext (CartContext)

    if(totalQuantity === 0) {
        return <>
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        </>       
    }

    return <>
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>    
            <button>
            <Link to ='/checkout' className="Option">Checkout</Link>
            </button>
        </div>
    </>
}

export default Carrito;