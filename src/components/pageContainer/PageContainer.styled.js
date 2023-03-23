import styled from "@emotion/styled";

export const PageContainerDiv = styled.div`
    margin: 0 auto;

    //переписати під актуальні медіаправила використовуючи змінні (або іншу вибрану стратегію), 
    //коли робитиметься адаптив під мобілку і планшет
    width: 1200px;
    padding-left: 15px;
    padding-right: 15px;

    @media screen and (max-width: 1200px){
        max-width: 768px;
    }

    @media screen and (max-width: 768px){
        max-width: 480px;
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
    //
`;
