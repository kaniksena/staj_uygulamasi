// AnaSayfa.js

import React from 'react';
import TopMenu from './TopMenu';
import ContentBox from './ContentBox';

function AnaSayfa() {
  return (
    <div className="anasayfa-container">
      <TopMenu />
      <div className="content-container">
        <ContentBox title="Başlık 1" content="Kısa bir dummy yazı" />
        <ContentBox title="Başlık 2" content="Kısa bir dummy yazı" />
        <ContentBox title="Başlık 3" content="Kısa bir dummy yazı" />
        <ContentBox title="Başlık 4" content="Kısa bir dummy yazı" />
      </div>
      <div className="bottom-button">
        <button>Başvur</button>
      </div>
    </div>
  );
}

export default AnaSayfa;
