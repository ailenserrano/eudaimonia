import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { Link, Navigate } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export const Checkout = () => {
  const { cart, totalCart, vaciarCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const generarOrden = () => {
    const orden = {
      comprador: values,
      items: cart,
      total: totalCart(),
      fechahora: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, orden).then((doc) => {
      console.log(doc.id);
      setOrderId(doc.id);
      vaciarCart()
    })
    .catch((err) => {
        console.log(err)
    })
  };

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.name);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.nombre.length < 5) {
      alert("El nombre es demasiado corto");
      return;
    }

    if (values.email.length < 7) {
      alert("El email es inválido");
      return;
    }

    if (values.tel.length < 8) {
      alert("El teléfono es inválido");
      return;
    }

    generarOrden();
  }

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>¡Gracias por tu compra!</h2>
        <hr />
        <h4>Tu número de orden es: {orderId} </h4>
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Tu nombre"
          value={values.nombre}
          onChange={handleInputChange}
          name="nombre"
        />
        <input
          type="email"
          className="form-control my-2"
          placeholder="Tu email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <input
          type="tel"
          className="form-control my-2"
          placeholder="Tu teléfono"
          value={values.tel}
          onChange={handleInputChange}
          name="tel"
        />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};
