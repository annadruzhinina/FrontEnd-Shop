import React from "react";
import "./cart.css";
import { useStateValue } from "../../components/StateProvider/StateProvider.js";

export default function Cart() {
  const [{ basket }, dispatch] = useStateValue();
  
  console.log("basket", basket);
  const products = basket?.map((product) => {
    return (
      <div className="checkoutProduct">
        <img className="pc-image" src={product.images} alt="" />
        <div className="cp-info">
          <p className="cp-title">{product.title}</p>
          <p className="cp-description">{product.description}</p>
          <p className="cp-brand">{product.brand}</p>
          <p className="cp-price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <button className="cp-btn">Remove from Card</button>
        </div>

        {/* <button onClick={RemoveFromBasket} className="btn-remove">
          Remove from basket
        </button> */}
      </div>
    );
  });
  console.log("products", products);
  return (
    <div>
      <img
        className="card-banner-img"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8b77bd111102863.5ffc0a48e1780.jpg"
        alt=""
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is empty</h2>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Cart</h2>
        </div>
      )}

      <div>{products}</div>
    </div>
  );
}

// const products = basket?.map((product) => {
//   return (
//     <div className="product" key={product._id}>
//       <div className="product-description">
//         <p className="product-title">{product.title}</p>
//         <p className="product-description-text">{product.description}</p>
//         <p>{product.brand}</p>
//         <p className="product-price">
//           <small>$</small>
//           <strong>{product.price}</strong>
//         </p>
//       </div>
//       <img src={product.images} alt="" />
//     </div>
//   );
// });
// return (
//   <div>
//     <h1>Checkout</h1>
//     <div>{products}</div>
//   </div>
// );
// }
