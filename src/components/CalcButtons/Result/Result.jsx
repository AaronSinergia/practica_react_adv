import React, { useContext } from 'react';
import './Result.css';
import ResultText from './ResultText/ResultText';
import { calcContext } from '../../../context/calcContext';

const Result = () => {
  const { showResult, setShowResult } = useContext(calcContext);

  const handleResult = () => {
    setShowResult(true);
  };

  return (
    <>
      <button onClick={handleResult} className="result">
        =
      </button>
      {showResult && <ResultText />}
    </>
  );
};

export default Result;
