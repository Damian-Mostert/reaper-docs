import Code from "@/app/components/code";
import Link from "next/link";

export default function Overview(){
    return <>
        <h3>Install</h3>
        <p>For a full new project run commands as listed bellow:</p>
        <Code lang="bash">{`mkdir reaperProject
cd ./reaperProject
npm i rprcli && npx rprcli init && npm i`}</Code>
        <h3>
            Basic project structure
        </h3>
        <Code lang="bash">
{`- api
    - controllers #FOR ROUTES CONTROLLERS
    - middleware #FOR ROUTES CONTROLLERS
    - services #GENEREL SERVICES
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
- .env
`}
        </Code>
        
    </>
}