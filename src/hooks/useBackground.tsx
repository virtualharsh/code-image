import { useState } from "react";

export function useBackground() {
    const [bg, setbg] = useState("");

    const handlebgchange = ( value : string ) => {
        const bg = value;
        if (bg!="") {
            setbg(bg);
        }
    };

    return { bg, handlebgchange };
}