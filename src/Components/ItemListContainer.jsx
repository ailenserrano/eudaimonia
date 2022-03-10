import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      {" "}
      {greeting}
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
