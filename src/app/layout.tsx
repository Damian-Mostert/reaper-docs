"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import docs from "./data/docs";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Code from "./components/code";
import Logo from "./components/logo"
const inter = Inter({ subsets: ["latin"] });

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
      router.push(`/docs/${Object.keys(docs)[0]}`);
    }
  },[doc]);
  
  useEffect(()=>{
    setK(k=>k+1);
    document.querySelector(".main-container")?.scrollTo?.({top:0,behavior:"instant"})
  },[pathname]);

  const lastDoc = Object.keys(docs)[Object.keys(docs).indexOf(decodeURIComponent(doc)) - 1];
  const nextDoc = Object.keys(docs)[Object.keys(docs).indexOf(decodeURIComponent(doc)) + 1];


  return (
    <html lang="en">
        <head>
          <title>Reaper.js docs</title>
          <link rel="icon" href="/reaper.webp" type="image/webp" />
          <link rel="apple-touch-icon" href="/reaper.webp" />
        </head>
      <body className={inter.className}>
        {!doc ? <div className="w-full h-screen flex justify-center items-center"><div className="loader"/></div>:<>        
        <nav>
          <Logo/>            
          {Object.keys(docs).map(key=>{
            return <Link  className={key == decodeURIComponent(doc) ? "active":""} key={key} href={`/docs/${key}`}>
              {key}
            </Link>
          })}
        </nav>
        <div className="main-container">          
          <main  key={k}>
             <div className={`sub-main animate-${dir}`}>
                <div className="flex items-center gap-4 pb-8">
                  <h1 className="text-nowrap">{decodeURIComponent(doc)}</h1>
                  {lastDoc && <div className="w-full flex justify-end">
                    <div className="flex items-center gap-4">
                      Last document:
                     <Link onClick={()=>setDir("prev")} className="button button-flash" href={lastDoc}>{lastDoc}</Link>
                    </div>
                  </div>}                
                </div>
                {children}
                
                
             </div>
            {nextDoc && <footer className={`flex items-center justify-end animate-${dir}`}>
               <div className="w-full justify-end flex items-center gap-4">
               <div className="w-full text-right text-nowrap">Next up</div>      
               <div className="mt-auto flex justify-end">
                  <Link onClick={()=>setDir("next")} className="button button-flash" href={nextDoc}>{nextDoc}</Link>
                </div>
               </div>
            </footer>} 
          </main>
        </div>
        </>}
        </body>
    </html>
  );
}
