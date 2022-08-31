import React, { useState, useReducer, useContext } from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";
import DropDownMenu from "./DropDownMenu";
import NavBar from "./NavBar";

import {
  useCartItemsContext,
  createCartItem,
} from "../context/CartItemsContext";

export default function ProductItem({ products, darkMode, setDarkMode }) {
  const { cartState, dispatch, getCartItemQuantities } = useCartItemsContext();

  const [cartItems, setCartItems] = useState(0);
  const [addToCart, setAddToCart] = useState(0);
  const [propertyTypeToggle, setPropertyTypeToggle] = useState("all");

  const [sidebarToggle, setSidebarToggle] = useState(false);
  const showSidebar = () => setSidebarToggle(!sidebarToggle);

  const addCartItems = () => {
    let newCartItem = createCartItem(
      cartItems,
      products[0].description,
      products[0].price * cartItems,
      products[0].name
    );

    // {
    //   quantity: cartItems,
    //   description: cartItems !== 0 ? products[0].description : "",
    //   price: products[0].price * cartItems,
    //   name: products[0].name,
    // };

    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };

  const increment = () => {
    setCartItems(cartItems + 1);
  };
  const decrement = () => {
    setCartItems(cartItems != 0 ? cartItems - 1 : 0);
  };
  console.log(products);
  // console.log(products[0].description);

  return (
    <>
      <NavBar
        setPropertyTypeToggle={setPropertyTypeToggle}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        cartState={cartState}
        getCartItemQuantities={getCartItemQuantities}
        dispatch={dispatch}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Grid container spacing={2} className="product-wrapper">
        <div className="product-left-wrapper">
          <Grid container item md={11} className="product-item-container item">
            <img src={products[0]?.images[0].url} alt="" />
            <br />
            {/* <h1>{products[0]?.name}</h1> */}
          </Grid>
        </div>
        <Grid container item md={6} className="product-right-wrapper">
          <h1>{products[0]?.name}</h1>
          <h2>£{products[0]?.price}</h2>{" "}
          <div className="dropdown">
            <DropDownMenu product={products} />
          </div>
          <h5>{products[0]?.description}</h5>
          <div className="body-right-buttons">
            <ButtonGroup
              className="btn-right-group"
              style={{ borderRadius: "50%" }}
            >
              <Button
                className="btn-inc"
                onClick={decrement}
                style={{
                  border: 0,
                  alignItems: "center",
                  backgroundColor: " hsl(223, 64%, 93%)",
                }}
              >
                <h1>➖</h1>
              </Button>
              <Typography
                className="numbers"
                style={{
                  border: 0,
                  padding: "12px 10px",
                  backgroundColor: " hsl(223, 64%, 93%)",
                  fontSize: "1.5em",
                }}
              >
                {cartItems}
              </Typography>
              <Button
                className="btn-inc"
                onClick={increment}
                style={{
                  border: 0,
                  backgroundColor: " hsl(223, 64%, 93%)",
                }}
              >
                <h1>➕</h1>
              </Button>
            </ButtonGroup>{" "}
            <Button className="btn-add" onClick={addCartItems}>
              Add to cart
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
