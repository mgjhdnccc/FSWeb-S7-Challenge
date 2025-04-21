import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <Link to="/pizza">
        <button id="order-pizza">Pizza Sipariş Et</button>
      </Link>
    </div>
  );
}
