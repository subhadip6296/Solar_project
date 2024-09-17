import NewsSection from "@/components/EventsNews/NewsSection";
import React from "react";

const UpdatesPage = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-12 mb-8">
        <h2 className="text-3xl text-center text-pcolor font-bold">
          Latest News on Solar Infrastructure
        </h2>
      </div>

      <NewsSection />
    </>
  );
};

export default UpdatesPage;
