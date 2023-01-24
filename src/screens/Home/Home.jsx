import React, { useContext} from "react";
import Product from "../Products/Products.jsx"
import { productDataContext } from "../../App.js";
import "./home.css";

export default function Home() {
  const productData = useContext(productDataContext);

  return (
    <div className="home-container">
      <img src="/image/bg-home_4.png" className="home-banner-img" alt="" />
      <div className="product-row">
        <Product products={productData}/>
      </div>
    </div>
  );
}