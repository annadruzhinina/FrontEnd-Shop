// Imports
import "./App.css";
import React, { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Signin from "./screens/Signin/Signin.jsx";
import Order from "./screens/Order/Order.jsx";
import Cart from "./screens/Cart/Cart.jsx";
import Category from "./components/Category/Categories.jsx";

export const productDataContext = React.createContext();

function App() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/products")
    .then(res => res.json())
    .then(data => {
      let prodData = data.map((product, index) => {
        return {
          "title": product.title,
          "description": product.description,
          "price": product.price,
          "brand": product.brand,
          "category": product.category,
          "images": product.images
        }
      });
      setProductData(prodData);
    })
  }, [])

  console.log(productData);

  return (
    <div className="app">
      <productDataContext.Provider value={productData}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/technology/:id" element={<Category />} />
      </Routes>
      </productDataContext.Provider>
    </div>
  );
}

export default App;
