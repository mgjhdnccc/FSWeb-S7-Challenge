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

          {/* 1 */}
          <div className="restaurant-card">
            <div className="image-placeholder"></div>
            <h4>McDonald's</h4>
            <p>🍔 American • Fast Food • Burgers</p>
            <div className="tags">
              <span>20-30 Min</span>
              <span>$5.99 Delivery Fee</span>
            </div>
          </div>

          {/* 2 */}
          <div className="restaurant-card">
            <div className="image-placeholder"></div>
            <h4>sweetgreen</h4>
            <p>🥗 Healthy • Salads</p>
            <div className="tags">
              <span>30-45 Min</span>
              <span>$4.99 Delivery Fee</span>
            </div>
          </div>

          {/* 3 */}
          <div className="restaurant-card">
            <div className="image-placeholder"></div>
            <h4>Starbucks</h4>
            <p>☕ Cafe • Coffee & Tea • Breakfast</p>
            <div className="tags">
              <span>10-20 Min</span>
              <span>$3.99 Delivery Fee</span>
            </div>
          </div>

          {/* 4 */}
          <div className="restaurant-card">
            <div className="image-placeholder"></div>
            <h4>Pizza Palace</h4>
            <p>🍕 Italian • Pizza</p>
            <div className="tags">
              <span>25-35 Min</span>
              <span>$2.99 Delivery Fee</span>
            </div>
          </div>

          {/* 5 */}
          <div className="restaurant-card">
            <div className="image-placeholder"></div>
            <h4>Sushi Go</h4>
            <p>🍣 Japanese • Sushi</p>
            <div className="tags">
              <span>35-50 Min</span>
              <span>$6.49 Delivery Fee</span>
            </div>
          </div>

          {/* 6 */}
          <div className="restaurant-card">
            <div className="image-placeholder"></div>
            <h4>Vegan Delight</h4>
            <p>🌱 Vegan • Organic</p>
            <div className="tags">
              <span>20-25 Min</span>
              <span>$4.49 Delivery Fee</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
