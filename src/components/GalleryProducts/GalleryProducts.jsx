import PropTypes from 'prop-types';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { GalleryStyle } from './GalleryProducts.styled';

export function GalleryProducts({ goodsItem }) {
  return (
    <GalleryStyle>
          {goodsItem.map((data) => (
          <ProductCard data={data} key={data.id} />
      ))}
    </GalleryStyle>
  );
}

GalleryProducts.propTypes = {
  goodsItem: PropTypes.array.isRequired,
};