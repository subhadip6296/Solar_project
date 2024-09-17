import React from "react";
import { images } from "../../assets/Assets";

import { Link } from "react-router-dom";
const ServicesPage = () => {
  return (
    <>
      <div className="relative flex flex-col gap-4">
        <div className="top-image w-full h-[280px] relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={images.rooftop_solar}
            alt="Rooftop Solar"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 bg-gradient-to-t from-black/60 to-transparent text-[#d8d8d8]">
          <h2 className="font-bold text-[24px] md:text-[36px] leading-tight">
            Our Services
          </h2>
          <p className="text-base md:text-lg mt-2 max-w-[90%] md:max-w-[80%]">
            Powering homes and businesses with clean, sustainable energy. From
            residential rooftops to large commercial projects, our expert solar
            installation services deliver efficiency and savings for every
            property.
          </p>
        </div>
      </div>

      <section className="py-10 bg-emerald-50 sm:py-16 lg:py-24 rounded-lg">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
              <div className="overflow-hidden bg-white rounded-lg">
                <div className=" ">
                  <img src={images.residentialsolar} alt="" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[36px] text-l font-[normal]">
                Residential Installation
              </h2>
              <blockquote>
                <p className="mt-6 text-[1rem] text-justify leading-relaxed text-black">
                  Residential solar services provide homeowners with the
                  opportunity to harness the power of the sun to generate clean,
                  renewable energy. By installing solar panels on rooftops,
                  households can significantly reduce their electricity bills
                  and their carbon footprint. These services often include
                  everything from initial consultation and design to
                  installation, maintenance, and monitoring of the solar system.
                  With advancements in solar technology, many systems now offer
                  high efficiency and long-term durability, ensuring reliable
                  energy production for years. Residential solar solutions are a
                  step toward energy independence, offering environmental
                  benefits and increasing property value.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-emerald-50 sm:py-16 lg:py-24 rounded-lg">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
              <div className="overflow-hidden bg-white rounded-lg">
                <div className=" ">
                  <img src={images.commercialinst} alt="" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[36px] text-l font-[normal]">
                Commercial Installation
              </h2>
              <blockquote>
                <p className="mt-6 text-[1rem] text-justify leading-relaxed text-black">
                  Our commercial solar installation services are designed to
                  help businesses reduce energy costs while promoting
                  sustainability. Whether you’re running a small enterprise or
                  managing large industrial operations, we offer tailored solar
                  solutions to meet your energy demands. With our expertise, we
                  ensure seamless integration of solar panels, maximizing
                  efficiency and long-term savings. Investing in commercial
                  solar not only lowers operational expenses but also enhances
                  your brand's commitment to environmental responsibility,
                  making it a smart choice for both your bottom line and the
                  planet.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-emerald-50 sm:py-16 lg:py-24 rounded-lg">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
              <div className="overflow-hidden bg-white rounded-lg">
                <div className=" ">
                  <img src={images.backuppower} alt="" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[36px] text-l font-[normal]">Backup Power</h2>
              <blockquote>
                <p className="mt-6 text-[1rem] text-justify leading-relaxed text-black">
                  Ensure uninterrupted power supply with our top-of-the-line
                  backup power solutions. Our solar backup systems are designed
                  to keep your home or business running smoothly during outages,
                  leveraging advanced solar technology and high-capacity
                  batteries. Whether you need a reliable backup for essential
                  appliances or a comprehensive system to power your entire
                  property, our tailored solutions provide peace of mind and
                  energy independence. With expert installation and ongoing
                  support, you can trust our backup power services to keep the
                  lights on when you need them most.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-emerald-50 sm:py-16 lg:py-24 rounded-lg">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
              <div className="overflow-hidden bg-white rounded-lg">
                <div className=" ">
                  <img src={images.services} alt="" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[36px] text-l font-[normal]">
                Solar Maintenance & Support
              </h2>
              <blockquote>
                <p className="mt-6 text-[1rem] leading-relaxed text-black">
                  At [Your Company Name], we understand that the efficiency and
                  longevity of your solar power system depend on regular
                  maintenance and expert support. Our dedicated service
                  department offers comprehensive maintenance solutions designed
                  to keep your solar energy system operating at peak
                  performance. From routine inspections and preventive care to
                  swift troubleshooting and repairs, our skilled technicians are
                  committed to ensuring your system remains reliable and
                  efficient year-round. With our proactive approach and
                  responsive support, you can enjoy uninterrupted clean energy
                  and peace of mind, knowing that your solar investment is in
                  expert hands.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
