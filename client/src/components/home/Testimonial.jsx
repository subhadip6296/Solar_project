import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  
    {
      "name": "Amit Verma",
      "description": "Evoltriv’s solar installation transformed my home’s energy efficiency. My electricity bills have reduced significantly, and the installation process was smooth and professional.",
      "rating": 5
    },
    {
      "name": "Sneha Kapoor",
      "description": "I recently purchased an e-bike from Evoltriv, and it has been a game-changer! The battery life is great, and it’s perfect for my daily commute. Highly recommend it!",
      "rating": 4
    },
    {
      "name": "Rohit Sharma",
      "description": "Their student consulting service helped me and my team with our renewable energy project. The guidance was clear, and we successfully built our prototype on time!",
      "rating": 5
    },
    {
      "name": "Pooja Reddy",
      "description": "The off-grid solar system I got from Evoltriv is perfect for my farmhouse. It works efficiently, and I no longer worry about power cuts!",
      "rating": 5
    },
    {
      "name": "Karthik Mehta",
      "description": "Evoltriv's team was very helpful in explaining how on-grid solar works. The installation was seamless, and I’m already seeing great savings on my power bill!",
      "rating": 4
    }
  
  
  // Add more testimonials as needed
];

const Testimonial = () => {
  const sliderRef = useRef(null);
  const keenSliderRef = useRef(null);

  useEffect(() => {
    keenSliderRef.current = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () =>
      keenSliderRef.current.prev()
    );
    keenSliderNext.addEventListener("click", () =>
      keenSliderRef.current.next()
    );

    const autoSlide = setInterval(() => {
      keenSliderRef.current.next();
    }, 3000); // Change slide every 2 seconds

    return () => {
      keenSliderPrevious.removeEventListener("click", () =>
        keenSliderRef.current.prev()
      );
      keenSliderNext.removeEventListener("click", () =>
        keenSliderRef.current.next()
      );
      clearInterval(autoSlide); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="px-4 lg:mx-20 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>
            <p className="mt-4 text-gray-700">
  Hear what our satisfied customers have to say about their experiences with our solar solutions, e-bikes, and student consulting services. Your trust and satisfaction drive us to deliver the best!
</p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-pcolor p-3 text-pcolor transition hover:bg-pcolor hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-pcolor p-3 text-pcolor transition hover:bg-pcolor hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-emerald-50 p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, idx) => (
                            <svg
                              key={idx}
                              className="size-5"
                              fill="#009A8D"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )
                        )}
                      </div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-black sm:text-3xl">
                          {testimonial.name}
                        </p>
                        <p className="mt-4 leading-relaxed text-gray-700">
                          {testimonial.description}
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; {testimonial.name}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
