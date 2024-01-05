import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'caba-product-card';

const product = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png',
};

function App() {
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <div style={{ display: 'inline-flex' }}>
        <ProductCard
          product={product}
          style={{ alignItems: 'center' }}
          initialValues={{ count: 4 }}
        >
          {({ reset }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons style={{ display: 'inline-flex' }} />
              <div>
                <button onClick={reset}> reset</button>
              </div>
            </>
          )}
        </ProductCard>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
