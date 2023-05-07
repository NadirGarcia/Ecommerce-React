import './App.css';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<ItemListContainer greeting = {"Bienvenidos a NG gaming"}/>} />
          <Route path='/category/:categoryId' element = {<ItemListContainer greeting = {"Productos Filtrados"} />} />
          <Route path='/detail/:prodId' element = {<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
