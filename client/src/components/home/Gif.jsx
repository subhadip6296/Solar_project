import React, { useRef, useEffect } from "react";

const FullWidthVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[40vh]">
      {/* Video */}
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        className="w-full h-auto max-h-[500px] object-cover"
        controls
        muted={false}
      />
  
      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          Introduction Video
        </h1>
      </div>
    </div>
  );
}  

export default FullWidthVideo;
