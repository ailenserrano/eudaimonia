import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const [loading, setLoading] = useState(true);

  const itemId = undefined;

  useEffect(() => {
    setLoading(true);

    fetch("https://mocki.io/v1/f5276d85-dcd8-4def-951d-267ea5aed625")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setItem(data.find((prod) => prod.id === Number(itemId)));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ItemDetail />
      )}
    </div>
  );
};

export default ItemDetailContainer;
