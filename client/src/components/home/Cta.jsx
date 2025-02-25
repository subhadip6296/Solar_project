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
                alt="Evoltriv Logo"
              />
              <blockquote>
                <p className="mt-6 text-lg leading-relaxed text-black">
                  “At Evoltriv, we are committed to a sustainable future by
                  integrating renewable energy, smart mobility, and hands-on
                  learning experiences. Our mission is to empower individuals
                  with cutting-edge technology that enhances both innovation and
                  environmental responsibility.”
                </p>
              </blockquote>
              <p className="mt-6 text-base font-semibold text-black">
                — [Ashi] (Founder & CEO)
              </p>
              <p className="mt-1 text-base text-gray-600 pl-5">Evoltriv</p>
            </div>

            <div>
              <div className="overflow-hidden bg-white rounded-lg">
                <div className="p-8 lg:px-12 lg:py-10">
                  <h3 className="text-2xl font-semibold text-black">
                    Explore Our Solutions
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Discover how Evoltriv is revolutionizing energy and mobility
                    with solar solutions, electric bicycles, and student-led
                    innovation projects.
                  </p>

                  <Link
                    to={"/contact"}
                    className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-[#009A8D] border-2 border-transparent rounded-md hover:bg-[#009A8D]/90"
                    role="button">
                    Get in Touch
                  </Link>

                  <Link
                    to={"/services"}
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
