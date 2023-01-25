import React from "react";
import "./product.css";
import productsData from "../../products.json";

function Product(props) {
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
        <button className="btn-add">Add to basket</button>
      </div>
    );
  });
  return <div className="products-list-main">{products}</div>;
}

export default Product;
