"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pcolor min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Residential Solar Installation
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Transform your home into an energy-efficient powerhouse with our
            custom solar solutions.
          </p>
        </div>
        <img
          src="https://blog.feniceenergy.com/wp-content/uploads/2024/04/cost-of-solar-panels-for-3-bedroom-house-in-india.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] md:-bottom-20 -bottom-[0%] object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#FFF9E6]">
        <h2 className="max-w-80  text-left text-balance text-[20px] text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
          Expert Solar Maintenance & Support
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-500">
          Ensure your solar systems are always performing at their best with our
          comprehensive service department.{" "}
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#FFF9E6]">
        <h2 className="max-w-80  text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
          Reliable Backup Power Solutions
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-500">
          Never worry about power outages again with our robust backup power
          systems.{" "}
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pcolor min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Commercial Solar Solutions
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Optimize energy costs and enhance sustainability with our scalable
            solar systems designed for businesses.
          </p>
        </div>
        <img
          src="https://blog.feniceenergy.com/wp-content/uploads/2024/05/Commercial-solar-solutions.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] md:-bottom-[100px] -bottom-[30px] object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
