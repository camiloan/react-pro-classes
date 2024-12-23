import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/';

import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className='text-white bg-dark'
        initialValues={{ count: 4, maxCount: 10 }}
      >
        {({
          reset,
          count,
          increaseBy,
          isMaxCountReached,
          maxCount,
          ...rest
        }) => (
          <>
            <ProductImage
              className='custom-image'
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
            />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
            <button onClick={reset}> Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button className='disabled' onClick={() => increaseBy(2)}>
                +2
              </button>
            )}
            <br />
            <span>
              {count} - {maxCount}
            </span>
            <br />
            {JSON.stringify(rest, null, 3)}
          </>
        )}
      </ProductCard>
    </div>
  );
};
