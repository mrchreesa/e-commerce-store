import React, { useState } from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";
import Cart from "./Cart";
import NavBar from "./NavBar";

// import cart from "./images/icon-cart.svg";

export default function ProductItem({ products }) {
  const [cartItems, setCartItems] = useState(0);
  const [addToCart, setAddToCart] = useState(0);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const showSidebar = () => setSidebarToggle(!sidebarToggle);

  const increment = () => {
    setCartItems(cartItems + 1);
  };
  const decrement = () => {
    setCartItems(cartItems != 0 ? cartItems - 1 : 0);
  };
  console.log(products);
  return (
    <>
      <NavBar
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
          <h2>£{products[0]?.price}</h2>
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
                {/* <img src={minus} alt="plus" /> */}
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
            <Button className="btn-add" onClick={() => setAddToCart(cartItems)}>
              {/* <img src={cart} alt="" /> */}
              Add to cart
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
