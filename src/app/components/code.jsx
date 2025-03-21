import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Code({children,lang}){
    return <SyntaxHighlighter   language={lang} style={vscDarkPlus}>
        {String(children)}
    </SyntaxHighlighter>
}