import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/Components/NavBar/navBar.js';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from '../src/Components/ItemDetailContainer/ItemDetailContainer.js';


function App() {
    return <>
    <div className='App'>
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1> 404 PAGINA NO ENCONTRADA</h1>}/>
            </Routes>   
        </BrowserRouter>
    </div>

    </>;
}

export default App;