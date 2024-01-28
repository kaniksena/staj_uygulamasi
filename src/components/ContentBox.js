import React from 'react';
import './contentBox.css'
function ContentBox({ title, content }) {
  return (
    <div className="content-box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default ContentBox;
