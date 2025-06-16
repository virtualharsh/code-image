import { Navbar } from "@/components/navbar";
import Preview from "@/components/Preview";
import Styling from "@/components/Styling";
import { useBackground } from "@/hooks/useBackground";
import { useCodeTheme } from "@/hooks/useCodeTheme";
import { useFontFamily } from "@/hooks/useFontFamily";
import { useFontSize } from "@/hooks/useFontSize";
import { useLetterSpacing } from "@/hooks/useLetterSpacing";
import { useLineHeightChange } from "@/hooks/useLineHeightChange";


export default function IndexPage() {
    const { fontSize, handleChange } = useFontSize(12);
    const { fontFamily, handleFontFamilyChange } = useFontFamily();
    const { letterSpace, handleLetterSpacingChange } = useLetterSpacing(1);
    const { lineHeight, handleLineHeightChange } = useLineHeightChange(1);
    const {theme, handleThemeChange} = useCodeTheme();
    const {bg , handlebgchange} = useBackground();

    return (
        <>
            <Navbar />
            <main className="max-w-screen-xl mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row gap-6 h-full">
                    <div className="w-full h-full md:w-3/4">
                        <Preview fontSize={fontSize} fontFamily={fontFamily} letterSpace={letterSpace} lineHeight={lineHeight} theme={theme} bg={bg}/>
                    </div>
                    <div className="w-full md:w-1/4">
                        <Styling
                            onFontSizeChange={handleChange}
                            onFontFamilyChange={handleFontFamilyChange}
                            onLetterSpaceChange={handleLetterSpacingChange}
                            onLineHeightChange={handleLineHeightChange}
                            onThemeChange={handleThemeChange}
                            onBGChange={handlebgchange}
                        />
                    </div>
                </div>
                <footer className="w-full flex items-center justify-start py-3">
                    <div
                        className="flex mt-4  items-center gap-2 text-current"
                    >
                        <span className="text-default-600">Made with 🩵 by</span>
                        <a href="https://github.com/virtualharsh" target="_blank" className="text-blue-300">Harsh</a> &
                        <a href="https://github.com/jayjoshi2512" target="_blank" className="text-blue-300">Jay</a>
                    </div>
                </footer>
            </main>
        </>
    );
}
