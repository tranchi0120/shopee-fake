import React from "react";
import { correct } from "../../utils/images";

const CartMessage = () => {
  return (
    <div className="container">
      <div className=" w-[500px] h-[250px] bg-[#4c4848d9] flex flex-col gap-9 absolute top-[50%] left-[50%]  translate-y-[-50%] translate-x-[-50%] items-center justify-center">
        <div className="w-[50px] h-[50px] ">
          <img className="w-full object-cover" src={correct} alt="" />
        </div>
        <h4 className="text-white ">
          An item has been added to your shopping cart
        </h4>
      </div>
    </div>
  );
};

export default CartMessage;
