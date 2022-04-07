import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "products");
    const q = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        setItem(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <>{loading ? <h2>Loading...</h2> : <ItemList listProducts={item} />}</>
  );
};

export default ItemListContainer;
