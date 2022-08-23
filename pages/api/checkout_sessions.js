import { useCartItemsContext } from "../../context/CartItemsContext";

const stripe = require("stripe")(process.env.SECRET_KEY);

const products = {
  snapback: "price_1LQqNFDr2MMCxXxytjozyt9c",
  mug: "price_1LQqMbDr2MMCxXxy7iOl1bk4",
  toteBag: "price_1LQqM3Dr2MMCxXxynRXBHe2q",
  backpack: "price_1LQqLMDr2MMCxXxy6ogpTVM8",
  hoodie: "price_1LQqKmDr2MMCxXxy3JHb8JQ5",
  tee: "price_1LQqJGDr2MMCxXxyVcPRNQFQ",
  longTee: "price_1LQqKDDr2MMCxXxy1FN56fJN",
};

export default async function handler(req, res) {
  // const { cartState, dispatch } = useCartItemsContext();

  // console.log(cartState.name);
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: products.hoodie,
            quantity: 1,
          },
        ],
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/products/?success=true`,
        cancel_url: `${req.headers.origin}/products/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
