import PropTypes from 'prop-types';
import { Button } from "./ThemeSwitcher.styled";
import { BsSunFill } from 'react-icons/bs';
import { ChangeTheme } from 'providers/themeContextProvider';

export function ThemeSwitcher() {

    const onClick = ChangeTheme();

    return (
        <Button onClick={onClick}><BsSunFill color="white" size={30}/></Button>
    );
};

ThemeSwitcher.propTypes = {
    themeSwitcher: PropTypes.func,
};