import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import { themeMap } from '@/config/themeMap';

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
    // Construct the editor background styles conditionally
    const editorBackground: Record<string, string> = {
        fontFamily: `${fontFamily}, monospace`,
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}`,
    };

    if (bg !== 'None') {
        editorBackground.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/${bg}")`;
        editorBackground.backgroundSize = 'cover';
        editorBackground.backgroundRepeat = 'repeat';
        editorBackground.backgroundPosition = 'center';
    }

    return (
        <div className="w-full h-[600px]">
            <CodeMirror
                value=""
                placeholder="Write your code here!"
                height="600px"
                theme={themeMap[theme]}
                extensions={[
                    javascript(),
                    EditorView.theme({
                        '&': editorBackground,
                        '.cm-scroller': {
                            fontFamily: `${fontFamily}, monospace`,
                            fontSize: `${fontSize}px`,
                            lineHeight: `${lineHeight}`,
                        },
                        '.cm-content': {
                            letterSpacing: `${letterSpace}px`,
                        },
                    }),
                ]}
                basicSetup={true}
            />
        </div>
    );
}
