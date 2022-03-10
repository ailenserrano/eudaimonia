import React from "react";
import ItemCounter from "./ItemCounter";

export const Item = () => {
  const onAdd = () => {
    console.log("Agregué al carrito");
  };

  return (
    <div>
      <div>
        <ItemCounter stock={5} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
