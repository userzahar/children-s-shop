import styled from "@emotion/styled";
import { device } from "utils/mediaVariables";

export const PageContainerDiv = styled.div`
    margin: 0 auto;

    //переписати під актуальні медіаправила використовуючи змінні (або іншу вибрану стратегію), 
    //коли робитиметься адаптив під мобілку і планшет
    width: 1200px;
    padding-left: 15px;
    padding-right: 15px;

    @media ${device.tablet} {
        max-width: 768px;
    }

    @media ${device.mobile}{
        max-width: 480px;
    }

    @media ${device.smallerThanMobile}{
        width: 100%;
    }
    //
`;
