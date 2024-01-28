import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'
function Button({ text ,action}) {
  return (
    <div className="button">
      <button type="submit" className="submit-button"  onClick={action}>
        {text} </button>
    </div>
  );
}

export default Button;