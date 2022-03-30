import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";
import ItemCounter from "./ItemCounter";
import { Modal } from "./Modal";

const ItemDetail = ({
  id,
  stock,
  category,
  name,
  description,
  price,
  image,
}) => {
  const {cart} = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1);
  const handleAgregar = () => {
    const addItem = {
      id,
      name,
      price,
      stock,
      cantidad,
    };

    console.log(addItem);


  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <img src={image} className="card-img-top" alt={description} />
          <p className="card-text">{description}</p>
          <h5>Precio: ${price}</h5>
        </div>
        <ItemCounter
          stock={stock}
          counter={cantidad}
          name={name}
          setCounter={setCantidad}
          handleAgregar={handleAgregar}
          category={category}
        />
        <button className="btn btn-success" onClick={handleAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
