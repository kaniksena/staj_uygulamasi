// TopMenu.js

import React from 'react';
import { Link } from 'react-router-dom';
import './topMenu.css';
import '../pages/LoginPage.js'

function TopMenu() {
  return (
    <div className="top-menu">
      <div className="menu-item">Anasayfa</div>
      <div className="menu-item">Profilim</div>
      <div className="menu-item">Aramalar</div>
      <div className="menu-item" >
        <Link to="/">Çıkış Yap</Link>
        
        </div>
    </div>
  );
}

export default TopMenu;
