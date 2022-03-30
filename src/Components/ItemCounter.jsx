import React, { useState } from "react";

const ItemCounter = ({ stock, counter, setCounter }) => {
  const handleRestar = () => {
    counter > 1 && setCounter(counter - 1);
  };
  const handleSumar = () => {
    counter < stock && setCounter(counter + 1);
  };

  return (
    <div>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn-minus btn btn-primary fas fa-minus"
          onClick={handleRestar}
        >
          -
        </button>
        <span className="numeroProds">{counter}</span>
        <button
          type="button"
          className="btn-plus btn btn-primary fas fa-plus"
          onClick={handleSumar}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
