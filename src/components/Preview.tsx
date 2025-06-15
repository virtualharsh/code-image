import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { andromeda } from '@uiw/codemirror-themes-all';
import { EditorView } from '@codemirror/view';

interface PreviewProps {
    fontSize: number;
    fontFamily: string;
    letterSpace: number;
    lineHeight: number;
}

export default function Preview({ fontSize, fontFamily, letterSpace, lineHeight }: PreviewProps) {

    return (
        <div className="w-full h-[600px]">
            <CodeMirror
                value=""
                placeholder="Write your code here!"
                height="600px"
                theme={andromeda}

                extensions={[
                    javascript(),
                    EditorView.theme({
                        '&': {
                            fontFamily: `${fontFamily}, monospace`,
                            fontSize: `${fontSize}px`,
                            // letterSpacing: `${letterSpace}px`,  
                            lineHeight: `${lineHeight}`,
                        },
                        '.cm-scroller': {
                            fontFamily: `${fontFamily}, monospace`,
                            fontSize: `${fontSize}px`,
                            // letterSpacing: `${letterSpace}px`,  
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
