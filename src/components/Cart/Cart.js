import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const [newCart, setNewCart] = useState(cart);

  useEffect(() => {
    setNewCart(cart);
  }, [cart]);

  const selectRandomItem = () => {
    console.log(newCart);
  };

  const resetCart = () => {
    setNewCart([]);
  };

  return (
    <aside className="cart">
      <h3>Selected Drones</h3>
      {
        /* This will be the generate dynamically */
        newCart.map((item) => (
          <CartItem data={item} key={item.id}></CartItem>
        ))
      }

      <button className="btn btn-choose" onClick={selectRandomItem}>
        <p>CHOOSE 1 FOR ME</p>
      </button>
      <button className="btn btn-reset" onClick={resetCart}>
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
