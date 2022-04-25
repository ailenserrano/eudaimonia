import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [updateTotalCart, setUpdate] = useState();
  const [updateTotalWidget, setUpdateWidget] = useState();

  const agregarAlCarrito = (itemCount) => {

    if (cart.find(item => item.id === itemCount.id)) {

      const newCartItem = cart.map(item => {

        if (item.id === itemCount.id) {

          return { ...item, cantidad: itemCount.cantidad + item.cantidad };

        }

        return item;

      });

      setCart(newCartItem);

    } else {

      setCart(state => {

        return [...state, itemCount];

      });

    }

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
