//Import React
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
//Import Components
import Home from "./screens/Home/Home.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Signin from "./screens/Signin/Signin.jsx";
import SignOut from "./screens/Signout/Signout.jsx";
import Order from "./screens/Order/Order.jsx";
import Cart from "./screens/Cart/Cart.jsx";
import Category from "./components/Category/Categories.jsx";
// Import CSS
import "./App.css";

export const productDataContext = React.createContext();

function App() {
  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        let prodData = data.map((product, index) => {
          return {
            title: product.title,
            description: product.description,
            price: product.price,
            brand: product.brand,
            category: product.category,
            images: product.images,
          };
        });
        setProductData(prodData);
        setFilteredProductData(prodData);
      });
  }, []);

  const handleSearch = (e) => {
    const {value} = e.target
    
    const results = productData.filter((prod) => {
      return prod.title.toLowerCase().includes(value.toLowerCase())
    })

    setFilteredProductData(results)
  }

  return (
    <div className="app">
      <productDataContext.Provider value={filteredProductData}>
        <Navbar handleSearch={handleSearch}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-out" element={<SignOut />} />
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