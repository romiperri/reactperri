import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/Productos/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from "./components/CartView/CartView";
import MyProvider from "./context/cartContext";


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Tienda online de libros" />}
            />
            <Route
              path="/category/:cat"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
