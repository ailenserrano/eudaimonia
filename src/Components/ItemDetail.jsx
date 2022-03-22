import React from "react";
import ItemCounter from "./ItemCounter";

const ItemDetail = ({
  id,
  name,
  description,
  price,
  stock,
  image,
  category,
}) => {
  return (
    <div className="card">
      <div className="item">
        <div className="text">
          <div
            className="top"
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
          <h1>{name} </h1>
          <h3>{price}</h3>
        </div>
      </div>
      <div className="item">
        <p>{description}</p>
        <ItemCounter stock={stock} />
        <div>
          <button id="cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
