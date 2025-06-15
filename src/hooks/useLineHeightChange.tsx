import { useState } from "react";

export function useLineHeightChange(defaultSize: number = 1.6) {
    const [lineHeight, setLineHeight] = useState(defaultSize);

    const handleLineHeightChange = ( value : string ) => {
        const size = parseFloat(value);
        if (!isNaN(size)) {
            setLineHeight(size);
        }
    };

    return { lineHeight, handleLineHeightChange };
}