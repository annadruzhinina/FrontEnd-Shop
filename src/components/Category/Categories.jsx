// Import React
import React, { useState, useContext } from "react";
// Import Contexts
import { productDataContext } from "../../App.js";
// Import Components 
import Product from "../Product/Product.jsx";
// Import CSS
import "./categories.css";
import "../HamburgerMenu/hamburgerMenu.css";

// Category Component
const Category = () => {
  // Assign context
  const data = useContext(productDataContext);
  
  // Set useStates
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(data);

  // Map unique categories
  const uniqueCategories = [
    ...new Set(data.map((product) => product.category)),
  ];

  // Handle onClick event
  const handleCategoryClick = (category) => {
    // Set category data
    setSelectedCategory(category);
    // Set filtered data
    setFilteredProducts(
      data.filter((product) => product.category === category)
    );
  };

  return (
    <div className="category-container">
      <div className="category-nav ">
        <div className="container">
          {/* Map category for nav-menu */}
          <div className="category-nav-menu">
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                className="category-link"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Filter Products */}
      <Product
        products={filteredProducts.length === 0 ? data : filteredProducts}
      />
    </div>
  );
};

export default Category;
