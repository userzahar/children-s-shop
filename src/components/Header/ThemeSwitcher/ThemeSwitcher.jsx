import PropTypes from 'prop-types';
import { Button } from "./ThemeSwitcher.styled";
import { BsSunFill } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from 'providers/themeContextProvider';

export function ThemeSwitcher({themeSwitcher}) {

    const onClick = useContext(ThemeContext).changeTheme;

    return (
        <Button onClick={onClick}><BsSunFill color="white" size={35}/></Button>
    );
};

ThemeSwitcher.propTypes = {
    themeSwitcher: PropTypes.func,
};