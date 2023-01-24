import React, { useState } from "react";
import productsData from "../../products.json";
import "../HamburgerMenu/hamburgerMenu.css";
import { Link } from "react-router-dom";
import "./categories.css";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const uniqueCategories = [
    ...new Set(productsData.map((product) => product.category)),
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
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
        {selectedCategory && <ProductList products={filteredProducts} />}
      </div>
    </>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="category-img-container">
      <div className="container">
        <div className="product-list">
          {products.map((product) => (
            <div className="product-description">
              {/* <h3>{product.title}</h3>
              <p>{product.description}</p> */}
              <img
                className="product-img"
                src={product.images}
                alt={product.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
