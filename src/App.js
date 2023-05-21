import './App.css';
import { ItemDetailContainer } from './container/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartContainer } from './container/CartContainer/CartContainer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element = {<ItemListContainer greeting = {"Bienvenidos a NG gaming"}/>} />
            <Route path='/category/:categoryId' element = {<ItemListContainer greeting = {"Productos Filtrados"} />} />
            <Route path='/detail/:prodId' element = {<ItemDetailContainer />} />
            <Route path='/cart' element = {<CartContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
