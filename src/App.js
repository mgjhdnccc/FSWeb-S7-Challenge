import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PizzaForm from "./pages/PizzaForm";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<PizzaForm />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;


