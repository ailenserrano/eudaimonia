import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container-fluid">
      {" "}
      {greeting}
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
