// Imports
import React, { useState } from "react";
import productsData from "../../products.json";
import "../HamburgerMenu/hamburgerMenu.css";
import { IconContext } from "react-icons";
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
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="category-container">
          <div className="category-link">
            <Link to="/categories">
              {uniqueCategories.map((category) => (
                <li
                  className="hamburger-toggle"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </Link>
          </div>
          {selectedCategory && <ProductList products={filteredProducts} />}
        </div>
      </IconContext.Provider>
    </>
  );
};

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img src={product.images} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default Category;
