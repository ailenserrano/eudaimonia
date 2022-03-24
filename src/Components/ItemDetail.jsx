import React, { useState, useEffect } from "react";
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
  const [count, setCounter] = useState(1);
  const onAdd = () => {
    const itemToCart = {
      id,
      name,
      category,
      price,
      image,
      count,
    };

    console.log(itemToCart);
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
          count={count}
          name={name}
          setCounter={setCounter}
          onAdd={onAdd}
          category={category}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
