import '../ItemList/ItemList.css';
import Item from '../Item/Item';

const ItemList = ( {products} ) => {
    console.log(products)
    return <>
        <div className='ListGroup'>
            console.log ()
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    </>
};

export default ItemList;