import React from "react";

const Cart = () => {
  return (
    <div>
      <h3>Selected Drones</h3>
      <button className="btn-chose">
        <p>CHOOSE 1 FOR ME</p>
      </button>
      <button className="btn-reset">
        <p>CHOOSE AGAIN</p>
      </button>
    </div>
  );
};

export default Cart;
