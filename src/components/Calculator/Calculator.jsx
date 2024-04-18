import React from 'react';
import './Calculator.css';
// import sum from './caculationSymbols/sum';
// import subs from './caculationSymbols/subs';
// import mult from './caculationSymbols/mult';
// import div from './caculationSymbols/div';
// import perc from './caculationSymbols/perc';
import calculationSys from './caculationSymbols/calculationSys';
import calculate from './caculationSymbols/calculate';

const Calculator = () => {
  return (
    <div className="calculator_div">
      <h1 className="title">⚡ CALCULA-THOR ⚡</h1>
      <input type="number" />
      <div className="operations_div">
        <button onClick={calculationSys} className="sum">
          +
        </button>
        <button onClick={calculationSys} className="subs">
          -
        </button>
        <button onClick={calculationSys} className="mult">
          x
        </button>
        <button onClick={calculationSys} className="div">
          /
        </button>
        <button onClick={calculationSys} className="perc">
          %
        </button>
      </div>
      <button className="result" onClick={calculate}>
        =
      </button>
      <h2 className="result_text">RESULT:</h2>
      <h2 className="title_list_result">List of latest results</h2>
      <select className="select_list_result">List of latest results</select>
    </div>
  );
};

export default Calculator;
