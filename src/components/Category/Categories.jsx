import React, { useState, useContext } from "react";
// import productsData from "../../products.json";
import { productDataContext } from "../../App.js";
import "../HamburgerMenu/hamburgerMenu.css";
import { Link } from "react-router-dom";
import "./categories.css";
import Product from "../Product/Product.jsx";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const data = useContext(productDataContext);

  const uniqueCategories = [
    ...new Set(data.map((product) => product.category)),
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setFilteredProducts(
      data.filter((product) => product.category === category)
    );
  };

  if (data.length === 0) return <h1>Loading ... </h1>
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
