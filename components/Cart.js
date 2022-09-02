import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Typography, Paper, Popper, Fade } from "@mui/material";
import PreviewPage from "./PreviewPage";
import { useCartItemsContext } from "../context/CartItemsContext";

export default function Cart({ cartItems, setCartItems }) {
  const { cartState: initialCartState, dispatch } = useCartItemsContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const [cartState, setCartState] = useState([]);

  useEffect(() => {
    setCartState(initialCartState);
  }, [initialCartState]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const cartTotal = /*cartState?.quantity * cartState?.price*/ 123;

  const resetCart = (index) => {
    let indexOfItem = index;

    dispatch({ type: "DELETE_ITEM", payload: indexOfItem });
    console.log(cartState);
  };

  return (
    <Paper className="cart-container" elevation={3}>
      <Typography className="cart-text">
        {" "}
        Cart <div>🛒</div>{" "}
      </Typography>
      {cartState?.length == 0 ? (
        <p className="empty-cart">Shopping Cart Is Empty</p>
      ) : (
        <>
          {cartState?.map((cartItem, cartIndex) => (
            <div key={cartItem.name} className="cart-content">
              <div key={cartItem.price} className="cart-info">
                <h4>{cartItem?.name}</h4>
                <p>
                  £{cartItem?.price} x {cartItem?.quantity} ={" "}
                </p>
                <h5>${cartTotal}.00</h5>
              </div>
              <Button onClick={() => resetCart(cartIndex)}>
                <h1>✘</h1>
              </Button>
            </div>
          ))}
        </>
      )}{" "}
      <Button
        onClick={cartItems == 0 ? handleClick : ""}
        className="btn-checkout"
      >
        {cartState?.quantity == 0 ? (
          "CLOSE"
        ) : (
          // <Link href="/checkout">Checkout</Link>
          <PreviewPage />
        )}
      </Button>
    </Paper>
  );
}
