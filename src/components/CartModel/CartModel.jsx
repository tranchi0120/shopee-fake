import React from "react";
import { formatPrice } from "../../utils/helpers";
import "remixicon/fonts/remixicon.css";
import { useDispatch } from "react-redux";
import { clearCart, removeCart, toggleCartQty } from "../../feature/cartSlice";

import "./CartModel.scss"


const CartModel = ({ carts }) => {
  console.log("cartsModel:", carts);
  const dispatch = useDispatch();

  const totalMoney = carts.reduce((cur, acc) => {
    return cur + acc.totalPrice;
  }, 0);

  return (
    <div className="container">

      <div className="cart grid grid-cols-6 justify-center py-3 px-7   border-none shadow-md bg-white mt-4 ">
        <div className="cart__title">
          <span className="cart__content">S.N.</span>
        </div>
        <div className="cart__title">
          <span className="cart__content -ml-[60px]">Product</span>
        </div>
        <div className="cart__title">
          <span className="cart__content ml-8">Unit Price</span>
        </div>
        <div className="cart__title">
          <span className="cart__content">Quantity</span>
        </div>
        <div className="cart__title">
          <span className="cart__content">Total Price</span>
        </div>
        <div className="cart__title">
          <span className="cart__content">Actions</span>
        </div>
      </div>

      <div className="shadow-md bg-white mt-5">
        {carts.map((item, index) => (
          <div key={index} className="grid grid-cols-6 py-3 px-7  border-none ">
            <h3>{index + 1}</h3>
            <div className="cart-ctd">
              <span className="cart-ctxt -ml-[60px]">{item?.title}</span>
            </div>
            <div className="cart-ctd">
              <span className="cart-ctxt ml-8">
                {formatPrice(item?.discountedPrice)}
              </span>
            </div>
            <div className="border border-gray-400 flex w-[100px] h-[30px] justify-center items-center">
              <div
                className="cursor-pointer text-[600] grow border-r border-gray-400 w-[20px] text-center"
                onClick={() =>
                  dispatch(toggleCartQty({ id: item?.id, type: "DEC" }))
                }
              >
                -
              </div>
              <span className=" gorw-0block w-[30px] text-center ">
                {item.quantity}
              </span>
              <div
                className="cursor-pointer text-[600] grow border-l border-gray-400 w-[20px] text-center"
                onClick={() =>
                  dispatch(toggleCartQty({ id: item?.id, type: "INC" }))
                }
              >
                +
              </div>
            </div>
            <div>{formatPrice(item.totalPrice)}</div>
            <div onClick={() => dispatch(removeCart(item.id))}>
              <i className="ri-delete-bin-line text-[20px] cursor-pointer hover:text-orange-500"></i>
            </div>
          </div>
        ))}

        <div className="flex gap-[200px] justify-between mt-4 p-6">
          <div>
            Total Money: <span className="ml-2">{formatPrice(totalMoney)}</span>
          </div>
          <button
            className="  w-[120px] h-[40px] bg-red-600 border-none rounded-md text-white text-center "
            onClick={() => dispatch(clearCart())}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
