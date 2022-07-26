import { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import { GraphQLClient, gql } from "graphql-request";
import NavBar from "../components/NavBar";

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
    <div>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      <ProductList products={products} />
    </div>
  );
}
