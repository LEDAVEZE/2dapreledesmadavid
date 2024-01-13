import '../CartWidget/CartWidget.css';
import cart from '../../IMG/cart.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CardContext';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    const { totalQuantity } = useContext (CartContext)

    return <>
        <div>
            <Link to='/Carrito' className="CartWidget" >
                <img src={cart} className="carrito" alt="cart"></img>
                { totalQuantity() }
            </Link>
        </div>
            
    </>
}

export default CartWidget;