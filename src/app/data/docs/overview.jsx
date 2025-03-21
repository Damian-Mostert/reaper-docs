import Code from "@/app/components/code";
import Link from "next/link";

export default function Overview() {
    return (
        <>
            <p>
                Reaper.js is a powerful TypeScript-based framework designed to streamline backend development. It offers built-in database migrations, seeders, and SQL query utilities, making it easy to manage data efficiently.
            </p>
            <p>
                With native support for TSX and JSX rendering, developers can seamlessly integrate server-side rendering with modern frontend techniques.
            </p>
            <p className="pb-16">
                Packed with essential tools, Reaper.js simplifies the process of building a single, full-featured server, reducing boilerplate while ensuring flexibility and scalability.
            </p>
            
            <h3>Installation <span className="text-xl">⚙️</span></h3>
            <p>To set up a new project from scratch, run the following commands:</p>
            
            <Code lang="bash">{`mkdir reaperProject
cd ./reaperProject
npm i reaperjs && npx reaperjs init && npm i`}</Code>
            
            <p>
                You will now see the Reaper project structure in your directory.
            </p>
            
            <Code lang="bash">
                {`- api
    - controllers #FOR ROUTES CONTROLLERS
    - middleware #FOR ROUTES CONTROLLERS
    - services #GENERAL SERVICES
    - events #SOCKET EVENTS
- app
    - styles
        globals.scss
    - views
    - layout.tsx
- db 
    - migrations
    - models
    - seeders
- public
- routes
    index.ts
- types
- .env`}
            </Code>
        </>
    );
}
