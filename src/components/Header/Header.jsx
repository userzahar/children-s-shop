import { HeaderTag, CoverDiv } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { Logo } from "./Logo/Logo";

export function Header() {
    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>
                    <Logo />
                    <p>Форма пошуку</p>
                    <p>Перемикач теми</p>
                    <p>Фільтр</p>
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};