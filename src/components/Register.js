// Register.js

import React, { useState } from 'react';
import './Register.css';
import Circle from './circles.js';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    school: '',
    grade: '',
    averageGrade: '',
    tcIdentity: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Burada form verilerini göndermek için bir API çağrısı yapılabilir.
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          {/* <label htmlFor="fullName">Full Name</label> */}
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder='İsim Soyisim*'
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="school">School</label> */}
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
            placeholder='Okul*'
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="grade">Grade</label> */}
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            
          >
            <option value="">Select Grade</option>
            <option value="Prep">Hazırlık</option>
            <option value="1st">1. Sınıf</option>
            <option value="2nd">2. Sınıf</option>
            <option value="3rd">3. Sınıf</option>
            <option value="4th">4. Sınıf</option>
          </select>
        </div>
        <div className="form-group">
          {/* <label htmlFor="averageGrade">Average Grade</label> */}
          <input
            type="text"
            id="averageGrade"
            name="averageGrade"
            value={formData.averageGrade}
            onChange={handleChange}
            required
            placeholder='Güncel Not Ortalaması'
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="tcIdentity">TC Identity</label> */}
          <input
            type="text"
            id="tcIdentity"
            name="tcIdentity"
            value={formData.tcIdentity}
            onChange={handleChange}
            required
            placeholder='TC Kimlık No*'
          />
        </div>
        <h3>* Zorunlu alanları lütfen eksiksiz doldurunuz.</h3>
        <button type="submit" className="submit-button">Register</button>
        <h3>
          <Link to = "/">Giriş Yap</Link>
        </h3>
      </form>
      <Circle />
    </div>
  );
}

export default Register;
