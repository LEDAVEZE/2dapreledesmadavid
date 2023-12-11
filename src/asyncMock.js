import Imgrem1 from "../src/IMG/REMERAS/rem1.jpeg";
import Imgpan1 from "../src/IMG/PANTALONES/pan1.jpeg";
import Imgabr1 from "../src/IMG/ABRIGOS/buz1.jpeg";


const products = [
    {
        id: 'R1',
        nombre: 'remera 1',
        precio: '5000',
        categoria: 'remeras',
        img: Imgrem1,
        stock: 25,
        descripcion:'remera 1, bla...'

    },
    {
        id: 'A1',
        nombre: 'campera 1',
        precio: '10000',
        categoria: 'abrigos',
        img: Imgabr1,
        stock: 10,
        descripcion:'campera 1, bla...'

    },{
        id: 'P1',
        nombre: 'pantalon 1',
        precio: '8500',
        categoria: 'pantalones',
        img: Imgpan1,
        stock: 25,
        descripcion:'pantalon 1, bla...'

    },

]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500)
    })
};

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    }
)
};

export const getProductsByCategory = (categoriaId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(prod=> prod.categoria === categoriaId))
        }, 500)
    })
};

