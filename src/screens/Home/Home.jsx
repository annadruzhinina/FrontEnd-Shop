import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img src="/image/bg-home_4.png" className="home-banner-img" alt="" />
      <div className="product-row">
        <Product products={productsData.slice(0,7)}/>
      </div>
    </div>
  );
}