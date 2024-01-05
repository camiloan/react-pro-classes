import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductTitle } from '.';
import { ProductImage } from '.';
import { ProductButtons } from '.';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
