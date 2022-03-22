import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, category, description, image, stock }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div
          className="top"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1> {name} </h1>
              <h4> {price} </h4>
            </div>
            <Link to={`/detail/${id}`} className="buy">
              Más detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
