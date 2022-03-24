import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import ProductLoader from "./ProductLoader";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState(null);
  const { seeId } = useParams();

  useEffect(
    () =>
      ProductLoader()
        .then((prod) => {
          setItemDetail(prod.find((product) => product.id === Number(seeId)));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => console.log("Terminó")),
    []
  );

  return (
    <div>
      <ItemDetail {...ItemDetailProduct} />
    </div>
  );
};

export default ItemDetailContainer;
