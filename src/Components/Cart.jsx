import { useContext } from "react";
import { CartContext } from "../CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";

const Cart = () => {
  const { cart, totalCart, eliminarItem, vaciarCart, addCount } = useContext(CartContext);

  // render si el cart está vacío
  if (cart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h2>Tu compra</h2>
        <hr />

        {cart.map((item) => (
          <div key={item.id} className="d-inline">
            <h5>{item.name}</h5>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.cantidad * item.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => eliminarItem(item.id)}
            >
              <BsFillTrashFill />
            </button>
          </div>
        ))}

        <hr />
        <h2>Total: ${totalCart()}</h2>

        <div className="my-2">
          <button className="btn btn-danger" onClick={vaciarCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn btn-success mx-2">
            Terminar mi compra
          </Link>
        </div>
      </div>
    </>
  );
};
export default Cart;
