import React, { Fragment } from "react";
import "./Cart.css";
import {CartItemCard} from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@mui/material";
import {RemoveShoppingCart} from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Cart = ({}) => {
    const {history}=useParams();
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
  
    const increaseQuantity = (id, quantity, stock) => {
      const newQty = quantity + 1;
      if (stock <= quantity) {
        return;
      }
      dispatch(addItemsToCart(id, newQty));
    };
  
    const decreaseQuantity = (id, quantity) => {
      const newQty = quantity - 1;
      if (1 >= quantity) {
        return;
      }
      dispatch(addItemsToCart(id, newQty));
    };
  
    const deleteCartItems = (id) => {
      dispatch(removeItemsFromCart(id));
    };
  
    const checkoutHandler = () => {
      navigate("/login?redirect=shipping");
    };

  return (
    
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCart />

          <Typography>No Product in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  {/* <CartItemCard item={item} deleteCartItems={deleteCartItems} /> */}
                 
                  <div className="CartItemCard">
                     <img src={item.image} alt="ssa" />
                        <div>
                             <Link to={`/product/${item.product}`}>{item.name}</Link>
                             <span>{`Price: ₹${item.price}`}</span>
                              <p onClick={() => deleteCartItems(item.product)}>Remove</p>
                        </div>
                  </div>


                  <div className="cartInput">
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type="number" value={item.quantity} readOnly />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
 
 
 
    )
}
