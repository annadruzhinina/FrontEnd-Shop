import React from "react";
import "./product.css";
import { useStateValue } from "../StateProvider/StateProvider.js";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = (productItem) => {
    console.log("addToBasket", productItem);
    // Add item to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: productItem,
    });
  };
  const products = props.products?.map((product) => {
    return (
      <div className="product" key={product._id}>
        <div className="product-description">
          <p className="product-title">{product.title}</p>
          <p className="product-description-text">{product.description}</p>
          <p>{product.brand}</p>
          {/* <p className="product-category-text">{product.category}</p> */}
          <p className="product-price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
        </div>
        <img src={product.images} alt="" />
        <button onClick={(e) => addToBasket(product)} className="btn-add">
          Add to basket
        </button>
      </div>
    );
  });
  return <div className="products-list-main">{products}</div>;
}

export default Product;
