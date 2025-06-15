import { useState } from "react";

export function useFontFamily() {
    const [fontFamily, setFontFamily] = useState("monospace");

    const handleFontFamilyChange = ( value : string ) => {
        const family = value;
        if (family!=null) {
            setFontFamily(family);
        }
    };

    return { fontFamily, handleFontFamilyChange };
}