import React, { useState } from 'react';
import { calcContext } from './calcContext';

const StateContext = ({ children }) => {
  const [result, setResult] = useState(false);
  const [showResult, setShowResult] = useState(false);

  return (
    <calcContext.Provider
      value={{ result, setResult, showResult, setShowResult }}
    >
      {children}
    </calcContext.Provider>
  );
};

export default StateContext;
