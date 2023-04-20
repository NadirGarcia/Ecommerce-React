import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting = {"Bienvenidos a NG gaming"}/>
    </div>
  );
}

export default App;
