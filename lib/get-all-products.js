import { GraphQLClient, gql } from "graphql-request";

export const getAllProductsQuery = gql`
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

async function getAllProducts({ locale = "en" }) {
  const { products } = await hygraphClient.request(getAllProductsQuery, {
    locale,
  });

  return {
    products,
  };
}

export default getAllProducts;
