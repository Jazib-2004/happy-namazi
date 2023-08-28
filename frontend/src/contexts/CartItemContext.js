import React, { createContext, useContext, useState } from "react";

const CartItemContext = createContext();

function CartItemProvider(props) {
  const [cart, setCart] = useState([]);
  const addToCart = (cartItem, id) => {
    const prevCartItem = cart.find((item) => {
      return item.id === id;
    });
    if (prevCartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: prevCartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...cartItem, amount: 1 }]);
    }
  };
  const decreaseAmount = (cartItem) => {
    if (cartItem.amount === 1) {
      deleteFromCart(cartItem.id);
      return;
    }
    const newCart = cart.map((item) => {
      if (item.id === cartItem.id) {
        return { ...item, amount: cartItem.amount - 1 };
      }
      else return item;
    });
    setCart(newCart);
  };
  const deleteFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return id !== item.id;
    });
    setCart(newCart);
  };
  const totalItems = () => {
    let totalNumberOfItems = 0;
    for (let i = 0; i < cart.length; i++) {
      totalNumberOfItems+=cart[i].amount
    }
    return totalNumberOfItems;
  };

  const totalAmount = () =>{
    let amountInTotal = 0;
    for (let i=0; i<cart.length;i++){
        amountInTotal += cart[i].price * cart[i].amount;
    }
    return parseFloat(amountInTotal).toFixed(2);
  }
  return (
    <CartItemContext.Provider
      value={{ cart, setCart, addToCart, deleteFromCart, decreaseAmount, totalItems, totalAmount}}
    >
      {props.children}
    </CartItemContext.Provider>
  );
}

export default CartItemProvider;

export const useCartItemContext = () => useContext(CartItemContext);
