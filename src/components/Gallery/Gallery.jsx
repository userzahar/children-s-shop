import { ProductCard } from 'components/ProductCard/ProductCard';
import PropTypes from 'prop-types';
import { GalleryStyle } from './Gallery.styled';

export function Gallery({ goods }) {
  return (
    <GalleryStyle>
          {goods.map((data) => (
          <ProductCard data={data} key={data.id} />
      ))}
    </GalleryStyle>
  );
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};