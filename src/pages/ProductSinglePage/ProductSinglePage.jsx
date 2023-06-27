import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../utils/status";
import { formatPrice } from "../../utils/helpers";
import {
  fetchproductSingle,
  getProductSingle,
  getProductSingleStatus,
} from "../../feature/productSice";
import Loader from "../../components/Loader/Loader";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../feature/cartSlice";
import CartMessage from "../../components/CartMessage/CartMessage";

const ProductSinglePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const product = useSelector(getProductSingle);

  const productSingleStatus = useSelector(getProductSingleStatus);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  // get productSingle
  useEffect(() => {
    dispatch(fetchproductSingle(id));
  }, []);

  if (cartMessageStatus) {
    setTimeout(() => {
      dispatch(setCartMessageOff());
    }, 1000);
  }

  let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const addToCartHandler = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn(true));
  };

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  return (
    <div className="container">
      <div className="relative">
        <div>
          <div className="bg-gray-100 m-3 p-7 shadow-2xl grid grid-cols-2 gap-20  ">
            <div className="">
              <div className=" flex h-[500px] shadow-5x">
                <img
                  src={product ? (product.images ? product.images[0] : "") : ""}
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <div className="grid grid-cols-4 gap-5 mt-6 ">
                {productSingleStatus === STATUS.SUCCEEDED
                  ? product.images.map((img, idx) => (
                    <div className="border  shadow-5xl h-[100px] " key={idx}>
                      <img
                        src={img}
                        alt=""
                        className="h-full object-cover w-full"
                      />
                    </div>
                  ))
                  : ""}
                {/* <div className="border  shadow-5xl h-[100px] ">
                  <img
                    src={
                      product ? (product.images ? product.images[2] : "") : ""
                    }
                    alt=""
                    className="h-full object-cover w-full"
                  />
                </div>
                <div className="border  shadow-5xl h-[100px] ">
                  <img
                    src={
                      product ? (product.images ? product.images[3] : "") : ""
                    }
                    alt=""
                    className="h-full object-cover w-full"
                  />
                </div>
                <div className="border  shadow-5xl h-[100px] ">
                  <img
                    src={
                      product ? (product?.images ? product?.images[4] : "") : ""
                    }
                    alt=""
                    className="h-full object-cover w-full"
                  />
                </div> */}
              </div>
            </div>
            <div className="flex-1">
              <h3
                className="text-#000000 
          font-[600] leading-tight 
          border-b border-gray-300 py-4 text-[30px]
           "
              >
                {product.title}
              </h3>
              <p className="mt-10 font-light text-black ">
                {product.description}
              </p>
              <div className="flex justify-start items-center mt-8 gap-8 pb-5">
                <div>
                  <span className="text-orange-500">Rating:</span>
                  <span className="text-black font-light ml-3">
                    {product.rating}
                  </span>
                </div>
                <div className="w-[1px] bg-orange-400 h-[20px] border border-orange-600"></div>
                <div>
                  <span className="text-orange-500">Brand:</span>
                  <span className="text-black font-light ml-3">
                    {product.brand}
                  </span>
                </div>
                <div className="w-[1px] bg-orange-400 h-[20px] border border-orange-600"></div>
                <div>
                  <span className="text-orange-500">Category:</span>
                  <span className="text-black font-light ml-3">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-7 bg-red-100 flex gap-4 flex-col ">
                <div className="flex gap-9 ">
                  <span className="block line-through text-[#6a706a]">
                    {formatPrice(product?.price)}
                  </span>
                  <span className="text-[#2e2929]">
                    {" "}
                    Inclusive of all taxes
                  </span>
                </div>
                <div className="flex gap-5  items-center">
                  <span className="block font-bold text-orange-600 text-4xl">
                    {formatPrice(discountedPrice)}
                  </span>
                  <span className="bg-orange-600 text-white p-2 text-[10px]">
                    {product?.discountPercentage}% OFF
                  </span>
                </div>
              </div>
              <div className="mt-9 flex gap-7">
                <span className="font-[400] text-[17px]">Quantity:</span>
                <div className="border border-gray-400 flex w-[200] h-[30px] justify-center items-center">
                  <div
                    className="cursor-pointer text-[600] grow border-r border-gray-400 w-[50px] text-center"
                    onClick={() => decreaseQty()}
                  >
                    -
                  </div>
                  <span className=" gorw-0block w-[50px] text-center ">
                    {quantity}
                  </span>
                  <div
                    className="cursor-pointer text-[600] grow border-l border-gray-400 w-[50px] text-center"
                    onClick={() => increaseQty()}
                  >
                    +
                  </div>
                </div>
              </div>
              <div className="mt-28 flex gap-5">
                <button
                  className="flex gap-4 justify-center items-center bg-orange-300 border border-orange-600 px-6 py-4 text-orange-600  hover:text-white "
                  onClick={() => addToCartHandler(product)}
                >
                  <span className=" ">
                    <i className="ri-shopping-cart-line"></i>
                  </span>
                  <span className="">Add to cart</span>
                </button>
                <button className=" text-orange-600 bg-white border border-orange-600 px-6 py-4 hover:bg-orange-600 hover:text-white">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        {cartMessageStatus && <CartMessage />}
      </div>
    </div>
  );
};

export default ProductSinglePage;
