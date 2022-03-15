import React from "react";
import ItemCounter from "./ItemCounter";

export const Item = ({productos}) => {
  const onAdd = () => {
    console.log("Agregué al carrito");
  };

  return (
    <div>
      <div className="card">
        <h5 className="card-title">{productos.name} </h5>
        <img src={productos.img} alt="conjunto de encaje" className="card-img-top" />
        <p className="card-text">{productos.description} </p>
        <ItemCounter stock={5} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
