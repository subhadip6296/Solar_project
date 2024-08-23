import React from "react";
import { videos } from "@/assets/Assets";

const Services = () => {
  const services = [
    {
      servicename: "Residential Installation",
      desc: "Custom solar solutions tailored for homes to reduce energy bills.",
      icon: (
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      ),
    },
    {
      servicename: "Commercial Installation",
      desc: "Scalable solar systems designed for businesses to optimize energy costs.",
      icon: (
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      ),
    },
    {
      servicename: "Service Department",
      desc: " Expert maintenance and support to keep your solar systems running smoothly.",
      icon: (
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      ),
    },

    {
      servicename: "Back-up Power",
      desc: "Reliable backup power solutions to ensure energy availability during outages.",
      icon: (
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      ),
    },
  ];
  return (
    <>
      <div className="px-4 pt-16 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">Our Services</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-emerald-100">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      color="#009a8d"
                      viewBox="0 0 52 52">
                      {service.icon}
                    </svg>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    {service.servicename}
                  </h6>
                  <p className="mb-3 text-sm text-gray-900">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none flex justify-center items-center">
          <div className="flex relative w-[75vw] md:w-[55vw] ">
            <video
              className="mt-8 md:mt-16 rounded-md w-full object-cover -z-[1]"
              autoPlay
              muted
              loop
              playsInline>
              <source src={videos.animation} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
