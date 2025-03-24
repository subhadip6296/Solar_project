import React from "react";

const FullWidthGif = () => {
  return (
    <div className="w-full">
      <img
        src="https://www.nrcan.gc.ca/sites/www.nrcan.gc.ca/files/energy/images/Green-Infra-Banner_v01.gif"
        alt="Electrification GIF"
        className="w-full h-auto max-h-[300px] object-cover object-left md:object-center"
      />
    </div>
  );
};

export default FullWidthGif;
