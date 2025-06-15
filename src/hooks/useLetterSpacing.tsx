import { useState } from "react";

export function useLetterSpacing(defaultSize: number = 1.4) {
    const [letterSpace, setLetterSpacing] = useState(defaultSize);

    const handleLetterSpacingChange = ( value : string ) => {
        const size = parseFloat(value);
        if (!isNaN(size)) {
            setLetterSpacing(size);
        }
    };

    return { letterSpace, handleLetterSpacingChange };
}