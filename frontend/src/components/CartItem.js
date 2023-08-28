import React from "react";
import { IoIosClose } from "react-icons/io";
import { HiMinusSmall, HiPlusSmall } from "react-icons/hi2";
import { useCartItemContext } from "../contexts/CartItemContext";

function CartItem({ item }) {
  const { addToCart, deleteFromCart, decreaseAmount} = useCartItemContext();
  return (
    <div className="flex py-2 lg:px-6 items-center border-b border-gray-200 font-light">
      <div className="flex items-center w-full min-h-[150px] space-x-4">
        <img className="max-w-[80px]" src={item.image} />
        <div className="flex w-full flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="text-sm font-medium text-primary uppercase max-w-[240px]">
              {item.title}
            </div>
            <div
              onClick={() => {
                deleteFromCart(item.id);
              }}
              className="text-2xl text-gray-500 hover:text-red-500 cursor-pointer"
            >
              <IoIosClose />
            </div>
          </div>
          <div className="flex h-[36px] space-x-4 items-center text-sm">
            <div className="flex flex-1 max-w-[100px] text-primary font-medium border items-center h-full">
              <div
                onClick={() => {
                  decreaseAmount(item);
                }}
                className="flex-1 flex justify-center cursor-pointer"
              >
                <HiMinusSmall />
              </div>
              <div className="text-center text-xs px-2">{item.amount}</div>
              <div
                onClick={() => {
                  addToCart(item,item.id);
                }}
                className="flex-1 flex justify-center cursor-pointer"
              >
                <HiPlusSmall />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              {item.price} Rs
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-semibold">
              {parseFloat(item.price * item.amount).toFixed(2)} Rs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
