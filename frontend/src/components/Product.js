import React from "react";
import { BiCartAdd } from "react-icons/bi";
function Product(props) {
  const { id, title, image, category, price } = props.product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="group-hover:scale-110 transition duration-300 max-h-[160px]"
              src={image}
              alt=""
            ></img>
          </div>
        </div>
        <div className="absolute top-5 -right-11 group-hover:right-5 bg-red-500 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="flex justify-center items-center w-4 h-4 sm:w-8 sm:h-8 md:w-6 md:h-6 text-white">
            <BiCartAdd />
          </button>
        </div>
      </div>
      <div>
        <div><h2 className="font-semibold my-1">{title}</h2></div>
        <div className="text-gray-500 text-sm">{price} Rs</div>
      </div>
    </div>
  );
}

export default Product;
