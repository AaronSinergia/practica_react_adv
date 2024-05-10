import React from 'react';
import './Calculatorbody.css';
import Header from '../Header/Header';
import InputForNums from '../InputForNums/InputForNums';
import Sum from '../CalcButtons/Sum/Sum';
import Subs from '../CalcButtons/Subs/Subs';
import Mult from '../CalcButtons/Mult/Mult';
import Div from '../CalcButtons/Div/Div';
import Perc from '../CalcButtons/Perc/Perc';
import Result from '../CalcButtons/Result/Result';
import ResultList from '../ResultList/ResultList';

const Calculatorbody = () => {
  return (
    <div className="calculator_div">
      <Header />
      <InputForNums />
      <div className="operations_div">
        <Sum />
        <Subs />
        <Mult />
        <Div />
        <Perc />
      </div>
      <Result />
      <ResultList />
    </div>
  );
};

export default Calculatorbody;
