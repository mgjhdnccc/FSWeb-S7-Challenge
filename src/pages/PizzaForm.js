import React, { useState } from 'react';

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

  return (
    <form id="pizza-form">
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
        <label>
          <input
            type="checkbox"
            name="pepperoni"
            checked={formData.toppings.pepperoni}
            onChange={handleChange}
          />
          Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            name="mushroom"
            checked={formData.toppings.mushroom}
            onChange={handleChange}
          />
          Mantar
        </label>
        <label>
          <input
            type="checkbox"
            name="cheese"
            checked={formData.toppings.cheese}
            onChange={handleChange}
          />
          Ekstra Peynir
        </label>
        <label>
          <input
            type="checkbox"
            name="tomato"
            checked={formData.toppings.tomato}
            onChange={handleChange}
          />
          Domates
        </label>
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
