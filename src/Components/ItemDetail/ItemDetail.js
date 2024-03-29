import '../ItemDetail/ItemDetail.css';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CardContext';

const ItemDetail = ({id, nombre, precio, categoria, img, stock, descripcion}) => {
    const [quantityAdded, setQuantityAdded]  = useState(0) 
    
    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)
    }
    
    return <>
        <div className='container'>
            <div className='producto-detalle'>
                <article className='CartItem'>
                    <header className='Header'>
                        <h2 className='ItemHeader'>
                            {nombre}
                        </h2>
                    </header>
                    <picture>
                        <img src={img} alt={nombre} className='ItemImg'/>
                    </picture>
                    <section>
                        <p className='Info'>
                            Categoria: {categoria}
                        </p>
                        <p className='Info'>
                            Descripcion: {descripcion}
                        </p>
                        <p className='Info'>
                            Precio: ${precio}
                        </p>
                    </section>
                    <footer className='ItemFooter'>
                        {
                            quantityAdded > 0 ? (
                                <Link to = '/cart' className='Option'> Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={ handleOnAdd} />
                            )
                    }
                    </footer>
                </article>
            </div>
        </div>
        
    </>
}

export default ItemDetail;