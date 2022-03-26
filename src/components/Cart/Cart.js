import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <aside className="cart">
      <h3>Selected Drones</h3>
      {/* This will be the generate dynamically */}
      <div className="selected-items">
        <img src="https://i.ibb.co/t4qHTMS/drone-1.jpg" alt="" />
        <p>Product Name</p>
        <button className="btn btn-delete">
          <FontAwesomeIcon className="icon" icon={faTrashCan}></FontAwesomeIcon>
        </button>
      </div>
      <button className="btn btn-choose">
        <p>CHOOSE 1 FOR ME</p>
      </button>
      <button className="btn btn-reset">
        <p>CHOOSE AGAIN</p>
      </button>
    </aside>
  );
};

export default Cart;
