import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemListContainer = () => {
  const {category} = useParams();

  console.log(category);

  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {
      const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            fetch(
              "https://mocki.io/v1/f5276d85-dcd8-4https://mocki.io/v1/66d939b9-5094-4bb3-82d1-ab1d61e829f2def-951d-267ea5aed625"
            )
              .then((respuesta) => respuesta.json())
              .then((data) => setProductos(data))
              .catch((error) => console.log(error)),
            getProducts.finally(() => setLoading(false))
          );} , 3000);
        });
        if (!category) {
          getProducts.then((respuesta) => setProductos(respuesta));
        } else {
          getProducts.then((respuesta) => {
            setProductos(
              respuesta.filter((productos) => productos.category === category)
            );
          });
        }
      }, [category]);
    


  return (
      <>
      <ItemList productos = {productos}/>
      </>
  );
};

export default ItemListContainer;
