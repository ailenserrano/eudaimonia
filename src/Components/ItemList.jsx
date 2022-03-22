import React from "react";
import Item from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <Item {...producto} />
      ))}
    </>
  );
};

export default ItemList;
