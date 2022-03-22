import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          fetch("https://mocki.io/v1/66d939b9-5094-4bb3-82d1-ab1d61e829f2")
            .then((respuesta) => respuesta.json())
            .then((data) => setListaProductos(data))
            .catch((error) => console.log(error)),
          getProducts.finally(() => setLoading(false))
        );
      }, 3000);
    });

    getProducts.then((respuesta) => {
      setProducto(respuesta.find((e) => e.id == itemId));
    });
  }, []);

  return (
    <>
      <ItemDetail {...producto} />;
    </>
  );
};

export default ItemDetailContainer;
