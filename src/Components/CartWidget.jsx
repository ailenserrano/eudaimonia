import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
  <Link to="/cart"><AiOutlineShoppingCart/></Link>
  )
}

export default CartWidget;