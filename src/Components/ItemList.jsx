import React from "react";
import Item from "./Item";
import { useEffect, useState } from "react";

export const ItemList = ({ card }) => {
  const [listaProductos, setListaProductos] = useState([]);

  const [loading, setLoading] = useState(true);

  const productos = [];

  const getProducts = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    } else {
      reject("Error");
    }
  });

  useEffect(() => {
    fetch("https://mocki.io/v1/f5276d85-dcd8-4def-951d-267ea5aed625")
      .then((respuesta) => respuesta.json())
      .then((data) => setListaProductos(data))
      .catch((error) => console.log(error));
    getProducts.finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        listaProductos.map((productos) => (
          <Item card={card} productos={productos} key={productos.id} />
        ))
      )}
    </div>
  );
};

export default ItemList;
