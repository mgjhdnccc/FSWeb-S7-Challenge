import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Success() {
  const { state } = useLocation();
  const data = state;

  return (
    <div>
      <h1>Tebrikler! Pizza’nız yolda 🚀🍕</h1>
      <h2>Sipariş Özeti:</h2>
      <p><strong>İsim:</strong> {data?.isim}</p>
      <p><strong>Boyut:</strong> {data?.boyut}</p>
      <p><strong>Özel Not:</strong> {data?.özel || "Yok"}</p>
      <p><strong>Malzemeler:</strong></p>
      <ul>
        {Object.entries(data || {})
          .filter(([key, value]) => key.startsWith('malzeme') && value)
          .map(([key]) => (
            <li key={key}>{key}</li>
          ))}
      </ul>
    </div>
  );
}