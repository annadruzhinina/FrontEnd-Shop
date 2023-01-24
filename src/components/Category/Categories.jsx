import React, { useState, useContext } from "react";
import { productDataContext } from "../../App.js";
import "../HamburgerMenu/hamburgerMenu.css";
import { Link } from "react-router-dom";
import "./categories.css";
import Product from "../Product/Product.jsx";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const data = useContext(productDataContext);
  // if (data.length === 0) return <h1>Loading ... </h1>
  console.log(data);

  const uniqueCategories = [
    ...new Set(data.map((product) => product.category))
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setFilteredProducts(
      data.filter((product) => product.category === category)
    );
  };
  // if (filteredProducts.length === 0) return <h1>Loading 2 ... </h1>
  return (
    <>
      <div className="category-container">
        <div className="category-nav ">
          <div className="container">
            <div className="category-nav-menu">
              {uniqueCategories.map((category, index) => (
                <button key={index}
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
