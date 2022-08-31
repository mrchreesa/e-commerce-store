import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import NavBar from "./NavBar";
import CartItemsContext from "../context/CartItemsContext";

export default function Main({ products }) {
  // const [darkMode, setDarkMode] = useState("light");
  const [cartItems, setCartItems] = useState(0);

  // const theme = createTheme({
  //   palette: {
  //     mode: darkMode ? "light" : "dark",
  //   },
  // });
  // useEffect(() => {
  //   document.body.style.backgroundColor = darkMode ? "white" : "hsl(0, 0%, 8%)";
  //   document.body.style.transition = "all 1s";
  // }, [darkMode]);
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
