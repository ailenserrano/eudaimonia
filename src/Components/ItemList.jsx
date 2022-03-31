import React from "react";
import Item from "./Item";

export const ItemList = ({ listProducts }) => {
  return (
    <div>
      <div className="card-group row-cols-md-4 g-4">
        {listProducts.map((product, index) => (
          <div key={index}>
          <Item {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
