import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Productos/ItemListContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Tienda online de libros" />} />
        <Route path='/category/:cat' element={<ItemListContainer greeting="Tienda online de libros" />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
