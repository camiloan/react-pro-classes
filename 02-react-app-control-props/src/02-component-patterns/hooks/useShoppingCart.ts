import { ProductInCart, onChangeArgs } from '../interfaces/interfaces';
import { useState } from 'react';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        oldShoppingCart;
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return {
          ...rest,
        };
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };

      // Alternativa
     /*  const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return {
        ...rest,
      }; */
    });
  };
  return { shoppingCart, onProductCountChange };
};
