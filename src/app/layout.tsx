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
  const {doc} = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [k,setK]=useState(0);
  const [dir,setDir] = useState<"prev"|"next">("next");

  useEffect(()=>{
    if(!doc){
      router.push(`/docs/${Object.keys(docs)[0]}`);
    }
  },[doc])
  useEffect(()=>{
    setK(k=>k+1);
    document.querySelector(".main-container")?.scrollTo?.({top:0,behavior:"instant"})
  },[pathname]);



  return (
    <html lang="en">
        <head>
          <title>Reaper.js docs</title>
          <link rel="icon" href="/reaper.webp" type="image/webp" />
          <link rel="apple-touch-icon" href="/reaper.webp" />
        </head>
      <body className={inter.className}>
        <nav>
          <Logo/>            
          {Object.keys(docs).map(key=>{
            return <Link  className={key == doc ? "active":""} key={key} href={`/docs/${key}`}>
              {key}
            </Link>
          })}
        </nav>
        <div className="main-container">          
          <main  key={k}>
             <div className={`sub-main min-h-screen animate-${dir}`}>
                <div className="flex items-center gap-4 pb-8">
                  {Object.keys(docs)[Object.keys(docs).indexOf(doc) - 1] && <Link onClick={()=>setDir("prev")} className="button button-flash" href={Object.keys(docs)[Object.keys(docs).indexOf(doc) - 1]}>{Object.keys(docs)[Object.keys(docs).indexOf(doc) - 1]}</Link>}
                  
                  <h1>{doc}</h1>
                </div>
                {children}
                
                
             </div>
            <footer className="flex items-center justify-end">
                <div className="flex justify-end gap-4">
                {Object.keys(docs).map((key,i)=>(<div className="flex gap-4" key={key}>
                  {i>0&&<div className="h-full" style={{width:"1px",background:"currentColor"}}/>}
                  <div >{key}</div>
                </div>))}
                </div>
               {Object.keys(docs)[Object.keys(docs).indexOf(doc) + 1] && <div className="w-full justify-end flex items-center gap-4">
               <div className="w-full text-right text-nowrap">Next up</div>      
               <div className="mt-auto flex justify-end">
                  <Link onClick={()=>setDir("next")} className="button button-flash" href={Object.keys(docs)[Object.keys(docs).indexOf(doc) + 1]}>{Object.keys(docs)[Object.keys(docs).indexOf(doc) + 1]}</Link>
                </div>
               </div>}
            </footer> 
          </main>
        </div>
        </body>
    </html>
  );
}
