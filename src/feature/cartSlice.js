import { createSlice } from "@reduxjs/toolkit";

const fetchFormLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: fetchFormLocalStorage(),
    isCartMessageOn: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;

            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    removeCart: (state, action) => {
      const tempCart = state.carts.filter((cart) => cart.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },

    toggleCartQty: (state, action) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;

          if (action.payload.type === "INC") {
            tempQty++;
            if (tempQty === item.stock) tempQty = item.stock;
            tempTotalPrice = tempQty * item.discountedPrice;
          }

          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.discountedPrice;
          }

          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });

      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
  },
  extraReducers: (build) => {},
});

export const {
  addToCart,
  clearCart,
  setCartMessageOn,
  setCartMessageOff,
  removeCart,
  toggleCartQty,
} = cartSlice.actions;
export const getAllCarts = (state) => state.cart.carts;

export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;
export default cartSlice.reducer;
