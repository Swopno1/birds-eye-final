import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  //   Fetch data from the fake DB
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <Item product={product} key={product.id}></Item>
      ))}
    </div>
  );
};

export default Product;
