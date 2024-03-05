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
            <h1 style={{marginLeft:550}}>Kendine Uygun Stajı Bul</h1>
            <div style={{marginLeft:400}} className='s-container'>
                <div>
                <form  style={{width:700}} className="arama-form" onSubmit={handleAramaSubmit}>
                    <input
                    type="text"
                    value={arananKelime}
                    onChange={(e) => setArananKelime(e.target.value)}
                    className="arama-input"
                    placeholder="Arama yapın..."
                    />
                </form>
                </div>
                <div>
                  <Button text="Arama Yap" action={handleAramaSubmit}></Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AramaSayfasi;
