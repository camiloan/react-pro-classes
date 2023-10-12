import { useState } from 'react';

export const useProduct = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return { counter, increaseBy };
};
