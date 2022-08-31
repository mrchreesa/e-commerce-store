import "../styles/globals.css";
import CartItemsProvider from "../context/CartItemsContext";
function MyApp({ Component, pageProps }) {
  return (
    <CartItemsProvider>
      <Component {...pageProps} />
    </CartItemsProvider>
  );
}

export default MyApp;
