import React from "react";
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
      {name}
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={description} />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{description}</p>
          <h5>
            Precio: $<span> {price}</span>
          </h5>
        </div>
        <ItemCounter
          stock={stock}
          count={count}
          title={name}
          setCounter={setCounter}
          onAdd={onAdd}
          category={category}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
