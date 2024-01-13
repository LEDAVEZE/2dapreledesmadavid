import '../ItemDetailContainer/ItemDetailContainer.css';
import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState (null);
    const [loading, setLoading] = useState (true);

    const { itemId } = useParams ();

    useEffect(() => {
        setLoading(true)

        const docRef = doc (db, 'productos', itemId)

        getDoc (docRef)
            .then (response => {
                const data = response.data()
                const productoAdapted = { id: response.id, ...data }
                setProducto (productoAdapted)
            })
            .catch (error => {
                console.log(error)
            })
            .finally (() => {
                setLoading(false)
            }, [itemId])        
    }, [itemId])

    return <>
        <div className='ItemDetailContainer'>
            {loading ? (
                <p>Cargando producto...</p>
            ) : (
                <ItemDetail {...producto}/>
            )}
        </div>
    </>
}

export default ItemDetailContainer;