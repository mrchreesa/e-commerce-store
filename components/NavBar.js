import React, { useState } from "react";
import {
  Badge,
  Button,
  Typography,
  IconButton,
  Popper,
  Fade,
} from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Cart from "./Cart";

export default function NavBar({
  darkMode,
  setDarkMode,
  cartItems,
  setCartItems,
  cartState,
  dispatch,
  addToCart,
  setAddToCart,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const showSidebar = () => setSidebarToggle(!sidebarToggle);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;
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
        <img
          className={darkMode ? "navbar-img-light" : "navbar-img-dark"}
          src="/logo.png"
          alt="navbar logo"
        />
      </div>
      <div
        className={sidebarToggle ? "navbar-menu" : "navbar-menu nav-active"}
        id={"navbar-link-dark"}
      >
        <a
          className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
          href="#"
        >
          All Products
        </a>
        <a
          className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
          href="#"
        >
          Clothes
        </a>
        <a
          className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
          href="#"
        >
          Accesories
        </a>

        <a
          className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
          href="#"
        >
          About
        </a>
        <a
          className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
          href="#"
        >
          Contact
        </a>
      </div>
      <div className="navbar-empty-div"></div>
      <Button style={{ marginRight: 10 }} onClick={toggleDarkMode}>
        {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
      <IconButton
        className="navbar-cart"
        aria-describedby={id}
        onClick={handleClick}
      >
        <Badge badgeContent={cartState?.quantity} color="secondary">
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
                cartState={cartState}
                dispatch={dispatch}
              />
            </div>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
