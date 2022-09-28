import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Productos/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tienda online de libros" />
      <ItemDetailContainer/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
