// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../ui/button";
// import { WobbleCard } from "../ui/wobble-card";

// export function WobbleCardDemo() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
//       {/* Renewable Energy */}
//       <WobbleCard
//         containerClassName="col-span-1 h-full bg-pcolor min-h-[300px]"
//         className="">
//         <div className="max-w-xs">
//           <h2 className="text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//             Renewable Energy Solutions
//           </h2>
//           <p className="mt-4 text-left text-base/6 text-neutral-200">
//             Harness the power of the sun with our innovative solar energy solutions for homes and businesses.
//           </p>
//         </div>
//         {/* <img
//           src="https://blog.feniceenergy.com/wp-content/uploads/2024/04/cost-of-solar-panels-for-3-bedroom-house-in-india.jpg"
//           width={500}
//           height={500}
//           alt="Renewable Energy"
//           className="absolute -right-4 lg:-right-[20%] md:-bottom-20 -bottom-[0%] object-contain rounded-2xl"
//         /> */}
//       </WobbleCard>
      
//       {/* Smart Mobility */}
//       <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#FFF9E6]">
//         <h2 className="max-w-80 text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
//           Smart Mobility Solutions
//         </h2>
//         <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-500">
//           Revolutionize your daily commute with our energy-efficient and eco-friendly e-bike solutions.
//         </p>
//         {/* <img
//           src="https://cdn.accentuate.io/4658312839264/1653437506625/Mission_Lifestyle_Grey.jpg?v=0"
//           width={500}
//           height={500}
//           alt="Smart Mobility"
//           className="absolute -right-4 lg:-right-[20%] md:-bottom-20 -bottom-[0%] object-contain rounded-2xl"
//         /> */}
//       </WobbleCard>
      
//       {/* Student Project Guidance */}
//       <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#E6F7FF]">
//         <h2 className="max-w-80 text-left text-balance text-[20px] md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-gray-800">
//           Student Project Guidance
//         </h2>
//         <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-500">
//           Get expert mentorship and resources to build innovative projects and advance your technical skills.
//         </p>
//         {/* <img
//           src="YOUR_PROJECT_GUIDANCE_IMAGE_URL"
//           width={500}
//           height={500}
//           alt="Student Project Guidance"
//           className="absolute -right-4 lg:-right-[20%] md:-bottom-20 -bottom-[0%] object-contain rounded-2xl"
//         /> */}
//       </WobbleCard>
      
//       <div className="col-span-1 lg:col-span-3 flex justify-center">
//         <Link to={"/services"} className="text-center">
//           <Button className="items-center"> Explore More -&gt;</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { WobbleCard } from "../ui/wobble-card";

