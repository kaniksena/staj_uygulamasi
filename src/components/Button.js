import React from 'react';
import './Button.css'
function Button({ text ,action}) {
  return (
    <div className="button">
      <button width= "100%" type="submit" className="submit-button"  onClick={action}>
        {text} </button>
    </div>
  );
}

export default Button;