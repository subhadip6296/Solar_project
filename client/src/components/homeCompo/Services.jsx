"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pcolor min-h-[500px] lg:min-h-[300px]"
        className=""
      >
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
          src="https://tse1.mm.bing.net/th?id=OIP.O1ksNmE6G9P1S1LSUjwErwHaE8&pid=Api&P=0&h=180"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] md:-bottom-10 -bottom-[0%] object-contain rounded-2xl"
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
        className=""
      >
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
          src="https://tse1.mm.bing.net/th?id=OIP.kCQSDj4fpnBPCNvmWA2jeAHaDe&pid=Api&P=0&h=180"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] md:-bottom-10 bottom-[10%] object-contain rounded-2xl"
        />
      </WobbleCard>
      {/* <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-cyan-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.kCQSDj4fpnBPCNvmWA2jeAHaDe&pid=Api&P=0&h=180"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-[8%] object-contain rounded-2xl"
        />
      </WobbleCard> */}
    </div>
  );
}