import React from "react";
import "./product.css";

function Product(props) {
  const products = props.products?.map((product, index) => {
    return (
      
      <div className="product" key={index}>
        <div className="product-description">
          <p className="product-title">{product.title}</p>
          <p>{product.description}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
        </div>
        <img src={product.images} alt="" />
        <button className="btn-add">Add to basket</button>
      </div>
    );
  });
  return <div>{products}</div>;
}

export default Product;
