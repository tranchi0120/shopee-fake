import React from "react";
import { loader } from "../../utils/images";

const Loader = () => {
  return (
    <div className="container flex justify-center items-center">
      <div
        className="flex justify-center items-center w-[90px]
      h-[90px]"
      >
        <img src={loader} alt="" />
      </div>
    </div>
  );
};

export default Loader;
