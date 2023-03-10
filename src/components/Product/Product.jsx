// Import React
import React from "react";
// Import CSS
import "./product.css";
import { useStateValue } from "../StateProvider/StateProvider.js";

// Product Function
function Product(props) {
  // Set useState 
  const [{ basket }, dispatch] = useStateValue();

  // Add to Basket Function
  const addToBasket = (productItem) => {
    // Add item to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: productItem,
    });
  };

  // Map products data
  const products = props.products?.map((product, index) => {
    return (
      <div className="product" key={index}>
        <div className="product-description">
          <p className="product-title">{product.title}</p>
          <p className="product-description-text">{product.description}</p>
          <p>{product.brand}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
        </div>
        <img src={product.images} alt="" />
        <button onClick={(e) => addToBasket(product)} className="btn-add">
          Add to Cart
        </button>
      </div>
    );
  });
  return <div className="products-list-main">{products}</div>;
}
// Exports
export default Product;
