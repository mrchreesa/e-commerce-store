import React, { useState } from "react";
import ProductItem from "../../components/ProductItem";
import { GraphQLClient, gql } from "graphql-request";

export default function Product(props) {
  // const router = useRouter();
  // const { slug } = router.query;
  return (
    <div>
      <ProductItem products={props.product} />
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
