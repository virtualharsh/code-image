import { Navbar } from "@/components/navbar";
import Preview from "@/components/Preview";
import Styling from "@/components/Styling";
import { useFontSize } from "@/hooks/useFontSize";

export default function HomePage() {

    const { fontSize, handleChange } = useFontSize(12);
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Preview fontSize={fontSize}/>
                <Styling onFontSizeChange={handleChange}/>
            </div>
        </div>
    );
}
