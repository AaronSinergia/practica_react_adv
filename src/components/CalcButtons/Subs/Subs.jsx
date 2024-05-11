import React from 'react';
import { subs } from '../../../functions/subs';
import './Subs.css';

const Subs = () => {
  return (
    <button onClick={subs} className="subs calcBtn">
      -
    </button>
  );
};

export default Subs;
