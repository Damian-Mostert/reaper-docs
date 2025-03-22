import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus,vscLightPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../hooks/useTheme';


export default function Code({children,lang}){
    const {theme}=useTheme();
	return <>
     <SyntaxHighlighter language={lang} style={theme=="dark"?vscDarkPlus:vscLightPlus}>
		{String(children)}
	</SyntaxHighlighter>
    </>
}
