import React, { useState } from "react";
import productsData from "../../products.json";
import "../HamburgerMenu/hamburgerMenu.css";
import { Link } from "react-router-dom";
import "./categories.css";
import Product from "../Product/Product.jsx";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const uniqueCategories = [
    ...new Set(productsData.map((product) => product.category)),
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setFilteredProducts(
      productsData.filter((product) => product.category === category)
    );
  };

  return (
    <>
      <div className="category-container">
        <div className="category-nav ">
          <div className="container">
            <div className="category-nav-menu">
              {uniqueCategories.map((category) => (
                <button
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

export default Category;
