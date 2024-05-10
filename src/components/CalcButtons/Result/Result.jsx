import React from 'react';
import './Result.css';
import ResultText from './ResultText/ResultText';

const Result = ({ result }) => {
  return (
    <>
      <button className="result">=</button>
      <ResultText />
    </>
  );
};

export default Result;
