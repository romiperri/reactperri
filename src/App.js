import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/Productos/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting="Tienda online de libros" />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
