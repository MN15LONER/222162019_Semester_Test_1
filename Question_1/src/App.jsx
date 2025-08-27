import React, { useState, useEffect } from 'react';
import ProductCard from './Componants/ProductCard';
import ProductInfo from './Componants/ProductInfo';

export default function App() {
  const [products, setProducts] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          alert("There was an error fetching your results");
          return;
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } 
      catch (error) {
        console.error(error);
        alert("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(userInput.toLowerCase())
  );

  const handleMoreClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackButton = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <ProductInfo product={selectedProduct} onBackClick={handleBackButton} />
    );
  }

  return (
    <div className="app-container">
      <h1>She In Ba Ba She In</h1>

      <input
        type="text"
        placeholder="Search the product that you want."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      {loading ? <p>Loading products...</p> : null}

      {!loading && filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onMoreClick={handleMoreClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}