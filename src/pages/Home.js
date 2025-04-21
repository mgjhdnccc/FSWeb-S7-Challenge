import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <header className="navbar">
        <h2 className="brand">LAMBDA EATS</h2>
        <h1 className="title">Site Title</h1>
        <nav className="nav-buttons">
          <button className="btn dark">Home</button>
          <button className="btn light">Help</button>
        </nav>
      </header>

      <section className="hero">
        <h2>Your favorite food, delivered while coding</h2>
        <Link to="/pizza">
          <button id="order-pizza" className="btn outline">Pizza?</button>
        </Link>
      </section>

      <section className="restaurant-section">
        <h3>Food Delivery in Gotham City</h3>
        <div className="restaurant-grid">
          {/* Kart örneği */}
          <div className="restaurant-card">
            <div className="image-placeholder"></div>
            <h4>McDonald's</h4>
            <p>🍔 American • Fast Food • Burgers</p>
            <div className="tags">
              <span>20-30 Min</span>
              <span>$5.99 Delivery Fee</span>
            </div>
          </div>
          {/* Diğer 2 kartı kopyalayabiliriz */}
        </div>
      </section>
    </div>
  );
}
