//Imports
import React from "react";
import "./order.css";

//Export Order Function
export default function Order() {
  return (
  <div className="order-container">
    <div className="order-number">
      <h1>
      ORDER # 112-6421262-3570653
      </h1>
    </div>
    <div className="order-description">
      <div className="order-img-contianer">
        <h1>Delivered January 15</h1>
      </div>
      <div className="order-img">
        <img src="https://m.media-amazon.com/images/I/513Oc5KIHNL._SS142_.jpg" alt="" />
      </div>
      <div className="order-img-description">
        <p>
THE ORIGINAL BODY ROLLER - High Density Foam Roller Massager for Deep Tissue Massage of The Back and Leg Muscles - Self Myofascial Release of Painful Trigger Point Muscle Adhesions - 13" Black
      </p>
<span>

Return or replace items: Eligible through February 14, 2023
                    
</span>
      </div>
      <div className="order-btn">
        <button className="btn1">Return or replace items</button>
        <button className="btn1">Get help</button>
        <button classname="btn1">Write Review</button>
      </div>
    </div>
  </div>
  )
}
