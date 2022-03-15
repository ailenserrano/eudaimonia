import React, { useState } from "react";
import Item from "./Item";

const ItemCounter = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
        <button className="btn btn-outline-dark" onClick={restar}>
          -
        </button>
        <span> {counter} </span>
        <button className="btn btn-outline-dark" onClick={sumar}>
          +
        </button>
      <div>
        <button className="btn btn-outline-success" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
