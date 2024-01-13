import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = ({ greeting }) => {
    const [productos, setproductos] = useState ([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect (() => {
        setLoading (true)

        const collectionRef = categoryId
            ? query(collection(db,'productos'), where('categoria', '==', categoryId))
            : collection (db, 'productos')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map (doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setproductos(productsAdapted)
            })
            .catch (error => {
                console.log(error)
            })
            .finally(() => {
                setLoading (false)
            })
        
        }, [categoryId]);

    return <>
        <div>
        <h1>{greeting}</h1>
          {loading ? (
            <p>Cargando productos...</p>
          ) : (
            <ItemList productos={productos} />
          )}
        </div>
        </>
};

export default ItemListContainer;