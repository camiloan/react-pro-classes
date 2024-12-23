import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  img?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt={title}
      style={style}
    />
  );
};
