//Import Modules
import React, { useContext } from "react";
//Import Components
import Product from "../../components/Product/Product.jsx";
//Import Context
import { productDataContext } from "../../App.js";
import Product from "../../components/Product/Product.jsx";
//Import CSS
import "./home.css";

//Export Home Function
export default function Home() {
  //Pull in data using Context
  const productData = useContext(productDataContext);
  //Return Div for Home Container
  return (
    <div className="home-container">
      <img src="/image/bg-home_4.png" className="home-banner-img" alt="" />
      <div>
        <Product products={productData} />
      </div>
    </div>
  );
}
