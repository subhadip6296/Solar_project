import React from "react";

const galleryData = [
  // {
  //   title: "Best Innovation Award 2024",
  //   description: "Our company received the prestigious Best Innovation Award for outstanding contributions in AI-driven technology.",
  //   image: "https://www.nsc.org/getmedia/ead6ddfd-2717-4cef-9942-36c113ea6621/award-og.jpg?width=1200&height=630&ext=.jpg",
  // },
  // {
  //   title: "Tech Conference 2023",
  //   description: "We participated in the Global Tech Conference to showcase our latest AI advancements.",
  //   image: "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=",
  // },
  // {
  //   title: "Community Outreach Program",
  //   description: "Engaging with the community through tech education and mentorship programs.",
  //   image: "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2023/07/teaserbox_903940272.jpg",
  // },
  {
    title: "Product Launch Event",
    description: "A grand launch event for our latest AI-powered product.",
    image: "https://www.evenesis.com/wp-content/uploads/product-launch-event.jpg",
  },
  {
    title: "Hackathon Victory",
    description: "Our team secured first place in an international hackathon competition.",
    image: "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b",
  },
  // {
  //   title: "Annual Team Meetup",
  //   description: "Celebrating our achievements and planning for the future at our annual retreat.",
  //   image: "https://www.greatplacetowork.com/images/profiles/7079383/company_image_1.webp",
  // },
];

const GalleryPage = () => {
  return (
    <div className=" bg-gradient-to-b from-[#118B50]/10 to-transparent mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
      <div className="space-y-12">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
