// AramaSayfasi.js

import React, { useState } from 'react';
import Button from './Button';
import './searchPage.css';
import TopMenu from './TopMenu';

function AramaSayfasi() {
  const [arananKelime, setArananKelime] = useState('');

  const handleAramaSubmit = (e) => {
    e.preventDefault();
    console.log('Aranan kelime:', arananKelime);
  };

  return (
    <div>
        <TopMenu />
        <div className="arama-container">
            
        <h2>Arama Sayfası</h2>
        <form className="arama-form" onSubmit={handleAramaSubmit}>
            <input
            type="text"
            value={arananKelime}
            onChange={(e) => setArananKelime(e.target.value)}
            className="arama-input"
            placeholder="Arama yapın..."
            />
           <Button text="Ara"/>
        </form>
        {/* Arama sonuçlarını burada gösterebilirsiniz */}
        </div>
    </div>
  );
}

export default AramaSayfasi;
