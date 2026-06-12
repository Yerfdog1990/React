// Home page - Main landing page with Hero banner, products, and sidebar
// Uses state to manage cart items
// Demonstrates component composition: Hero + SideBar + Body

import { useState } from 'react';
import Hero from '../components/Hero';
import Body from '../components/Body';
import SideBar from '../components/SideBar';

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Added ${product.name} to cart. Total items: ${cart.length + 1}`);
  };

  return (
    <main className="page home-page">
      <Hero
        title="Welcome to EuroShop"
        subtitle="Discover premium tech products and gadgets"
        buttonText="Browse Products"
      />

      <div className="home-content">
        <SideBar onFilterChange={(category) => console.log(`Filter by: ${category}`)} />
        <Body onAddToCart={handleAddToCart} />
      </div>

      <div className="cart-info">
        <p>Cart Items: <strong>{cart.length}</strong></p>
      </div>
    </main>
  );
}

