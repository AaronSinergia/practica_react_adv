import React from 'react';
import './Perc.css';
import { perc } from '../../../functions/perc';

const Perc = () => {
  return (
    <button onClick={perc} className="perc calcBtn">
      %
    </button>
  );
};

export default Perc;
