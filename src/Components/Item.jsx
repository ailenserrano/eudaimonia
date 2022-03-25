import React from "react";
import { Link } from "react-router-dom";

const Item = ({ category, name, description, price, image, id }) => {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-dark">
              Más información
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
