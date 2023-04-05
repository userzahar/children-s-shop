import { createContext, useState, useContext } from "react";
import { dark, light } from "utils/theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [type, setType] = useState('light');
    const [theme, setTheme] = useState(light);

    const changeTheme = () => {
        if(type === 'light') {
            setType('dark');
            setTheme(dark);
        } else if(type === 'dark') {
            setType('light');
            setTheme(light);
        }
        
    }

    return <ThemeContext.Provider value ={{theme, changeTheme}}>
{children}
    </ThemeContext.Provider>
};

export const Theme = () => useContext(ThemeContext);