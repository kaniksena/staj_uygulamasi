import React, { useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Login.css'; // CSS dosyasını import et
import './Register.js';
import Circle from './circles.js';
import './HomePage';
import Button from './Button';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav= useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
        
    try {
        // Kullanıcı bilgilerini sunucuya POST isteği ile gönder
        const response = await axios.post('/api/login', {
            username,
            password
        });

        console.log(response.data); // Sunucudan gelen cevabı konsola yazdır
        nav('/HomePage');
    } catch (error) {
        console.error('Giriş hatası:', error);
    }
  };
  const handleLoginClick = () => {
    nav('/HomePage'); // '/HomaPage' rotasına yönlendirme yapılır
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
          <Button text="Giriş Yap" action={   handleLoginClick}/>
          <h3> Hala aramıza katılmadın mı?</h3> 
          <h3>
          <Link to="/Register">Hemen Üye Ol!</Link>
          </h3>
        </form>
        <Circle />
      </div>
    </div>
  );
};


export default Login;
