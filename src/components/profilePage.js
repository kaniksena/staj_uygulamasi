import React, { useState } from 'react';
import Circle from './circles';
import './profilePage.css';
import TopMenu from './TopMenu';
function ProfilePage() {
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [adres, setAdres] = useState('');
  const [egitim, setEgitim] = useState('');
  const [deneyim, setDeneyim] = useState('');
  const [beceriler, setBeceriler] = useState('');
  const [hobiler, setHobiler] = useState('');

  return (
    <div className="anasayfa-container">
        <TopMenu/>
        <Circle/>  
      <div className="content-container">
        <div className="profile-info">
          <h2>Profil Bilgileri</h2>
          <div >
            <label>Ad:</label>
            <input
              type="text"
              value={ad}
              onChange={(e) => setAd(e.target.value)}
            />
          </div>
          <div>
            <label>Soyad:</label>
            <input
              type="text"
              value={soyad}
              onChange={(e) => setSoyad(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Telefon:</label>
            <input
              type="text"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
            />
          </div>
          <div>
            <label>Adres:</label>
            <input
              type="text"
              value={adres}
              onChange={(e) => setAdres(e.target.value)}
            />
          </div>
          <div>
            <label>Eğitim:</label>
            <textarea
              value={egitim}
              onChange={(e) => setEgitim(e.target.value)}
            />
          </div>
          <div>
            <label>Deneyim:</label>
            <textarea
              value={deneyim}
              onChange={(e) => setDeneyim(e.target.value)}
            />
          </div>
          <div>
            <label>Beceriler:</label>
            <textarea
              value={beceriler}
              onChange={(e) => setBeceriler(e.target.value)}
            />
          </div>
          <div>
            <label>Hobiler:</label>
            <textarea
              value={hobiler}
              onChange={(e) => setHobiler(e.target.value)}
            />
          </div>
        </div>
            <div className="bottom-button">
            <button>Profili Kaydet</button>
            </div>
      </div>
    </div>
  );
}

export default ProfilePage;
