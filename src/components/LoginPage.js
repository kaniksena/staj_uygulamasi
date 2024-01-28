import React, { useState } from 'react';
import './Login.css'; // CSS dosyasını import et

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
        <h2>Login</h2>
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
        </form>
      </div>
      
      
      <div className="circles-container">
      </div>
    </div>
  );
};

export default Login;
