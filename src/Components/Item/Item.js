import '../Item/Item.css';
import {Link} from "react-router-dom";

const Item = ({id, nombre, precio, img, stock}) => {

    return <>
    <div className='Container'>
        <div className='Columns'>
            <article className="Card">
                <header className="CardHeader">
                    <h2 className="ItemHeader">
                        {nombre}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} className="ItemImg"></img>
                </picture>
                <section>
                    <p className="Info">
                        Precio: ${precio}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className="ItemFooter">
                    <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
                </footer>
            </article>
        </div>
    </div>
    </>
};

export default Item;