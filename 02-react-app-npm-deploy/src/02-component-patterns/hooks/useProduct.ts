import { useState, useEffect, useRef } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);
  // const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    /* if (isControlled.current) {
      return onChange!({ count: value, product });
    } */

    let newValue = Math.max(counter + value, 0);

    /*  newValue = initialValues?.maxCount
      ? Math.min(newValue, initialValues.maxCount)
      : newValue;*/

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(initialValues?.count || value);
  }, [initialValues?.count || value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};
