import React, { useContext } from 'react';
import { sum } from '../../../functions/sum';
import './Sum.css';
import { calcContext } from '../../../context/calcContext';

const Sum = () => {
  const { result, setResult } = useContext(calcContext);

  const returnedSum = () => {
    setResult(sum());
  };

  console.log(result);
  return (
    <>
      <button onClick={returnedSum} className="sum">
        +
      </button>
    </>
  );
};

export default Sum;
