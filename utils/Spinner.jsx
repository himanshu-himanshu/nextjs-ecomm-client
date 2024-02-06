import React from "react";
import { ColorRing } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-center items-center">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      <p className="font-Gruppo text-gray-700">
        The joy of dressing is an art.
      </p>
    </div>
  );
};

export default Spinner;
