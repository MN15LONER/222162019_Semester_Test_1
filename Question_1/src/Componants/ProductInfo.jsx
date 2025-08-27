import React from "react";

export default function ProductInfo({ product, onBackClick }) {
  return (
    <div>
      <button onClick={onBackClick}>
        Back to Products
      </button>
      
      <div>
        <img src={product.image} alt={product.title}/>
        <div>
          <h1>{product.title}</h1>
          <p>Price: R{product.price}</p>
          <p>Description:</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}