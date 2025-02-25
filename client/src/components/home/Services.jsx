import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Renewable Energy */}
      <WobbleCard
        containerClassName="col-span-1 h-full bg-pcolor min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Renewable Energy Solutions
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Harness the power of the sun with our innovative solar energy solutions for homes and businesses.
          </p>
        </div>
        {/* <img
          src="https://blog.feniceenergy.com/wp-content/uploads/2024/04/cost-of-solar-panels-for-3-bedroom-house-in-india.jpg"
          width={500}
          height={500}
          alt="Renewable Energy"
          className="absolute -right-4 lg:-right-[20%] md:-bottom-20 -bottom-[0%] object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      
      {/* Smart Mobility */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#FFF9E6]">
        <h2 className="max-w-80 text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
          Smart Mobility Solutions
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-500">
          Revolutionize your daily commute with our energy-efficient and eco-friendly e-bike solutions.
        </p>
        {/* <img
          src="https://cdn.accentuate.io/4658312839264/1653437506625/Mission_Lifestyle_Grey.jpg?v=0"
          width={500}
          height={500}
          alt="Smart Mobility"
          className="absolute -right-4 lg:-right-[20%] md:-bottom-20 -bottom-[0%] object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      
      {/* Student Project Guidance */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#E6F7FF]">
        <h2 className="max-w-80 text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
          Student Project Guidance
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-500">
          Get expert mentorship and resources to build innovative projects and advance your technical skills.
        </p>
        {/* <img
          src="YOUR_PROJECT_GUIDANCE_IMAGE_URL"
          width={500}
          height={500}
          alt="Student Project Guidance"
          className="absolute -right-4 lg:-right-[20%] md:-bottom-20 -bottom-[0%] object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      
      <div className="col-span-1 lg:col-span-3 flex justify-center">
        <Link to={"/services"} className="text-center">
          <Button className="items-center"> Explore More -&gt;</Button>
        </Link>
      </div>
    </div>
  );
}
