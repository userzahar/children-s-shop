import PropTypes from 'prop-types';
import { Button } from "./ThemeSwitcher.styled";
import { BsSunFill } from 'react-icons/bs';

export function ThemeSwitcher({themeSwitcher}) {

    return (
        <Button onClick={themeSwitcher}><BsSunFill color="white" size={35}/></Button>
    );
};

ThemeSwitcher.propTypes = {
    themeSwitcher: PropTypes.func,
};