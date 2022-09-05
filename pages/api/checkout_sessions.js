const stripe = require("stripe")(process.env.SECRET_KEY);

const products = {
  Snapback: "price_1LQqNFDr2MMCxXxytjozyt9c",
  Mug: "price_1LQqMbDr2MMCxXxy7iOl1bk4",
  "Tote Bag": "price_1LQqM3Dr2MMCxXxynRXBHe2q",
  Backpack: "price_1LQqLMDr2MMCxXxy6ogpTVM8",
  "Unisex Hoodie": "price_1LQqKmDr2MMCxXxy3JHb8JQ5",
  "Short Sleeve Tee": "price_1LQqJGDr2MMCxXxyVcPRNQFQ",
  "Unisex Long Sleeve Tee": "price_1LQqKDDr2MMCxXxy1FN56fJN",
};

export default async function handler(req, res) {
  //Final cart object to server: { Snapback: '2', Mug:'3' }
  function lineItemFactory(formCartData) {
    const cartItemNames = Object.keys(formCartData);
    // [Snapback, Mug]

    return cartItemNames.map((itemName) => ({
      price: products[itemName],
      quantity: formCartData[itemName],
    }));
  }
  if (req.method === "POST") {
    try {
      console.log(req.body);
      // console.log(window);

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: lineItemFactory(req.body),
        // [
        //   {
        //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //     price: products.hoodie,
        //     quantity: 1,
        //   },
        // ],
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
