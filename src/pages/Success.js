import React from 'react';
import './Success.css';
import { useLocation } from 'react-router-dom';

export default function Success() {
  const { state } = useLocation();
  const data = state || {};

  return (
    <div className="success-container">
      <header className="navbar">
        <h2 className="brand">Techno Eats</h2>
        <h1 className="title">Site Title</h1>
        <nav className="nav-buttons">
          <button className="btn dark">Home</button>
          <button className="btn light">Help</button>
        </nav>
      </header>

      <main className="success-content">
        <h2 className="headline">Congrats! Pizza is on its way!</h2>
        <p className="subline">Enjoy this Dog with Pizza</p>
        <img src="/Pizza.gif" alt="Dog eating pizza" className="pizza-gif" />
      </main>
    </div>
  );
}