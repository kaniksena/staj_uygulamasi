import React from 'react';
import Button from './Button.js';
import './contentBox.css'
function ContentBox({ title, content }) {
  return (
    <div className="content-box">
      <h2>{title} </h2>
      <p>{content}</p>
      <Button text="Kolay Başvuru"/>
    </div>
  );
}

export default ContentBox;
