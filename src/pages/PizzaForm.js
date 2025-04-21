import React, { useState, useEffect } from 'react';
import './PizzaForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PizzaForm() {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    sauce: '',
    toppings: [],
    substitute: false,
    special: '',
    quantity: 1,
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

    if (type === 'checkbox' && name === 'toppings') {
      const newToppings = checked
        ? [...formData.toppings, value]
        : formData.toppings.filter((t) => t !== value);

      setFormData({ ...formData, toppings: newToppings });
    } else if (type === 'checkbox' && name === 'substitute') {
      setFormData({ ...formData, substitute: checked });
    } else if (type === 'radio') {
      setFormData({ ...formData, sauce: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      isim: formData.name,
      boyut: formData.size,
      sos: formData.sauce,
      malzemeler: formData.toppings,
      glütensiz: formData.substitute,
      özel: formData.special,
      adet: formData.quantity,
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

  const allToppings = [
    "Pepperoni", "Sausage", "Canadian Bacon", "Spicy Italian Sausage",
    "Grilled Chicken", "Onions", "Green Pepper", "Diced Tomatoes",
    "Black Olives", "Roasted Garlic", "Artichoke Hearts", "Three Cheese",
    "Pineapple", "Extra Cheese"
  ];

  return (
    <form id="pizza-form" onSubmit={handleSubmit} className="pizza-form">
      <h2>Build Your Own Pizza</h2>

      <div className="form-section">
        <label>
          İsim:
          <input id="name-input" type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        {errors && <p className="error">{errors}</p>}
      </div>

      <div className="form-section">
        <h3>Choice of Size</h3>
        <select id="size-dropdown" name="size" value={formData.size} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>

      <div className="form-section">
        <h3>Choice of Sauce</h3>
        {["Original Red", "Garlic Ranch", "BBQ Sauce", "Spinach Alfredo"].map((sauce) => (
          <label key={sauce}>
            <input
              type="radio"
              name="sauce"
              value={sauce}
              checked={formData.sauce === sauce}
              onChange={handleChange}
              required
            />
            {sauce}
          </label>
        ))}
      </div>

      <div className="form-section">
        <h3>Add Toppings (Choose up to 10)</h3>
        <div className="toppings-grid">
          {allToppings.map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                name="toppings"
                value={topping}
                checked={formData.toppings.includes(topping)}
                onChange={handleChange}
              />
              {topping}
            </label>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Choice of Substitute</h3>
        <label>
          <input
            type="checkbox"
            name="substitute"
            checked={formData.substitute}
            onChange={handleChange}
          />
          Gluten Free Crust (+ $1.00)
        </label>
      </div>

      <div className="form-section">
        <h3>Special Instructions</h3>
        <input
          type="text"
          id="special-text"
          name="special"
          value={formData.special}
          placeholder="Anything else you'd like to add?"
          onChange={handleChange}
        />
      </div>

      <div className="form-section order-bar">
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <button id="order-button" type="submit">
          Add to Order
        </button>
        <span className="price">$17.99</span>
      </div>
    </form>
  );
}
