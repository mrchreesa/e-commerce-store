import { useCartItemsContext } from "../../context/CartItemsContext";
import { data, cartState } from "../../components/data";

export default async function handler(req, res) {
  const { slug } = req.query;

  res.status(200).json(slug);
  //   console.log(dat);
}
