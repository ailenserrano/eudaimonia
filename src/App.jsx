import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import Item from "./Components/Item";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { ItemDetail } from "./Components/ItemDetail";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound404 from "./Components/NotFound404";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/detail/:seeId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
