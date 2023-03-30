import { HeaderTag, CoverDiv } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";

export function Header() {
    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>
                    <p>Мама та маля</p>
                    <p>Форма пошуку</p>
                    <p>Перемикач теми</p>
                    <p>Фільтр</p>
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};