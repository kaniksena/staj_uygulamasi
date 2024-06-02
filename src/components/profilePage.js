// ProfilePage.js

import React, { useState } from 'react';
import './profilePage.css';
import TopMenu from './TopMenu';
import Circle from './circles.js';

function ProfilePage() {
  const [ad, setAd] = useState('John');
  const [soyad, setSoyad] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [telefon, setTelefon] = useState('1234567890');
  const [adres, setAdres] = useState('123 Main Street, Anytown');
  const [egitim, setEgitim] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [deneyim, setDeneyim] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [beceriler, setBeceriler] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  const [hobiler, setHobiler] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');


  const handleSaveProfile = () => {
    // Profil bilgilerini kaydetme işlemi
    console.log('Profil bilgileri kaydedildi:', {
      ad,
      soyad,
      email,
      telefon,
      adres,
      egitim,
      deneyim,
      beceriler,
      hobiler,
    });
    // Burada profil bilgilerini bir API'ye gönderebilirsiniz
  };

  return (
    <div className="anasayfa-container">
      <TopMenu />
      <Circle />
      <div className="content-container">
        <div className="profile-container">
          <h2>Profil Bilgileri</h2>
          <div className="profile-info">
            <div className="info-container">
              <label>Ad:</label>
              <span>{ad}</span>
            </div>
            <div className="info-container">
              <label>Soyad:</label>
              <span>{soyad}</span>
            </div>
            <div className="info-container">
              <label>Email:</label>
              <span>{email}</span>
            </div>
            <div className="info-container">
              <label>Telefon:</label>
              <span>{telefon}</span>
            </div>
            <div className="info-container">
              <label>Adres:</label>
              <span>{adres}</span>
            </div>
            <div className="info-container">
              <label>Eğitim:</label>
              <span>{egitim}</span>
            </div>
            <div className="info-container">
              <label>Deneyim:</label>
              <span>{deneyim}</span>
            </div>
            <div className="info-container">
              <label>Beceriler:</label>
              <span>{beceriler}</span>
            </div>
            <div className="info-container">
              <label>Hobiler:</label>
              <span>{hobiler}</span>
            </div>
          </div>
          <div className="bottom-button">
            <button onClick={handleSaveProfile}>Profili Kaydet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;