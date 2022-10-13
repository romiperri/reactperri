import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/cartContext";
import CartView from "./components/CartView/CartView";


function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Tienda online de libros" />}
          />
          <Route
            path="/category/:cat"
            element={<ItemListContainer greeting="Tienda online de libros" />}
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
