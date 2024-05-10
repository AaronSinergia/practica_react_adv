import React from 'react';
import './Mult.css';
import { mult } from '../../../functions/mult';

const Mult = () => {
  return (
    <button onClick={mult} className="mult">
      x
    </button>
  );
};

export default Mult;
