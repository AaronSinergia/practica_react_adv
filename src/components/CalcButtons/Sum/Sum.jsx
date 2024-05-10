import React from 'react';
import { sum } from '../../../functions/sum';
import './Sum.css';

const Sum = () => {
  return (
    <button onClick={sum} className="sum">
      +
    </button>
  );
};

export default Sum;
