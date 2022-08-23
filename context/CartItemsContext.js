import React, { createContext, useContext, useReducer, useState } from "react";

const CartItemsContext = createContext({});
// const StateContext = createContext({});
// const DispatchContext = createContext({});

const initialCartState = {
  quantity: 0,
  description: "",
  price: 0,
  name: "",
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_ITEM": {
      const newState = action.payload;
      return newState;
    }
  }
};

export default function CartItemsPorvider({ children }) {
  const [cartState, dispatch] = useReducer(reducer, initialCartState);

  return (
    <CartItemsContext.Provider value={{ dispatch, cartState }}>
      {children}
    </CartItemsContext.Provider>
  );
}
export const useCartItemsContext = () => useContext(CartItemsContext);
// export const useDispatchContext = () => useContext(DispatchContext);
// export const useStateContext = () => useContext(StateContext);
