import React from 'react';
import './Div.css';
import { div } from '../../../functions/div';

const Div = () => {
  return (
    <button onClick={div} className="div calcBtn">
      /
    </button>
  );
};

export default Div;
