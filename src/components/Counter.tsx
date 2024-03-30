import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(prev => prev + 1);
  };
  const decriment = () => {
    setCount(prev => prev - 1);
  };
  const multiply10 = () => {
    setCount(prev => prev * 10);
  };
  const devision2 = () => {
    setCount(prev => prev / 2);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Добавить 1</button>
      <button onClick={decriment}>Отнять 1</button>
      <button onClick={multiply10}>Умноожить на 10</button>
      <button onClick={devision2}>Делить на 2</button>
    </div>
  );
};

export default Counter;
