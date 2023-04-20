import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCarts, setCartMessageOn } from "../../feature/cartSlice";
import { shopping_cart } from "../../utils/images";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CartModel from "../../components/CartModel/CartModel";

const CartPage = () => {
  const carts = useSelector(getAllCarts);

  const dispatch = useDispatch();

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };

  if (carts.length === 0) {
    return (
      <div className="container shadow-4xl  h-[500px]">
        <div className=" flex justify-center items-center flex-column font-manrope mt-10 flex-col p-20 gap-10 ">
          <img src={shopping_cart} alt="" className="w-[100px] h-[100px]" />
          <span className="fw-6 fs-15 text-gray">
            Your shopping cart is empty.
          </span>
          <Link to="/" className="shopping-btn bg-orange text-orange-500 fw-5">
            Go shopping Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cart">
        <CartModel carts={carts} handleRemoveCart={handleRemoveCart} />
      </div>
    </div>
  );
};

export default CartPage;
