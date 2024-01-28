import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js';
import Register from './pages/Register.js';
import HomePage from "./pages/HomePage.js";
function App() {
  return(
  <Router>
  <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/HomePage" element={<HomePage />} />

  </Routes>
</Router>
  );
}

export default App;
