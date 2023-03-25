const { default: styled } = require('@emotion/styled');

export const ProductCardContainer = styled.li`
  display: flex;
  background-color: cadetblue;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  //  desctop version styled
  width: calc((100% - 12px) / 4);
  margin-bottom: 4px;
  &:not(:first-child) {
    margin-left: 4px;
  }
  //desctop version styled
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
  height: auto !important;
  z-index: 1;
  color: transparent;
`;
