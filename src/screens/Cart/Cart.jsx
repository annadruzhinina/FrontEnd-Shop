// Import react
import React from "react";
// Import State Provider
import { useStateValue } from "../../components/StateProvider/StateProvider.js";
// Import CSS
import "./cart.css";

// Export Cart Component
export default function Cart() {
  // Set useState Value
  const [{ basket }, dispatch] = useStateValue();
  // Function to remove items from basket
  const removeFromBasket = (productItem) => {
    //remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: productItem,
    });
  };
  // Map basket to products
  const products = basket?.map((product) => {
    return (
      <div className="checkoutProduct">
        <div className="left-side">
          <img className="pc-image" src={product.images} alt="" />
        </div>

        <div className="cp-info">
          <p className="cp-title">{product.title}</p>
          <p className="cp-description">{product.description}</p>
          <p className="cp-brand">{product.brand}</p>
          <p className="cp-price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <p className="cp-qty">
            <strong>Qty: </strong>
            {product.quantity}
          </p>
          {/* Remove items from Cart */}
          <button onClick={(e) => removeFromBasket(product)} className="cp-btn">
            Remove from Cart
          </button>
        </div>
      </div>
    );
  });
  // basket?. -> if basket null or Nan - it will not execute .reduce.
  const totalCost = basket?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <img
        className="card-banner-img"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8b77bd111102863.5ffc0a48e1780.jpg"
        alt=""
      />
      {/* ternary statement to show items in cart if not empty */}
      {basket?.length === 0 ? (
        <div>
          <h2 className="cart-info-title">Your Shopping Cart is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="cart-info-title">Your Shopping Cart</h2>
        </div>
      )}
      <h3 className="order-subtotal">Total cost: ${totalCost}</h3>
      <div className="cart-container">{products}</div>
    </div>
  );
}
