const { default: styled } = require('@emotion/styled');

export const ProductCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 8px;
  background-color: cadetblue;
  height: 340px;
  margin: 4px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  //!desctop version styled 👇
  width: calc((100% - 192px) / 4);
  //!desctop version styled 👆
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const ImageThumb = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
`;
export const ButtonThumb = styled.div`
  position: absolute;
  top: 1px;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > button {
    height: 30px;
  }
  &:hover {
    opacity: 1;
  }
`;
