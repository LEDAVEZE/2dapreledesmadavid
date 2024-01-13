import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/Components/NavBar/navBar.js';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from '../src/Components/ItemDetailContainer/ItemDetailContainer.js';
import { CartProvider } from './context/CardContext.js';
import Carrito from './Components/Carrito/Carrito.js';
import Checkout from '../src/Components/Checkout/Checkout.js';


function App() {
    return <>
    <div className='App'>
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
                    <Route path='/categoria/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='/:Carrito' element={<Carrito />} />
                    <Route path='/Checkout' element={<Checkout />} />
                    <Route path='*' element={<h1> 404 PAGINA NO ENCONTRADA</h1>}/>
                </Routes>  
            </CartProvider> 
        </BrowserRouter>
    </div>
    </>;
}

export default App;