"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import docs from "./data/docs";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {doc} = useParams();

  return (
    <html lang="en">
        <head>
          <title>Reaper.js docs</title>
          <link rel="icon" href="/reaper.webp" type="image/webp" />
          <link rel="apple-touch-icon" href="/reaper.webp" />
        </head>
      <body className={inter.className}>
        <nav>
          <header className="text-xl text-nowrap flex items-center w-max gap-4">
            <Image width={30} height={30} alt="Reaper.webp" src="/reaper.webp" style={{filter:"invert(100%)"}}/>
              Reaper.js Docs
          </header>        
          {Object.keys(docs).map(key=>{
            return <Link className={key == doc ? "active":""} key={key} href={`/docs/${key}`}>
              {key}
            </Link>
          })}
        </nav>
        <div className="main-container">          
          <main>
             <div className="sub-main">
             {children}
             </div>
          </main>
          <footer>
            Reaper.js Docs
          </footer> 
        </div>
        </body>
    </html>
  );
}
