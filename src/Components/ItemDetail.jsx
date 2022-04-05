import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import ItemCounter from "./ItemCounter";

const ItemDetail = ({
  id,
  stock,
  category,
  name,
  description,
  price,
  image,
}) => {
  const [cantidad, setCantidad] = useState(0);
  const { cart, agregarAlCarrito, isInCart } = useContext(CartContext);
  const handleAgregar = () => {
    if (cantidad === 0) return;
    if (!isInCart(id)) {
      const addItem = {
        id,
        name,
        price,
        stock,
        cantidad,
      };

      agregarAlCarrito(addItem);
    }
  };

  if (isInCart(id)) {
    return (
      <div>
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <img src={image} className="card-img-top" alt={description} />
            <p className="card-text">{description}</p>
            <h5>Precio: ${price}</h5>
          </div>
          <div>
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
          <div>
            <Link to="/cart" className="btn btn-success my-3">
              Terminar mi compra
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <img src={image} className="card-img-top" alt={description} />
          <p className="card-text">{description}</p>
          <h5>Precio: ${price}</h5>
        </div>
        <div>
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
    </div>
  );
};

export default ItemDetail;
