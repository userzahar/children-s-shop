import styled from '@emotion/styled';

export const FooterTag = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;

  //коли будуть теми зробити імпорт кольору
  background-color: rgb(3, 169, 161);
  //

  //медіазапити переписати під уніфіковані
  @media screen and (max-width: 768px) {
    position: static;
  }
  //
`;

export const AddressTag = styled.address`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;

  //коли будуть теми зробити імпорт кольору
  color: white;
  //

  //медіазапити переписати під уніфіковані
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  //
`;
