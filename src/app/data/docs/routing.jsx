import Code from "@/app/components/code";
import Link from "next/link";

export default function Routing(){
    return <>
        <p>
            In "routes/index.ts" all your routes will need to be configured
        </p>
        <Code lang={"tsx"}>
            {`import { ReaperRoutes } from "reaperjs";
import ApiRoutes from "./api";

export default function MainRoutes({
    Get,
    Post,
    Middleware,
    Group,
}:ReaperRoutes) {}`}
        </Code>
        <h2>
            Callbacks
        </h2>
        <div className="sub-main">
            <h3>GET & POST</h3>
            <p>
                In your default exports callback, you will need to call the Get function provided:
            </p>
            <Code lang={"tsx"}>
                {`Get(
    "home-page", //endpoint name, this is important
    "/", //end point url
    "@pagesController.home" //controller and function to use
)
Post(
    "home-page", //endpoint name, this is important
    "/", //end point url
    "@pagesController.home" //controller and function to use, controllers are found in "api/controllers" as "api/controllers/{name}".ts
)
`}
            </Code>  
            <h5>Example using a slug</h5>
            <p>
                Using {"[slug]"} in the url will capture the a slug
            </p>
            <Code lang={"tsx"}>
                {`Get("home-page","/url/[slug]","@pagesController.home")`}
            </Code>  
            <p>
            Using {"[...slug]"} will take the rest of that url and convert it to a slug
            </p>
            <Code lang={"tsx"}>
                {`Get("home-page","/url/[...slug]","@pagesController.home")`}
            </Code>  
            <h3>Grouping routes</h3>
            <p>Grouping works as follows:</p>
            <Code lang={"tsx"}>
                {`import { ReaperRoutes } from "reaperjs";
import ApiRoutes from "./api";
export default function MainRoutes({
    Group,
}:ReaperRoutes) {
    //api's
    Group("/api",ApiRoutes)
}`}
            </Code>
            <p>
                In routes/api.ts
            </p>
            <Code lang={"tsx"}>
                {`import { ReaperRoutes } from "reaperjs";
export default function ApiRoutes({
    Get,
    Post,
    Middleware,
    Group,
}:ReaperRoutes) {
    Post("login","/login","@userController.login")
    Middleware("/auth/[...auth]","@authMiddleware",({
        Post,
    }:ReaperRoutes)=>{
        Post("logout","/logout","@userController.logout")
        Post("user","/user","@userController.details")
    })
}
    
`}
            </Code>
            <p>
                Now all routes starting here will be prefixed with /api, so /login will be /api/login
            </p>
            <h3>Middleware</h3>
            <p>Middleware can be used to add aditional checks before any controllers get used, you can use the same matching as Get and Post uses to tell it what routes to use</p>
            <p>For example:</p>
            <Code lang={"tsx"}>
                {` Middleware(
"/auth/[...auth]",//route
"@authMiddleware",//middleware's name, middleware can be found in "api/middleware" as "api/middleware/{name}".ts
({//callback
    Post,
}:ReaperRoutes)=>{})`}
            </Code>
            <p>! Please note -- full routes must still be expressed under middleware, unless its contained in a group.</p>
            <Code lang={"tsx"}>
                {` Middleware("/auth/[type]","@authMiddleware",({
    Post,
}:ReaperRoutes)=>{
    Post("login-api","/auth/login","@authContoller.login")
})`}
            </Code>
            <p>(Grouped example)</p>
            <Code lang={"tsx"}>
                {`Group("/auth",({
    Middleware
}:ReaperRoutes)=>{
    Middleware("/[type]","@authMiddleware",({
        Post,
    }:ReaperRoutes)=>{
        Post("login-api","/login","@authContoller.login")
    })
})`}
            </Code>
        </div>
    </>
}