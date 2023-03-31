import PropTypes from 'prop-types';
import { HeaderTag, CoverDiv } from "./Header.styled";
import { PageContainer } from "components/pageContainer/pageContainer";
import { Logo } from "./Logo/Logo";
import { SearchForm } from "./SearchForm/SearchForm";
import { ThemeSwitcher } from "./ThemeSwitcher/ThemeSwitcher";

export function Header({themeSwitcher}) {

    const handleSearchSubmit = (inputValue) => {
        console.log(`You are looking for ${inputValue}`);
    };

    return (
        <HeaderTag>
            <PageContainer>
                <CoverDiv>
                    <Logo />
                    <SearchForm handleSearchSubmit={handleSearchSubmit}/>
                    <ThemeSwitcher themeSwitcher={themeSwitcher}/>
                    <p>Фільтр</p>
                </CoverDiv>
            </PageContainer>
        </HeaderTag>
    );
};

Header.propTypes = {
    themeSwitcher: PropTypes.func,
};