const products = [
  {
    id: 1,
    category: "Renewable Services",
    heading: "Harnessing the Power of the Sun",
    description:
      "Our renewable energy solutions focus on sustainability and efficiency. Whether it's solar street lights, rooftop solar panels, or solar water pumps, we provide cost-effective and long-term energy solutions for residential and commercial use.",
    items: [
      {
        name: "Solar Rooftop Installation",
        description: "Solar panel systems installed on rooftops for residential and commercial properties.",
        image: "https://media.istockphoto.com/id/525206743/photo/solar-panel-on-a-red-roof.jpg?s=612x612&w=0&k=20&c=xcAkdNj8dFDhu8734FpRDAZDtN2bjr48RKEd9j2FL0U=",
      },
      {
        name: "Solar Water Pump",
        description: "Solar-powered water pumping systems for agricultural, industrial, and household use.",
        image: "https://kenbrooksolar.com/wp-content/uploads/3HP-solar-water-pump.jpg",
      },
      {
        name: "Solar PV Consulting",
        description: "Professional cleaning and maintenance services to optimize solar panel performance.",
        image: "https://thumbs.dreamstime.com/b/solar-power-consultant-expert-roof-installing-panel-345870488.jpg",
      },
    ],
  },
  {
    id: 2,
    category: "E-Bikes & Electric Mobility",
    heading: "Revolutionizing Urban Transportation",
    description:
      "Our electric bikes and mobility solutions provide an eco-friendly, cost-effective, and efficient way to travel. Whether you need a city e-bike, an off-road hiking bike, or a high-speed electric racing bike, we have the perfect ride for you.",
    items: [
      {
        name: "E-Bike Manufacturing",
        description: "Design and production of high-performance electric bicycles for urban and off-road use.",
        image: "https://prelaunch.com/blog/wp-content/uploads/2023/12/electric-bike-manufacturing-process.jpg",
      },
      {
        name: "E-Bike Repair",
        description: "Comprehensive maintenance and repair services for all electric bike models.",
        image: "https://media.istockphoto.com/id/2051058317/photo/bike-mechanic-testing-the-rear-gear-shift-and-brakes-of-a-mountain-bike.jpg?s=612x612&w=0&k=20&c=Kt7TqVMeOd_tmYfH4Gsxf_OnMlomOaBjnSA9caC9iYU=",
      },
      {
        name: "Convert Your Standard Bike into E-Bike",
        description: "Upgrade your existing bicycle with an electric conversion kit for an enhanced riding experience.",
        image: "https://fuell.eu/cdn/shop/files/F2-LIFESTLYE-ERIC-_3670080_aac07b60-2490-4a5b-95b1-d02d8a1eb061.webp?v=1689338110",
      },
    ],
  },
  {
    id: 3,
    category: "Student Innovations",
    heading: "Empowering Future Innovators",
    description:
      "We provide guidance and resources to help students turn their ideas into reality. From solar-powered charging stations to smart irrigation systems, our student innovations are designed to create real-world impact while fostering technical and creative skills.",
    items: [
      {
        name: "Workshops",
        description: "Interactive training sessions providing hands-on experience in various technical domains.",
        image: "https://www.mohawkcollege.ca/sites/default/files/inline-images/IoT%20Website%20Cover%20Photo%20High%20resolution.jpg",
      },
      {
        name: "Internships",
        description: "Hands-on internship programs to gain industry exposure and practical knowledge.",
        image: "https://cms-resources.prod.the-internal.cloud/sites/default/files/styles/featured_image/public/2023-08/Teamwork,%20support%20and%20structure%20the%20core%20principles%20of%20rewarding%20student%20internships%20.jpg?itok=bIauL3SE",
      },
      {
        name: "Project Support & Guidance",
        description: "Comprehensive guidance for students to develop and execute technical projects successfully.",
        image: "https://media.istockphoto.com/id/482007476/photo/architect-explaining-project-plan-to-clients.jpg?s=612x612&w=0&k=20&c=-SNffUzlWyXiq81KiB_3A_EZvHYwJiU7b99TbLs0pfQ=",
      },
    ],
  },
  

];
export function WobbleCardDemo() {
  return (
    <div className="max-w-7xl mx-auto w-full space-y-16">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Alternating Layout: If index is even, show card first, else show description first */}
          {index % 2 === 0 ? (
            <>
              {/* Category Card (Left for even, Right for odd) */}
              <WobbleCard containerClassName="h-full min-h-[300px] bg-green-100 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {product.category}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Discover our latest solutions in {product.category}.
                </p>
              </WobbleCard>

              {/* Description (Right for even, Left for odd) */}
              <div className="space-y-4 p-6 min-h-[300px] flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {product.heading}
                </h3>
                <p className="text-lg text-gray-700">{product.description}</p>
              </div>
            </>
          ) : (
            <>
              {/* Description (Left for odd) */}
              <div className="space-y-4 p-6 min-h-[300px] flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {product.heading}
                </h3>
                <p className="text-lg text-gray-700">{product.description}</p>
              </div>

              {/* Category Card (Right for odd) */}
              <WobbleCard containerClassName="h-full min-h-[300px] bg-green-100 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {product.category}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Discover our latest solutions in {product.category}.
                </p>
              </WobbleCard>
            </>
          )}

          {/* Products Heading */}
          <div className="col-span-1 lg:col-span-2 text-center mt-10">
            <h4 className="text-3xl font-bold text-gray-900">
              Services in {product.category}
            </h4>
          </div>

          {/* Product Cards (Three Larger Cards) */}
          <div className="col-span-1 lg:col-span-2 flex flex-wrap justify-center gap-6">
            {product.items.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg overflow-hidden w-[350px] h-[400px] flex flex-col items-center p-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <h4 className="text-xl font-semibold text-gray-800 mt-3">
                  {item.name}
                </h4>
                <p className="text-gray-600 text-center text-md mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          {/* Explore More Button */}
<div className="col-span-1 lg:col-span-2 text-center mt-6">
  <Link to={"/products"}>
    <Button className="bg-[#118B50] hover:bg-green-900 text-white px-6 py-3 rounded-lg">
      Explore More
    </Button>
  </Link>
</div>

        </div>
      ))}
    </div>
  );
}
