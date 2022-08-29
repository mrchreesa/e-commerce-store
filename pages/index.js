import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export default function Home({ products }) {
  const [publishableKey, setPublishableKey] = useState("");
  const [darkMode, setDarkMode] = useState("light");

  return (
    <div>
      <Head>
        <title>E-Commerce Store</title>
        <meta
          name="description"
          content="E-Commerce store made with Next.js and Hygraph"
        />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* <NavBar setDarkMode={setDarkMode} darkMode={darkMode} /> */}
      <div className="main-container-landing">
        {" "}
        <Link href="/products">
          <Button className="btn-landing">Enter The Multiverse</Button>
        </Link>
      </div>
    </div>
  );
}
