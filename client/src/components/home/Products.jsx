import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      productname: "Solar Innovations",
      desc: "Innovative solar-based solutions developed through research and experimentation to improve efficiency and sustainability.",
      icon: "https://5.imimg.com/data5/SELLER/Default/2024/10/458474591/IM/SG/LI/21128519/residential-solar-energy-solutions.jpg",
    },
      {
        productname: "Rooftop Solar",
        desc: "Solar panels installed on rooftops to generate electricity for residential or commercial buildings.",
        icon: "https://energytheory.com/wp-content/uploads/2023/01/Depositphotos_5111838_L-2-e1673931608361-1024x685.jpg",
      },
      {
        productname: "Solar Carport System",
        desc: "A solar panel structure installed over parking spaces, generating clean energy while providing shade and protection for vehicles.",
        icon: "https://www.mbt-energy.com/knowledge/solar-carport-mounting-systems/theme/two-car-solar-carport-for-home-use.jpg",
      },
      {
        productname: "E-Bike for Hiking Trails",
        desc: "An electric bicycle designed for off-road adventures, featuring rugged tires, high-torque motors, and long battery life.",
        icon: "https://www.nps.gov/subjects/biking/images/e-bike-AK-SheldonFamily.jpg",
      },  
      {
        productname: "Student Consulting",
        desc: "Expert guidance for students in renewable energy projects, providing hands-on learning and real-world applications.",
        icon: "https://npr.brightspotcdn.com/dims4/default/4e66033/2147483647/strip/true/crop/689x461+0+0/resize/880x589!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fb8%2F5e%2F7caf07a34a9bbefcbf718d3232ae%2F2022fbxcycleclubbikeswap.png",
      },
      
      {
        productname: "E-Bike Solutions",
        desc: "Cutting-edge e-bike technologies powered by renewable energy, designed for sustainable and efficient transportation.",
        icon: "https://5.imimg.com/data5/SELLER/Default/2021/12/FM/QJ/OR/128638853/5499-500x500.png",
      },
  
  
  ];
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">Our Products</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          <p className="text-base text-gray-700 md:text-lg">
  Our products are designed to promote sustainability and innovation, ranging from high-efficiency solar solutions to cutting-edge e-bicycles.  we offer reliable and eco-friendly options to power the future.
</p>

          </p>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index}>
              <div className="p-5 duration-300 transform bg-white border rounded-md shadow-sm hover:-translate-y-2">
                <img
                  className="rounded md:rounded-md mb-4 h-[200px] md:h-[260px] w-full object-cover object-center"
                  src={product.icon}
                  alt=""
                />
                <h6 className="mb-2 text-xl font-bold leading-5">
                  {product.productname}
                </h6>
                <p className="mb-3 text-sm text-gray-900">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to={"/products"}
          className="text-center w-full flex md:justify-center">
          <Button>Explore More -&gt;</Button>
        </Link>
      </div>
    </>
  );
};

export default Products;
