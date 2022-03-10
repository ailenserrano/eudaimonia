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
    <div className="card">
      <h5 className="card-title">Producto 1</h5>
      <div>
        <button className="btn btn-outline-dark" onClick={restar}>
          -
        </button>
        <span> {counter} </span>
        <button className="btn btn-outline-dark" onClick={sumar}>
          +
        </button>
      </div>
      <div>
        <button className="btn btn-outline-success" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
