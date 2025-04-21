import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PizzaForm() {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    special: '',
    toppings: {
      pepperoni: false,
      mushroom: false,
      cheese: false,
      tomato: false
    }
  });

  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.name.trim().length < 2) {
      setErrors('İsim en az 2 karakter olmalıdır');
    } else {
      setErrors('');
    }
  }, [formData.name]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        toppings: {
          ...formData.toppings,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      isim: formData.name,
      boyut: formData.size,
      malzeme1: formData.toppings.pepperoni,
      malzeme2: formData.toppings.mushroom,
      malzeme3: formData.toppings.cheese,
      malzeme4: formData.toppings.tomato,
      özel: formData.special
    };

    axios
      .post('https://reqres.in/api/orders', payload)
      .then((res) => {
        console.log('Sipariş başarıyla gönderildi:', res.data);
        navigate('/success', { state: payload });
      })
      .catch((err) => {
        console.error('Hata:', err);
      });
  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <h2>Pizza Siparişi</h2>

      <label>
        İsim:
        <input
          id="name-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      {errors && <p className="error">{errors}</p>}

      <label>
        Boyut Seçin:
        <select
          id="size-dropdown"
          name="size"
          value={formData.size}
          onChange={handleChange}
        >
          <option value="">--Seçin--</option>
          <option value="küçük">Küçük</option>
          <option value="orta">Orta</option>
          <option value="büyük">Büyük</option>
        </select>
      </label>

      <fieldset>
        <legend>Malzemeler:</legend>
        {['pepperoni', 'mushroom', 'cheese', 'tomato'].map((malzeme) => (
          <label key={malzeme}>
            <input
              type="checkbox"
              name={malzeme}
              checked={formData.toppings[malzeme]}
              onChange={handleChange}
            />
            {malzeme}
          </label>
        ))}
      </fieldset>

      <label>
        Özel Seçim:
        <input
          type="text"
          id="special-text"
          name="special"
          value={formData.special}
          onChange={handleChange}
        />
      </label>

      <button id="order-button" type="submit">
        Siparişlere Ekle
      </button>
    </form>
  );
}
