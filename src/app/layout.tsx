"use client"

import { Inter } from "next/font/google";
import "./globals.scss";

import docs from "./data/docs";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./components/logo";
import {ThemeProvider,useTheme} from "./hooks/useTheme";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react"
import Links from "./components/links";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	//@ts-ignore 
  //PROVIDERS
	return <ThemeProvider>
		<Main>
			{children}
		</Main>
	</ThemeProvider>
}

function Main({children}: Readonly<{
	children: React.ReactNode;
}>){
	const {theme,toggleTheme} = useTheme();
	const {doc,nav,v}:any = useParams();
	const router = useRouter();
	const pathname = usePathname();
	const [k,setK]=useState(0);
	const [dir,setDir] = useState<"prev"|"next">("next");

	useEffect(()=>{
		if(!doc){
			const version:string = v?v:Object.keys(docs)[0];
			//@ts-ignore
			const navigation:string = nav ? decodeURIComponent(nav) : Object.keys(docs[version])[0];
			//@ts-ignore
			router.push(`/docs/${version}/${navigation}/${Object.keys(docs[version][navigation])[0]}`);
		}
	},[doc]);

	useEffect(()=>{
		setK(k=>k+1);
		document.querySelector(".main-container")?.scrollTo?.({top:0,behavior:"instant"})
	},[pathname]);
	//@ts-ignore
	let lastDoc = v && nav 
	//@ts-ignore
	? Object.keys(docs?.[v]?.[nav] || {})?.[Object.keys(docs?.[v]?.[nav] || {}).indexOf(decodeURIComponent(doc)) - 1] 
		: "/";

  let prevNav = "";
	// If lastDoc isn't found, check the previous `nav`
  if (!lastDoc || lastDoc === "/") {
  //@ts-ignore
  const prevNavIndex = Object.keys(docs?.[v] || {}).indexOf(nav) - 1;
  //@ts-ignore
  prevNav = Object.keys(docs?.[v] || {})[prevNavIndex];

    if (prevNav) {
  //@ts-ignore
  lastDoc = Object.keys(docs?.[v]?.[prevNav] || {})?.[Object.keys(docs?.[v]?.[prevNav] || {}).length - 1]? `/docs/${v}/${prevNav}/${ Object.keys(docs?.[v]?.[prevNav] || {})?.[Object.keys(docs?.[v]?.[prevNav] || {}).length - 1]}` : "/";
    }
  }

  //@ts-ignore
  let nextDoc = v && nav 
  //@ts-ignore
  ? Object.keys(docs?.[v]?.[nav] || {})?.[Object.keys(docs?.[v]?.[nav] || {}).indexOf(decodeURIComponent(doc)) + 1] 
    : "/";
  var nextNav = "";

  // If nextDoc isn't found, check the next `nav`
	if (!nextDoc || nextDoc === "/") {
	//@ts-ignore
	const nextNavIndex = Object.keys(docs?.[v] || {}).indexOf(nav) + 1;
	//@ts-ignore
	nextNav = Object.keys(docs?.[v] || {})[nextNavIndex];

		if (nextNav) {
	//@ts-ignore
	nextDoc = Object.keys(docs?.[v]?.[nextNav] || {})?.[0]?`/docs/${v}/${nextNav}/${Object.keys(docs?.[v]?.[nextNav] || {})?.[0]}` : "/";
		}
	}

	return (
		<html lang="en" >
			<head>
				<title>Reaper.js docs</title>
				</head>
			<body 
			//@ts-ignore
			theme={theme} className={inter.className}>
				<script src="https://cdn.jsdelivr.net/gh/edenai/yodabot@e4f753f/embed.js?project=d9b4d182-9eb0-463b-8121-9290c1831678&provider=openai&model=gpt-4o-mini"></script>
				{!doc ? <div className="w-full h-screen flex justify-center items-center"><div className="loader"/><Logo/></div>:<div className="flex flex-col w-screen h-screen">
				<Logo/> 
				<div className="p-4 w-full z-10 flex flex-wrap lg:flex-nowrap gap-4 items-center lg:pl-8" style={{backgroundImage:"linear-gradient(90deg,var(--main),var(--main),var(--main),transparent)"}}>
					<div className="text-2xl flex items-center w-full gap-4">
					<Image alt="reaper" style={{filter:theme == "dark"?"invert(100%)":""}} width={40} height={50} src={"/reaper.webp"}/>
					Reaper.js
					<div style={{
							borderColor:"var(--body-bg)",
							background:"var(--main)"
						}} className="border p-4 rounded-lg hidden ml-auto text-sm h-max py-2 lg:flex gap-2 relative menu">
						<div>Version</div>
						<div>
							({v})
						</div>
						<div className="left-0 menu-items absolute shadow-md border w-full flex flex-col gap-1 rounded-lg top-full" style={{
							borderColor:"var(--body-bg)",
							background:"var(--main)"
						}}>
              {/*@ts-ignore*/}
							{Object.keys(docs).filter(ver=>ver!=v).map(version=>{
                //@ts-ignore
								return <Link href={`/docs/${version}/${Object.keys(docs[version])[0]}/${Object.keys(docs[version][Object.keys(docs[version])[0]])[0]}`} className="w-full text-center p-2" key={version}>
									{version}
								</Link>
							})}
						</div>
					</div> 
          <div className="cursor-pointer" onClick={toggleTheme} >
            {theme == "light" && "🌕"}
            {theme == "dark" && "🌞"}          
          </div>
					<span className="text-xs tape">
						🚧 Heads up! Reaper.js is still in early development and a bit unstable, so it’s not quite ready for production just yet. Stay tuned for updates!
					</span>
					</div>
				<a className="hidden lg:inline" href="https://www.buymeacoffee.com/damian_" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{maxHeight:"45px",height: "45px !important",width: "217px !important"}} /></a> </div> 
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
										<Link onClick={()=>setDir("prev")} className="button button-flash" href={lastDoc}>{prevNav && `${prevNav} | `}{lastDoc.split("/")[lastDoc.split("/").length-1]}</Link>
									</div>
								</div>} 
							</div>
							{children} 
						</div>
						{nextDoc && <footer className={`flex items-center fixed bottom-0 -left-20 justify-end animate-${dir}`}>
							<div className="w-full justify-end flex items-center gap-4">
							<div className="w-full text-right text-nowrap">Next up</div> 
							<div className="mt-auto flex justify-end">
								<Link onClick={()=>setDir("next")} className="button button-flash" href={nextDoc}>{nextNav && `${nextNav} | `}{nextDoc.split("/")[nextDoc.split("/").length-1]}</Link>
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
