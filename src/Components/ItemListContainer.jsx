import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ProductLoader from "./ProductLoader";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { category } = useParams();

  useEffect(
    () =>
      ProductLoader()
        .then((prod) => {
          if (!category) {
            setItem(prod);
          } else {
            setItem(prod.filter((product) => product.category === category));
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => console.log("Terminó")),
    [category]
  );

  return (
    <>
      <ItemList listProducts={item} />
    </>
  );
};

export default ItemListContainer;
