import { useState } from "react";

export function useFontSize(defaultSize: number = 12) {
    const [fontSize, setFontSize] = useState(defaultSize);

    const handleChange = ( value : string ) => {
        const size = parseInt(value, 10);
        if (!isNaN(size)) {
            setFontSize(size);
        }
    };

    return { fontSize, handleChange };
}