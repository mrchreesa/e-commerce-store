import React, { useState, useEffect } from "react";
import {
  Badge,
  Button,
  Typography,
  IconButton,
  Popper,
  Fade,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkModeContext } from "../context/NavBarContext";
import { useFilterContext } from "../context/NavBarContext";
import {
  useCartItemsContext,
  createCartItem,
} from "../context/CartItemsContext";
import Cart from "./Cart";

export default function NavBar({
  darkMode,
  setDarkMode,
  setPropertyTypeToggle,
  // cartState,
  // getCartItemQuantities,
  // dispatch,
  addToCart,
  setAddToCart,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { cartState, dispatch, getCartItemQuantities } = useCartItemsContext();

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(getCartItemQuantities());
  }, [cartState]);

  const showSidebar = () => setSidebarToggle(!sidebarToggle);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;
  console.log(cartState);
  return (
    <div className="navbar-wrapper">
      <div
        onClick={showSidebar}
        className={sidebarToggle ? "burger" : "burger toggle"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="navbar-logo">
        <Link href="/">
          <img
            className={darkMode ? "navbar-img-light" : "navbar-img-dark"}
            src="/logo.png"
            alt="navbar logo"
          />
        </Link>
      </div>
      {router.pathname !== "/" ? (
        <div
          className={sidebarToggle ? "navbar-menu" : "navbar-menu nav-active"}
          id={"navbar-link-dark"}
        >
          <Link href="/products">
            <a
              onClick={() => setPropertyTypeToggle("all")}
              className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
              href="#"
            >
              All Products
            </a>
          </Link>
          <a
            onClick={() => setPropertyTypeToggle("clothes")}
            className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
            href="#"
          >
            Clothes
          </a>
          <a
            onClick={() => setPropertyTypeToggle("accesories")}
            className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
            href="#"
          >
            Accesories
          </a>
        </div>
      ) : (
        <div></div>
      )}
      <div className="navbar-empty-div"></div>
      <Button style={{ marginRight: 10 }} onClick={toggleDarkMode}>
        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
      <IconButton
        className="navbar-cart"
        aria-describedby={id}
        onClick={handleClick}
      >
        <Badge badgeContent={cartItemCount} color="secondary">
          <h1>🛒</h1>
        </Badge>
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div>
              <Cart
                handleClick={handleClick}
                cartItems={addToCart}
                setCartItems={setAddToCart}
              />
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
