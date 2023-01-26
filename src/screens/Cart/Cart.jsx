import React from "react";
import "./cart.css";
import { useStateValue } from "../../components/StateProvider/StateProvider.js";

export default function Cart() {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = (productItem) => {
    //remove item from basket...
    console.log("remove from basket", productItem);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: productItem,
    });
  };
  console.log("basket", basket);
  const products = basket?.map((product) => {
    return (
      <div className="checkoutProduct">
        <img className="pc-image" src={product.images} alt="" />
        <div className="cp-info">
          <p className="cp-title">{product.title}</p>
          <p className="cp-description">{product.description}</p>
          <p className="cp-brand">{product.brand}</p>
          <p className="cp-brand">{product.quantity}</p>
          <p className="cp-price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <button onClick={(e) => removeFromBasket(product)} className="cp-btn">
            Remove from basket
          </button>
        </div>
      </div>
    );
  });
  console.log("products", products);
  return (
    <div>
      <img
        className="card-banner-img"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8b77bd111102863.5ffc0a48e1780.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2 className="cart-info-title">Your Shopping Cart is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="cart-info-title">Your Shopping Cart</h2>
        </div>
      )}

      <div className="cart-container">{products}</div>
    </div>
  );
}
