import React from "react";
import "./CartItemCard.css";
import { Link, useParams } from "react-router-dom";

export const CartItemCard = () => {
    const { item,deleteCartItems }=useParams();
    
  return (
    <div className="CartItemCard">
    {/* <img src={item.image} alt="ssa" /> */}
    <div>
      {/* <Link to={`/product/${item.product}`}>{item.name}</Link> */}
      {/* <span>{`Price: ₹${item.price}`}</span> */}
      {/* <p onClick={() => deleteCartItems(item.product)}>Remove</p> */}
    </div>
  </div>
  )
}
