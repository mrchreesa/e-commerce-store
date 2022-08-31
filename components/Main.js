import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import NavBar from "./NavBar";
import CartItemsContext from "../context/CartItemsContext";

export default function Main({ products }) {
  // const [darkMode, setDarkMode] = useState("light");
  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <CartItemsContext>
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </CartItemsContext>

      <div className="main">
        <ProductList products={products} />
      </div>
    </>
  );
}
