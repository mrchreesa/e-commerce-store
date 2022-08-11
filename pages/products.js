import { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import { GraphQLClient, gql } from "graphql-request";
import NavBar from "../components/NavBar";
import Head from "next/head";

const hygraph = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl5sfm1v8182o01t89dpv5v8i/master"
);
const QUERY = gql`
  {
    products {
      id
      name
      price
      slug
      variants {
        ... on ProductColorVariant {
          id
          name
        }
        ... on ProductSizeColorVariant {
          id
          name
        }
        ... on ProductSizeVariant {
          id
          name
        }
      }
      description
      images {
        url
      }
      categories {
        name
      }
    }
  }
`;

export async function getStaticProps() {
  const { products } = await hygraph.request(QUERY);
  return {
    props: {
      products,
    },
  };
}

export default function products({ products }) {
  const [darkMode, setDarkMode] = useState("light");
  // const theme = createTheme({
  //   palette: {
  //     mode: darkMode ? "light" : "dark",
  //   },
  // });
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "white" : "hsl(0, 0%, 8%)";
    document.body.style.transition = "all 1s";
  }, [darkMode]);
  return (
    <div className="products-container">
      <Head>
        <title>E-Commerce Store</title>
        <meta
          name="description"
          content="E-Commerce store made with Next.js and Hygraph"
        />
        <link rel="shortcut icon" href="/logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      <ProductList products={products} />
    </div>
  );
}
