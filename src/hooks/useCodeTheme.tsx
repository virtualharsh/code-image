import { useState } from "react";

export function useCodeTheme() {
    const [theme, setCodeTheme] = useState("abcdef");

    const handleThemeChange = ( value : string ) => {
        const theme = value;
        if (theme!=null) {
            setCodeTheme(theme);
        }
    };

    return { theme, handleThemeChange };
}