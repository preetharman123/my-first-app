import { useContext } from "react";
import { ThemeContext } from "../context";

function useTheme() {
    const theme = useContext(ThemeContext);
    const bgcolor = theme === 'light' ? '#eee' : '#333';
    const txtcolor = theme === 'light' ? '#333' : '#eee';
    const altTheme = theme === 'light' ? 'dark' : 'light';
    return { theme, altTheme, txtcolor, bgcolor }
}

export default useTheme;