import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PizzaForm from './pages/PizzaForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<PizzaForm />} />
      </Routes>
    </Router>
  );
}

export default App;

