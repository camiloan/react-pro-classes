import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (counter < 10) return;
    console.log(
      '%cuseEffect Se llego al valor maximo',
      'color:red; background-color:black'
    );
    const tl = gsap.timeline();

    tl.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' });
    tl.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
  }, [counter]);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };
  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
