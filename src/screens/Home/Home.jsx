import React from "react";
import "./home.css";
import Product from "../../components/Product/Product.jsx";

export default function Home() {
  return (
    <div className="home-container">
      <img src="/image/bg-home_4.png" className="home-banner-img" alt="" />
      <div className="product-row">
        <Product
          productId="1"
          title="iphone 12"
          description="An apple mobile which is nothing like apple"
          price={549}
          rating={5}
          brand="Apple"
          category="Technology"
          images="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202842000"
        />
        <Product
          productId="1"
          title="iphone 12"
          description="An apple mobile which is nothing like apple"
          price={549}
          rating={5}
          brand="Apple"
          category="Technology"
          images="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202842000"
        />
      </div>
      <div className="product-row">
        <Product
          productId="1"
          title="iphone 12"
          description="An apple mobile which is nothing like apple"
          price={549}
          rating={5}
          brand="Apple"
          category="Technology"
          images="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202842000"
        />
        <Product
          productId="1"
          title="iphone 12"
          description="An apple mobile which is nothing like apple"
          price={549}
          rating={5}
          brand="Apple"
          category="Technology"
          images="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202842000"
        />
        <Product
          productId="1"
          title="iphone 12"
          description="An apple mobile which is nothing like apple"
          price={549}
          rating={5}
          brand="Apple"
          category="Technology"
          images="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202842000"
        />
      </div>
      <div className="product-row">
        <Product
          productId="1"
          title="iphone 12"
          description="An apple mobile which is nothing like apple"
          price={549}
          rating={5}
          brand="Apple"
          category="Technology"
          images="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-pro-graphite-2020?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202842000"
        />
      </div>
    </div>
  );
}
