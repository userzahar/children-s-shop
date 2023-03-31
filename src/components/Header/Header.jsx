import { HeaderTag, CoverDiv } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { Logo } from "./Logo/Logo";
import { SearchForm } from "./SearchForm/SearchForm";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export function Header() {

    const handleSearchSubmit = (inputValue) => {
        console.log(`You are looking for ${inputValue}`);
    };

    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>
                    <Logo />
                    <SearchForm handleSearchSubmit={handleSearchSubmit}/>
                    <ThemeSwitcher />
                    <p>Фільтр</p>
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};