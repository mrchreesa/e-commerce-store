import React, { useState } from "react";
import { Button, Typography, Paper, Popper, Fade } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// import deleteIcon from "../images/icon-delete.svg";
// import product1Thumbnail from "../images/image-product-1-thumbnail.jpg";

export default function Cart({ cartItems, setCartItems }) {
  // const [cartItems, setCartItems] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const cartTotal = cartItems * 125;

  const resetCart = () => {
    setCartItems(0);
  };

  return (
    <Paper className="cart-container" elevation={3}>
      <Typography className="cart-text"> Cart </Typography>
      {cartItems == 0 ? (
        <p className="empty-cart">Shopping Cart Is Empty</p>
      ) : (
        <>
          <div className="cart-content">
            <h1>🛒</h1>
            <div className="cart-info">
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x {cartItems} = </p>
              <h5>${cartTotal}.00</h5>
            </div>
            <Button onClick={resetCart}>
              <h1>✘</h1>
            </Button>
          </div>
        </>
      )}{" "}
      <Button
        onClick={cartItems == 0 ? handleClick : ""}
        className="btn-checkout"
      >
        {cartItems == 0 ? "CLOSE" : "Checkout"}
      </Button>
    </Paper>
  );
}
