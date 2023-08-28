import React from "react";
import CartItem from "./CartItem";
import { useCartContext } from "../contexts/CartContext";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useCartItemContext } from "../contexts/CartItemContext";
function Cart() {
  const { isOpen, setOpen } = useCartContext();
  const { cart, setCart, totalItems, totalAmount} = useCartItemContext();
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full fixed z-20 bg-white top-0 h-full shadow-2xl sm:w-[45vw] md:w-[40vw] xl:max-w-[30vw] px-4 transition-all duration-300 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="font-semibold text-sm">SHOPPING BAG ({totalItems()})</div>
        <div className="text-xl cursor-pointer" onClick={() => setOpen(false)}>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="h-[320px] overflow-y-scroll overflow-x-hidden">
        {cart.map((cartItem, index) => (
          <CartItem key={index} item={cartItem} />
        ))}
      </div>
      <div className="flex flex-col justify-between w-full space-y-3 absolute bottom-0 left-0 px-4 lg:px-[35px] py-6">
        <div className="flex justify-between items-center border-t pt-6">
          <div className="text-sm font-semibold">TOTAL: {totalAmount()} Rs</div>
          <div onClick={()=>setCart([])} className="text-white bg-red-600 p-3 text-xl cursor-pointer">
            <RiDeleteBinLine />
          </div>
        </div>
        <button className="w-full bg-gray-300 text-center p-3">
          View Cart
        </button>
        <button className="w-full bg-black text-white text-center p-3">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
