import React from "react";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="flex flex-col gap-3 relative shadow-4xl pb-[20px]">
        <div className="w-full h-[300px] border-orange-600 border-2">
          <img
            className="w-full
            object-cover h-full"
            src={product?.images[0]}
            alt={product.title}
          />
        </div>
        <div className="flex gap-3 justify-center items-center  pb-2">
          <span className="text-[#5e5b5bc4] pointer-events-none">brand: </span>
          <span className="font-[600]">{product?.brand}</span>
        </div>
        <div className="text-center font-[500] w-full h-[40px] ">
          {product?.title}
        </div>
        <div className="flex justify-evenly items-center gap-5">
          <span className="block line-through">
            {formatPrice(product?.price)}
          </span>
          <span className="font-medium text-[18px]">
            {formatPrice(product?.discountedPrice)}
          </span>
          <span className="text-orange-500 font-bold">
            {" "}
            ({product?.discountPercentage}% Off)
          </span>
        </div>
        <div className="absolute w-full top-6 -left-2  z-20">
          <span className="text-white bg-orange-600 pl-3 w-full p-2 ">
            {" "}
            {product?.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
