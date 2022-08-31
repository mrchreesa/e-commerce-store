import React, { createContext, useContext, useReducer, useState } from "react";

const CartItemsContext = createContext({});
// const StateContext = createContext({});
// const DispatchContext = createContext({});

export const createCartItem = (quantity, description, price, name) => ({
  quantity: quantity,
  description: description,
  price: price,
  name: name,
});
let localStorageCartState = [];
if (typeof window !== "undefined") {
  localStorageCartState = JSON.parse(window.localStorage.getItem("cartState"));
  console.log(window.localStorage.getItem("cartState"), localStorageCartState);
}
const initialCartState = [...localStorageCartState];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      let updatedCartState = [...state];
      updatedCartState.push(action.payload);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "cartState",
          JSON.stringify(updatedCartState)
        );
      }
      return updatedCartState;
    }
  }
};

export default function CartItemsPorvider({ children }) {
  const [cartState, dispatch] = useReducer(reducer, initialCartState);
  const getCartItemQuantities = () => {
    let quantity = 0;
    cartState.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  };
  return (
    <CartItemsContext.Provider
      value={{ dispatch, cartState, getCartItemQuantities }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
export const useCartItemsContext = () => useContext(CartItemsContext);
// export const useDispatchContext = () => useContext(DispatchContext);
// export const useStateContext = () => useContext(StateContext);
