import React from "react";
import { images } from "@/assets/Assets";
const Partner = () => {
  return (
    <>
      <div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 px-4 py-16 lg:py-20">
        <h1 class="text-center lg:mb-20 mb-10 dark:text-white text-gray-800 font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 w-9/12 md:w-full mx-auto">
          Our Channel Partner
        </h1>
        <div class="flex justify-around items-center m-auto  transition ease-out duration-700 ">
          <img className="w-[40%]" src={images.Waree_Logo} alt="" />

          <p className="w-[40%] text-gray-600 dark:text-gray-400 font-normal text-base leading-7">
           " We proudly partner with Waaree, a leader in solar technology, to
            deliver top-tier solar solutions. Together, we drive innovation and
            sustainability, providing high-performance systems that exceed
            expectations."
          </p>
        </div>
      </div>
    </>
  );
};

export default Partner;
