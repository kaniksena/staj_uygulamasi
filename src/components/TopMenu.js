// TopMenu.js

import React from 'react';
import { Link } from 'react-router-dom';
import './topMenu.css';
import './LoginPage.js';
import './SearchPage';

function TopMenu() {
  return (
    <div className="top-menu">
      <div className="menu-item">Anasayfa</div>
      <div className="menu-item">Profilim</div>
      <div className="menu-item"> 
      <Link to="/Search">Arama</Link></div>
      <div className="menu-item" >
        <Link to="/">Çıkış Yap</Link>
        
        </div>
    </div>
  );
}

export default TopMenu;
