import React from "react";
import { images } from "@/assets/Assets";
const Partner = () => {
  return (
    <>
      <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-20">
        <div className="sm:text-center">
          <h1 className=" mb-14 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Channel Partner
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-y-5 gap-x-24 justify-center md:items-center items-start md:m-auto m-0  transition ease-out duration-700 ">
            <img
              className="w-[60%] md:w-[22%]"
              src={images.Waree_Logo}
              alt=""
            />

            <p className="w-[80%] md:w-[45%] text-gray-700 dark:text-gray-400 font-normal text-base text-justify md:text-xl leading-7">
              “ We proudly partner with Waaree, a leader in solar technology, to
              deliver innovative and sustainable solar solutions that exceed
              expectations. ”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
