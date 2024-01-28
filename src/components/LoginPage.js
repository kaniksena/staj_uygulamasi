import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // CSS dosyasını import et
import './Register.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Kullanıcı adı:', username);
    console.log('Şifre:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Hoş Geldin!</h2>
        <h3>Inanılmaz bir deneyim yaşamak için lütfen giriş yap.</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Kullanıcı Adı"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Şifre"
            />
          </div>
          <button type="submit" className="submit-button">Giriş Yap</button>
          <h3> Hala aramıza katılmadın mı?</h3> 
          <h3>
          <Link to="/Register">Hemen Üye Ol!</Link>
          </h3>
        </form>
      </div>
      
      
      
    </div>
  );
};

export default Login;
