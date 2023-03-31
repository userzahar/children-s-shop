import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const Button = styled.button`
  padding: 0;
  background-color: inherit;
  border: none;
  ${device.mobile} {
    position: static;
  }

`;