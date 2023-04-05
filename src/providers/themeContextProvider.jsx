import { createContext, useState, useContext } from "react";
import { light } from "utils/theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [type, setType] = useState(light); 

    return <ThemeContext.Provider value ={{type, setType}}>
{children}
    </ThemeContext.Provider>
};

export const Theme = () => useContext(ThemeContext);