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
    <div className="w-full h-[40vh] ">
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
        className="w-full h-auto max-h-[500px] object-cover"
        controls
        muted={false} // Sound is enabled
      />
    </div>
  );
};

export default FullWidthVideo;
