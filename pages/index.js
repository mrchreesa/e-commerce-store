import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Home({ products }) {
  console.log(products);

  return (
    <div>
      <Head>
        <title>E-Commerce Store</title>
        <meta
          name="description"
          content="E-Commerce store made with Next.js and Hygraph"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NavBar />
      <Link href="/products">
        <h1>Products</h1>
      </Link>
    </div>
  );
}
