import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";

function ThemeSwitch(props) {
    const { bgcolor, altTheme } = useTheme(); // used as custom hook
    // const [theme, setTheme] = useState("light"); //  commentd  as wihtout custom hook

    // useEffect(() => {
    //     document.body.style.backgroundColor = theme === "dark" ? "#333" : "#eee";
    // }, [theme]);

    useEffect(() => {
        document.body.style.backgroundColor = bgcolor;
    }, [bgcolor]);

    return (
        <button onClick={() => props.changeTheme(altTheme)}>{altTheme}</button>
    );

    // if (theme === "light") {
    //     return (
    //         <button
    //             onClick={() => {
    //                 setTheme("dark");
    //                 props.changeTheme("dark");
    //             }}
    //         >
    //             Dark
    //         </button>
    //     );
    // } else {
    //     return (
    //         <button
    //             onClick={() => {
    //                 setTheme("light");
    //                 props.changeTheme("light");
    //             }}
    //         >
    //             Light
    //         </button>
    //     );
    // }
}

export default ThemeSwitch;