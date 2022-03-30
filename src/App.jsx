import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound404 from "./Components/NotFound404";
import { CartContext } from "./CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item) => {
    setCart();
  };

  return (
    <CartContext.Provider value={{ cart }}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/productos/:category"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:seeId" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
