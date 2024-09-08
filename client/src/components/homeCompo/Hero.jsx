import React from "react";
import { images } from "../../assets/Assets";

const Hero = () => {
  return (
    <>
      <div className="bg-white">
        <div className="h-[50rem] w-100 dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
          <section className="bg-white bg-opacity-30 py-10 sm:py-16 lg:py-24 z-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <p className="text-base font-semibold tracking-wider text-[#009a8d] uppercase">
                    BETTER SOLUTIONS, GOOD CHOICE
                  </p>
                  <h1 className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-5xl xl:text-6xl">
                    Power Your Future with Sustainable Energy Solutions
                  </h1>
                  <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                    The future belongs to those who harness the power of the
                    sun.
                  </p>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-pcolor rounded-lg lg:mt-16"
                    role="button">
                    Enquire Now
                    <svg
                      className="w-6 h-6 ml-8 -mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <img className="w-full" src={images.hero_image} alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
