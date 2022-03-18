import React from "react";
import ItemCounter from "./ItemCounter";

export const Item = ({ productos }) => {
  const onAdd = () => {
    console.log("Agregué al carrito");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <h5 className="card-title">{productos.name} </h5>
            <img src={productos.image} className="card-img-top" />
            <button className="btn btn-outline-dark"> Ver más </button>
            <ItemCounter stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
