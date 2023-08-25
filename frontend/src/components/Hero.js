import React from "react";
import blue_mat from "../media/blue_mat.png";
import red_mat from "../media/red_mat.png";
import green_mat from "../media/green_mat.png";
import yellow_mat from "../media/yellow_mat.png";

function Hero() {
  return (
    <section className="bg-[#F5E4E0] h-96 flex items-center justify-end space-y-6 py-4 mb-10">
      {/* Carousel slider*/}
      {/* <div className="flex space-x-20 justify-center">
        <div className="w-28 h-28">
          <img src={yellow_mat}></img>
        </div>
        <div className="w-28 h-28">
          <img src={red_mat}></img>
        </div>
        <div className="w-28 h-28">
          <img src={blue_mat}></img>
        </div>
        <div className="w-28 h-28">
          <img src={green_mat}></img>
        </div>
      </div> */}
      {/* Sale Text */}
      <div>
        <h1 className="text-3xl rotate-90 text-gray-700">- Ramazan Sale -</h1>
      </div>
    </section>
  );
}

export default Hero;
