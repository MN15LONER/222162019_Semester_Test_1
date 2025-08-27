import React from 'react';

export default function ProductCard({ product, onMoreClick }) {
  return (
    <div>
      <img src={product.image} alt={product.title}/>
      <h3>{product.title}</h3>
      <p>R{product.price}</p>
      <button onClick={() => onMoreClick(product)}>More</button>
    </div>
  );
}