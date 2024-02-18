import React from "react";
import { ColorRing } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center bg-gray-200 bg-opacity-75 z-50">
      <div className="flex flex-col items-center">
        <ColorRing
          visible={true}
          height={80}
          width={80}
          ariaLabel="color-ring-loading"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        <p className="font-Gruppo text-gray-700 mt-4">
          The joy of dressing is an art.
        </p>
      </div>
    </div>
  );
};

export default Spinner;
