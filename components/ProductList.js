import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function ProductList({ products, propertyTypeToggle }) {
  console.log(products);
  if (propertyTypeToggle === "all") {
    return (
      <Grid container className="product-list-container">
        {products?.map((product) => (
          <>
            <Link key={product.id} href={`/products/${product.slug}`}>
              <Grid
                container
                item
                xs={6}
                md={3}
                className="product-item-container"
              >
                <img src={product.images[0].url} alt="" />
                <br />
                <h1>{product.name}</h1>
                <p>£{product.price}</p>
              </Grid>
            </Link>
          </>
        ))}
      </Grid>
    );
  } else if (propertyTypeToggle === "accesories") {
    return (
      <Grid container className="product-list-container">
        {products?.map((product) => {
          if (product.categories[0].name === "Accessories")
            return (
              <Link key={product.id} href={`/products/${product.slug}`}>
                <Grid
                  container
                  item
                  xs={6}
                  md={3}
                  className="product-item-container"
                >
                  <img src={product.images[0].url} alt="" />
                  <br />
                  <h1>{product.name}</h1>
                  <p>£{product.price}</p>
                </Grid>
              </Link>
            );
        })}
      </Grid>
    );
  } else if (propertyTypeToggle === "clothes") {
    return (
      <Grid container className="product-list-container">
        {products?.map((product) => {
          if (
            product.categories[0].name === "T-Shirts" ||
            product.categories[0].name === "Hoodies"
          )
            return (
              <Link key={product.id} href={`/products/${product.slug}`}>
                <Grid
                  container
                  item
                  xs={6}
                  md={3}
                  className="product-item-container"
                >
                  <img src={product.images[0].url} alt="" />
                  <br />
                  <h1>{product.name}</h1>
                  <p>£{product.price}</p>
                </Grid>
              </Link>
            );
        })}
      </Grid>
    );
  }
}
