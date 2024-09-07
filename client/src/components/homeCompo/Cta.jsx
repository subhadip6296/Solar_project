import React from "react";
import { Link } from "react-router-dom";
const Cta = () => {
  return (
    <>
      <section className="py-10 bg-emerald-50 sm:py-16 lg:py-24 rounded-lg">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
            <div>
              <img
                className="object-cover w-16 h-16 rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfljp0XK6-xbKd0UVa8jtosMtX4kyIO5HhKw&s"
                alt=""
              />
              <blockquote>
                <p className="mt-6 text-lg leading-relaxed text-black">
                  “At GW Infra Solutions, we are dedicated to providing
                  cutting-edge solar solutions that drive innovation and
                  sustainability. Our mission is to empower our clients with
                  energy-efficient systems that not only meet their needs but
                  exceed their expectations.”
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-black">
                — Deepansh Singh (Managing Director)
              </p>
              <p className="mt-1 text-base text-gray-600 pl-5">
                GW Infra Solutions
              </p>
            </div>

            <div>
              <div className="overflow-hidden bg-white rounded-lg">
                <div className="p-8 lg:px-12 lg:py-10">
                  <h3 className="text-2xl font-semibold text-black">
                    Holistic Solar Solutions{" "}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Discover affordable and reliable solar solutions tailored to
                    your needs. Let us help you make the switch today.
                  </p>

                  <Link
                    to={"/user/contact"}
                    title=""
                    className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-[#009A8D] border-2 border-transparent rounded-md hover:bg-[#009A8D]/90"
                    role="button">
                    Consult with Us
                  </Link>

                  <Link
                    to={"/user/services"}
                    title=""
                    className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white"
                    role="button">
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
