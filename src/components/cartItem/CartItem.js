import React from "react";
import dummyCartImg from "../../assets/naruto.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import "./CartItem.scss";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ cart }) {
  const dispatch = useDispatch();

  return (
    <div className="CartItem">
      <div className="item-img">
        <img src={cart.image} alt="" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <div className="title">
            <p className="title">{cart.title}</p>
            <div className="price">₹{cart.price}</div>
            <div className="quantity-selector">
              <span
                className="btn decrement"
                onClick={() => dispatch(removeFromCart(cart))}
              >
                -
              </span>
              <span className="quantity">{cart.quantity}</span>
              <span
                className="btn increment"
                onClick={() => dispatch(addToCart(cart))}
              >
                +
              </span>
            </div>
            <p className="total-price">
              Subtotal : ₹ {cart.quantity * cart.price}
            </p>
          </div>
        </div>
        <div className="item-remove">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
