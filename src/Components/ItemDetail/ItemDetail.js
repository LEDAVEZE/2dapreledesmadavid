import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, nombre, precio, categoria, img, stock, descripcion}) => {
    return <>
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className='ItemImg'></img>
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', {quantity})} />
            </footer>
        </article>
    </>
}

export default ItemDetail;