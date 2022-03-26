import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <aside className="cart">
      <h3>Selected Drones</h3>
      {
        /* This will be the generate dynamically */
        cartItems.map((item) => (
          <CartItem data={item}></CartItem>
        ))
      }

      <button className="btn btn-choose">
        <p>CHOOSE 1 FOR ME</p>
      </button>
      <button className="btn btn-reset">
        <p>CHOOSE AGAIN</p>
      </button>
    </aside>
  );
};

const CartItem = ({ data }) => {
  return (
    <div className="selected-items">
      <img src={data.img} alt="" />
      <p>{data.name}</p>
      <button className="btn btn-delete">
        <FontAwesomeIcon className="icon" icon={faTrashCan}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Cart;
