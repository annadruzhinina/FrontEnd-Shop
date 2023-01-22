import React from "react";
import "./product.css";

function Product({
  productId,
  title,
  description,
  price,
  rating,
  brand,
  category,
  images,
}) {
  return (
    <div className="product">
      <div className="product-description">
        <p className="product-title">{title}</p>
        <p>{description}</p>
        <p>{brand}</p>
        <p>{category}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={images} alt="" />
      <button className="btn-add">Add to basket</button>
    </div>
  );
}

export default Product;
