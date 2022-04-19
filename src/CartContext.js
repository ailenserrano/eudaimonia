import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [updateTotalCart, setUpdate] = useState();
  const [updateTotalWidget, setUpdateWidget] = useState();

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cantidadCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
  };

  const vaciarCart = () => {
    setCart([]);
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const handleChange = (value, id) => {
    const index = cart.findIndex((prod) => prod.id == id);
    console.log(cart[index]);
    cart[index].count = Number(value);
    console.log(cart[index].count);
  };

  const addCount = (value, id) => {
    handleChange(value, id);
    setUpdate(!updateTotalCart);
  };
  useEffect(() => {
    totalCart();
  }, [updateTotalCart]);

  const addWidget = () => {
    setUpdateWidget(!updateTotalWidget);
  };
  useEffect(() => {
    cantidadCart();
  }, [updateTotalWidget]);

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        cantidadCart,
        totalCart,
        vaciarCart,
        eliminarItem,
        addCount,
        addWidget,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
