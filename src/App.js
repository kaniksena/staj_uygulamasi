import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.js';
import Register from './components/Register.js'
function App() {
  return(
  <Router>
  <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
  </Routes>
</Router>
  );
}

export default App;
