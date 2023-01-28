// Import React
import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";

// Import Components
import Home from "./screens/Home/Home.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Signin from "./screens/Signin/Signin.jsx";
import SignOut from "./screens/Signout/Signout.jsx";
import Order from "./screens/Order/Order.jsx";
import Cart from "./screens/Cart/Cart.jsx";
import Category from "./components/Category/Categories.jsx";

// Import Deployed API from URL
import api from './services/apiConfig.js'

// Import CSS
import "./App.css";

// Export created context to pull product data in other components
export const productDataContext = React.createContext();

function App() {
  // Set Use States
  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([])

  // Pull information from API
  useEffect(() => {
    fetch(api.defaults.baseURL)
      .then((res) => res.json())
      .then((data) => {
        let prodData = data.map((product, index) => {
          // Specify items to be pulled from API
          return {
            title: product.title,
            description: product.description,
            price: product.price,
            brand: product.brand,
            category: product.category,
            images: product.images,
          };
        });
        // Set use states for product data
        setProductData(prodData);
        setFilteredProductData(prodData);
      });
  }, []);

  // Handle Search Event
  const handleSearch = (e) => {
    const {value} = e.target
    // Filter items by title based on search
    const results = productData.filter((prod) => {
      return prod.title.toLowerCase().includes(value.toLowerCase())
    })
    // Set data
    setFilteredProductData(results)
  }

  return (
    <div className="app">
      {/* Set Provider to pass product data */}
      <productDataContext.Provider value={filteredProductData}>
        <Navbar handleSearch={handleSearch}/>
        {/* Set Routes */}
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
// Exports
export default App;