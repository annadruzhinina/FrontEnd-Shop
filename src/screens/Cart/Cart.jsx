import React from "react";
import "./cart.css";

import { useStateValue } from "../../components/StateProvider/StateProvider.js";

export default function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);
  const products = basket?.map((product) => {
    return (
      <div className="product" key={product._id}>
        {product.title}
      </div>
    );
  });
  return (
    <div>
      <div>Checkout</div>
      <div>${products}</div>
    </div>
  );
}
