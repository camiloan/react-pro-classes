import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      ;<h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product} className='text-white bg-dark'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title='Hola Mundo' className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='text-white bg-dark'>
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
          <ProductImage
            className='custom-image'
            style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle className='text-bold' style={{ fontWeight: 'bold' }} />
          <ProductButtons
            className='custom-buttons'
            style={{ display: 'flex', justifyContent: 'end' }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
