"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import docs,{base} from "./data/docs";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Code from "./components/code";
import Logo from "./components/logo"
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"
import Links from "./components/links";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {doc}:any = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [k,setK]=useState(0);
  const [dir,setDir] = useState<"prev"|"next">("next");

  useEffect(()=>{
    if(!doc){
      router.push(`/docs/${Object.keys(base)[0]}`);
    }
  },[doc]);
  
  useEffect(()=>{
    setK(k=>k+1);
    document.querySelector(".main-container")?.scrollTo?.({top:0,behavior:"instant"})
  },[pathname]);

  const lastDoc = Object.keys(base)[Object.keys(base).indexOf(decodeURIComponent(doc)) - 1];
  const nextDoc = Object.keys(base)[Object.keys(base).indexOf(decodeURIComponent(doc)) + 1];


  return (
    <html lang="en">
        <head>
          <title>Reaper.js docs</title>
          </head>
      <body className={inter.className}>
          <script src="https://cdn.jsdelivr.net/gh/edenai/yodabot@e4f753f/embed.js?project=d9b4d182-9eb0-463b-8121-9290c1831678&provider=openai&model=gpt-4o-mini"></script>
        {!doc ? <div className="w-full h-screen flex justify-center items-center"><div className="loader"/><Logo/></div>:<div className="flex flex-col w-screen h-screen">
        <Logo/>  
        <div className="p-4 w-full z-10 flex flex-wrap lg:flex-nowrap gap-4 items-center lg:pl-8" style={{backgroundImage:"linear-gradient(90deg,#111111,#111111,#111111,transparent)"}}>
          <div className="text-2xl flex items-center w-full gap-4">
          <Image alt="reaper" style={{filter:"invert(100%)"}} width={40} height={50} src={"/reaper.webp"}/>
          Reaper.js <span 
                      className="text-xs lg:text-sm ml-auto tape"
                    >
                    🚧 Heads up! Reaper.js is still in early development and a bit unstable, so it’s not quite ready for production just yet. Stay tuned for updates!
                    </span>
          </div>
          <a className="hidden lg:inline" href="https://www.buymeacoffee.com/damian_" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{maxHeight:"45px",height: "45px !important",width: "217px !important"}} /></a>        </div>        
        <div className="flex w-full h-full">
        <nav>          
          <Links docs={docs}/>
        </nav>
        <div className="main-container relative">          
          <main key={k} className="absolute top-0 left-0 w-full h-full">
             <div className={`sub-main animate-${dir}`}>
                <div className="flex items-center gap-4 pb-8">
                  <h1 className="text-nowrap">{decodeURIComponent(doc)}</h1>
                  {lastDoc && <div className="w-full flex justify-end pr-4">
                    <div className="flex items-center gap-4">
                      Previous
                     <Link onClick={()=>setDir("prev")} className="button button-flash" href={lastDoc}>{lastDoc}</Link>
                    </div>
                  </div>}                
                </div>
                {children}                
             </div>
            {nextDoc && <footer className={`flex items-center fixed bottom-0 -left-20 justify-end animate-${dir}`}>
               <div className="w-full justify-end flex items-center gap-4">
               <div className="w-full text-right text-nowrap">Next up</div>      
               <div className="mt-auto flex justify-end">
                  <Link onClick={()=>setDir("next")} className="button button-flash" href={nextDoc}>{nextDoc}</Link>
                </div>
               </div>
            </footer>} 
          </main>
        </div>
        </div>
        </div>}
        <Analytics />
        </body>

    </html>
  );
}

