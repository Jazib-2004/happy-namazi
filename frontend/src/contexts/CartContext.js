import { useState, useContext, createContext } from "react";
import React from "react";

const CartContext = createContext();
function CartProvider(props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <CartContext.Provider value={{ isOpen, setOpen }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
export const useCartContext = () => useContext(CartContext);
