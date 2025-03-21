import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizeddark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function Code({children,lang}){
    return <SyntaxHighlighter   language={lang} style={solarizeddark}>
        {String(children)}
    </SyntaxHighlighter>
}