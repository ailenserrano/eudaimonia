import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [itemDetailProduct, setItemDetail] = useState(null);
  const { seeId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", seeId);

    getDoc(docRef)
      .then((doc) => {
        setItemDetail({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <h2>Loading...</h2> : <ItemDetail {...itemDetailProduct} />}
    </div>
  );
};

export default ItemDetailContainer;
