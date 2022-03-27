import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart, resetCart }) => {
  const [newCart, setNewCart] = useState(cart);

  useEffect(() => {
    setNewCart(cart);
  }, [cart]);

  const selectRandomItem = () => {
    // This function will also reset the cart item with the selected item.
    if (newCart.length > 1) {
      const randomItem = newCart[Math.floor(Math.random() * newCart.length)];
      setNewCart([randomItem]);
      resetCart([randomItem]);
    } else {
      alert("Please, select atleast 2 items.");
    }
  };

  const removeCartItem = (data) => {
    const removedCart = newCart.filter((item) => item.id !== data.id);
    setNewCart(removedCart);
    resetCart(removedCart);
  };

  return (
    <aside className="cart">
      <h3>Selected Drones</h3>
      {
        /* This will be the generate dynamically */
        newCart.map((item) => (
          <CartItem
            removeCartItem={removeCartItem}
            data={item}
            key={item.id}
          ></CartItem>
        ))
      }

      <button className="btn btn-choose" onClick={selectRandomItem}>
        <p>CHOOSE 1 FOR ME</p>
      </button>
      <button className="btn btn-reset" onClick={() => resetCart([])}>
        <p>CHOOSE AGAIN</p>
      </button>
    </aside>
  );
};

const CartItem = ({ data, removeCartItem }) => {
  return (
    <div className="selected-items">
      <img src={data.img} alt="" />
      <p>{data.name}</p>
      <button className="btn btn-delete" onClick={() => removeCartItem(data)}>
        <FontAwesomeIcon className="icon" icon={faTrashCan}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Cart;
