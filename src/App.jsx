import React from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;