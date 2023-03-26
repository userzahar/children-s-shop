import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const FooterTag = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;

  //коли будуть теми зробити імпорт кольору
  background-color: ${props => (props.theme.footer.backgroundColor)};
  ${props => console.log(props.theme)}
  //

  ${device.mobile} {
    position: static;
  }

`;

export const AddressTag = styled.address`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  
  //коли будуть теми зробити імпорт кольору
  color: white;
  //

  ${device.mobile} {
    flex-direction: column;
  }

`;
