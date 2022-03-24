import React, { useState } from "react";
import { Modal } from "./Modal";

const ItemCounter = ({ stock, onAdd, count, name, category, setCounter }) => {
  const handleRestar = () => {
    count > 1 && setCounter(count - 1);
  };
  const handleSumar = () => {
    count < stock && setCounter(count + 1);
  };
  return (
    <div>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn-plus btn btn-primary fas fa-plus"
          onClick={handleSumar}
        >
          +
        </button>
        <span className="count btn btn-primary">{count}</span>
        <button
          type="button"
          className="btn-minus btn btn-primary fas fa-minus"
          onClick={handleRestar}
        >
          -
        </button>
      </div>

      <br />
      <Modal onAdd={onAdd} count={count} name={name} category={category} />
    </div>
  );
};

export default ItemCounter;
