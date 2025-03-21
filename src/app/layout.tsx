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
  const [k,setK]=useState(0);
  useEffect(()=>{
    if(!doc){
      router.push(`/docs/${Object.keys(docs)[0]}`);
      setK(k=>k+1);
    }
  },[doc])

  return (
    <html lang="en">
        <head>
          <title>Reaper.js docs</title>
          <link rel="icon" href="/reaper.webp" type="image/webp" />
          <link rel="apple-touch-icon" href="/reaper.webp" />
        </head>
      <body className={inter.className}>
        <nav>
          <Link className="flex items-center gap-2 p-4" href={"/"}>
            <Image width={30} height={30} alt="reaper.webp" style={{filter:"invert(100%)"}} src="/reaper.webp"></Image>
            <span>Reaper.js</span>
          </Link>
          {Object.keys(docs).map(key=>{
            return <Link className={key == doc ? "active":""} key={key} href={`/docs/${key}`}>
              {key}
            </Link>
          })}
          <Logo/>            
        </nav>
        <div className="main-container">          
          <main  key={k}>
             <div className="sub-main animate-in">
             {children}
             </div>
            <footer>
              Reaper.js Docs
            </footer> 
          </main>
        </div>
        </body>
    </html>
  );
}
