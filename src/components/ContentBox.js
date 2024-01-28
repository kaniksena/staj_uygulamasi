import React from 'react';
import './contentBox.css'
function ContentBox({ title, content }) {
  return (
    <div className="content-box">
      <h2>{title} </h2>
      <p>{content}</p>
      <button type="submit" className="submit-button"  >Kolay Başvuru</button>
    </div>
  );
}

export default ContentBox;
