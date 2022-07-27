import React, { useState } from "react";
import { Button, Typography, Paper, Popper, Fade } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// import deleteIcon from "../images/icon-delete.svg";
// import product1Thumbnail from "../images/image-product-1-thumbnail.jpg";

export default function Cart({ cartItems, setCartItems, cartState, dispatch }) {
  // const [cartItems, setCartItems] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const cartTotal = cartState.quantity * cartState.price;

  const resetCart = () => {
    let newCartItems = {
      quantity: 0,
      description: "",
      price: 0,
    };

    dispatch({ type: "ADD_ITEM", payload: newCartItems });
  };

  return (
    <Paper className="cart-container" elevation={3}>
      <Typography className="cart-text"> Cart </Typography>
      {cartState.quantity == 0 ? (
        <p className="empty-cart">Shopping Cart Is Empty</p>
      ) : (
        <>
          <div className="cart-content">
            <h1>🛒</h1>
            <div className="cart-info">
              <p>{cartState.name}</p>
              <p>
                £{cartState.price} x {cartState.quantity} ={" "}
              </p>
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
