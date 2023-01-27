// Imports
import React, { useState, useContext } from "react";
import { productDataContext } from "../../App.js";
import "../HamburgerMenu/hamburgerMenu.css";
import "./categories.css";
import Product from "../Product/Product.jsx";

const Category = () => {
  const data = useContext(productDataContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(data);

  // console.log("Data", data);
  // console.log("Filtered", filteredProducts);

  // Mapping through each product category
  const uniqueCategories = [
    ...new Set(data.map((product) => product.category)),
  ];

  // Showing products from each category when clicked  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      data.filter((product) => product.category === category)
    );
  };
  return (
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
      <Product
        products={filteredProducts.length === 0 ? data : filteredProducts}
      />
    </div>
  );
};

// Export Category
export default Category;
