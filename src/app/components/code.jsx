import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight,duotoneEarth} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../hooks/useTheme';


export default function Code({children,lang}){
    const {theme} = useTheme();
	return <>
    {theme=="dark" ? <SyntaxHighlighter language={lang} style={duotoneEarth}>
		{String(children)}
	</SyntaxHighlighter>:<SyntaxHighlighter language={lang} style={duotoneLight}>
		{String(children)}
	</SyntaxHighlighter>}
    </>
}
