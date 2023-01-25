// Imports
import React, { useState, useContext } from "react";
import { productDataContext } from "../../App.js";
import "../HamburgerMenu/hamburgerMenu.css";
import "./categories.css";
import Product from "../Product/Product.jsx";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Applying use context to productDataContext and setting it to data
  const data = useContext(productDataContext);

  // Mapping through each product category
  const uniqueCategories = [
    ...new Set(data.map((product) => product.category))
  ];

  // Showing products from each category when clicked  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setFilteredProducts(
      data.filter((product) => product.category === category)
    );
  };

  return (
    <>
      <div className="category-container">
        <div className="category-nav ">
          <div className="container">
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
        <Product products={filteredProducts} />
      </div>
    </>
  );          
};

// Export Category
export default Category;
