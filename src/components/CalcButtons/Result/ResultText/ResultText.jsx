import React, { useContext } from 'react';
import '../Result.css';
import { calcContext } from '../../../../context/calcContext';

const ResultText = () => {
  const { result } = useContext(calcContext);

  return <h2 className="result_text">RESULT: {result}</h2>;
};

export default ResultText;
