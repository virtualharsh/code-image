import { Navbar } from "@/components/navbar";
import Preview from "@/components/Preview";
import Styling from "@/components/Styling";
import { useFontFamily } from "@/hooks/useFontFamily";
import { useFontSize } from "@/hooks/useFontSize";
import { useLetterSpacing } from "@/hooks/useLetterSpacing";
import { useLineHeightChange } from "@/hooks/useLineHeightChange";

export default function IndexPage() {
    const { fontSize, handleChange } = useFontSize(12);
    const { fontFamily, handleFontFamilyChange } = useFontFamily();
    const { letterSpace, handleLetterSpacingChange } = useLetterSpacing(1);
    const { lineHeight, handleLineHeightChange } = useLineHeightChange(1);

    return (
        <>
            <Navbar />
            <main className="max-w-screen-xl mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row gap-6 h-full">
                    <div className="w-full h-full md:w-3/4">
                        <Preview fontSize={fontSize} fontFamily={fontFamily} letterSpace={letterSpace} lineHeight={lineHeight}/>
                    </div>
                    <div className="w-full md:w-1/4">
                        <Styling
                            onFontSizeChange={handleChange}
                            onFontFamilyChange={handleFontFamilyChange}
                            onLetterSpaceChange={handleLetterSpacingChange}
                            onLineHeightChange={handleLineHeightChange}
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
