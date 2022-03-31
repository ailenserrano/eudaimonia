import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function CartWidget() {
  const { cantidadCart } = useContext(CartContext);
  return (
    <div>
      <Link to="/cart">
        <AiOutlineShoppingCart className="cart-widget" />
      </Link>
      <span>{cantidadCart()} </span>
    </div>
  );
}

export default CartWidget;
