import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import { themeMap } from '@/config/themeMap';
import { background } from '@/config/background';

interface PreviewProps {
    fontSize: number;
    fontFamily: string;
    letterSpace: number;
    lineHeight: number;
    theme: string;
    bg : string;
}


export default function Preview({ fontSize, fontFamily, letterSpace, lineHeight, theme, bg }: PreviewProps) {

    console.log(bg);
    

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
                        '&': {
                            fontFamily: `${fontFamily}, monospace`,
                            fontSize: `${fontSize}px`,
                            // letterSpacing: `${letterSpace}px`,  
                            lineHeight: `${lineHeight}`,
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/${bg}")`,
                            backgroundSize: '100% auto', 
                            backgroundRepeat: 'repeat', 
                            backgroundPosition: 'center' 
                            
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
