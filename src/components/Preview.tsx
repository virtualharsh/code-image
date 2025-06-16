import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import { themeMap } from '@/config/themeMap';
import jsPDF from 'jspdf';


interface PreviewProps {
    fontSize: number;
    fontFamily: string;
    letterSpace: number;
    lineHeight: number;
    theme: string;
    bg: string;
}

export default function Preview({
    fontSize,
    fontFamily,
    letterSpace,
    lineHeight,
    theme,
    bg,
}: PreviewProps) {
    const editorWrapperRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

    const editorBackground: Record<string, string> = {
        fontFamily: `${fontFamily}, monospace`,
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}`,
    };

    if (bg !== 'None') {
        editorBackground.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/${bg}")`;
        editorBackground.backgroundSize = '1100px 550px';
        editorBackground.backgroundRepeat = 'repeat-y';
        editorBackground.backgroundPosition = 'center top';
    }

    const handleSaveAsPng = async () => {
        const div = editorWrapperRef.current;
        if (!div) return;

        setLoading(true);

        // Save original styles
        const originalHeight = div.style.height;
        const originalOverflow = div.style.overflow;

        // Expand container to fit all content
        div.style.height = 'auto';
        div.style.width = 'max-content';
        div.style.overflow = 'visible';

        // Wait for layout to adjust
        await new Promise((res) => setTimeout(res, 300));

        // Capture PNG
        toPng(div, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'code-preview.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Error generating PNG:', err);
            })
            .finally(() => {
                // Restore fixed height
                div.style.height = originalHeight || '550px';
                div.style.width = '100%';
                div.style.overflow = originalOverflow || 'auto';
                setLoading(false);
            });
    };

    const handleSaveAsPdf = async () => {
        const div = editorWrapperRef.current;
        if (!div) return;

        setLoading(true);

        const originalHeight = div.style.height;
        const originalOverflow = div.style.overflow;

        div.style.height = 'auto';
        div.style.width = 'max-content';
        div.style.overflow = 'visible';

        await new Promise((res) => setTimeout(res, 300));

        try {
            const dataUrl = await toPng(div, { cacheBust: true });

            const img = new Image();
            img.src = dataUrl;

            img.onload = () => {
                const imgWidth = img.width;
                const imgHeight = img.height;

                // Create PDF of same size as image
                const pdf = new jsPDF({
                    orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
                    unit: 'px',
                    format: [imgWidth, imgHeight],
                });

                pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('code-preview.pdf');
            };
        } catch (err) {
            console.error('Error generating PDF:', err);
        } finally {
            div.style.height = originalHeight || '550px';
            div.style.width = '100%';
            div.style.overflow = originalOverflow || 'auto';
            setLoading(false);
        }
    };




    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-white text-lg font-semibold">Saving image...</p>
                    </div>
                </div>
            )}

            {/* Keep height fixed until user clicks save */}
            <div
                ref={editorWrapperRef}
                style={{ height: '550px', width: '', overflow: 'auto' }}
                className="w-full"
            >
                <CodeMirror
                    placeholder="Write your code here!"
                    height="100%" // Makes CodeMirror fill parent
                    theme={themeMap[theme]}
                    style={{ height: '100%' }} // Ensures it takes 100% of parent height
                    extensions={[
                        javascript(),
                        EditorView.theme({
                            '&': editorBackground,
                            '.cm-editor': { height: '100%' },
                            '.cm-scroller': {
                                fontFamily: `${fontFamily}, monospace`,
                                fontSize: `${fontSize}px`,
                                lineHeight: `${lineHeight}`,
                                height: '100%',
                            },
                            '.cm-content': {
                                letterSpacing: `${letterSpace}px`,
                            },
                        }),
                    ]}
                    basicSetup={true}
                />

            </div>

            <div className='flex gap-4'>
                <button
                    onClick={handleSaveAsPng}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Save as PNG
                </button>

                <button
                    onClick={handleSaveAsPdf}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Save as PDF
                </button>
            </div>

        </>
    );
}
