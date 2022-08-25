import React, { useState, useContext } from "react";
import ProductItem from "../../components/ProductItem";
import { GraphQLClient, gql } from "graphql-request";
import Head from "next/head";
import Footer from "../../components/Footer";
import CartItemsContext from "../../context/CartItemsContext";

export default function Product(props) {
  const [darkMode, setDarkMode] = useState("light");

  // const router = useRouter();
  // const { slug } = router.query;
  return (
    <div>
      <Head>
        <title>E-Commerce Store</title>
        <meta
          name="description"
          content="E-Commerce store made with Next.js and HygraphCMS"
        />
        <link rel="shortcut icon" href="/logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <DispatchContext>
        <StateContext> */}
      <CartItemsContext>
        <ProductItem
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          products={props.product}
        />
      </CartItemsContext>

      {/* </StateContext>
      </DispatchContext> */}
      <Footer />
    </div>
  );
}

const hygraph = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl5sfm1v8182o01t89dpv5v8i/master"
);

const QUERY = gql`
  query Products($slug: String) {
    products(where: { slug: $slug }) {
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
const SLUGLIST = gql`
  {
    products {
      slug
    }
  }
`;

export const getStaticPaths = async () => {
  const { products } = await hygraph.request(SLUGLIST);

  //  const slugs = products.map((product) => product.slug);

  //   const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }));

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};
export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = await hygraph.request(QUERY, { slug });
  const product = data.products;
  return {
    props: {
      product,
    },
  };
}
