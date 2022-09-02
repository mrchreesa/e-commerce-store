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
}
const initialCartState =
  localStorageCartState !== null ? [...localStorageCartState] : [];

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
    case "DELETE_ITEM": {
      let updatedCartState;

      if (typeof window !== "undefined") {
        let storedProducts = JSON.parse(
          window.localStorage.getItem("cartState")
        );
        let indexToRemove = action.payload;
        if (indexToRemove > -1) {
          // only splice array when item is found
          storedProducts.splice(indexToRemove, 1); // 2nd parameter means remove one item only
        }
        localStorage.setItem("cartState", JSON.stringify(storedProducts));
        updatedCartState = storedProducts;
      }
      return updatedCartState;
    }
  }
};

export default function CartItemsPorvider({ children }) {
  const [cartState, dispatch] = useReducer(reducer, initialCartState);
  const getCartItemQuantities = () => {
    let quantity = 0;
    cartState?.forEach((item) => {
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
