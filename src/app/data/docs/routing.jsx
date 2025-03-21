import Code from "@/app/components/code";
import Link from "next/link";

export default function Routing(){
    return <>
        <p>
            In "routes/index.ts" all your routes will need to be configured
        </p>
        <Code lang={"tsx"}>
            {`import { ReaperRoutes } from "rprcli";
import ApiRoutes from "./api";

export default function MainRoutes({
    Get,
    Post,
    Middleware,
    Group,
}:ReaperRoutes) {
}
`}
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
    "@pagesController.home" //controller and function to use
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
                {`import { ReaperRoutes } from "rprcli";
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
                {`import { ReaperRoutes } from "rprcli";
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
            <h3>Using middleware</h3>
            <Code lang={"tsx"}>
                {``}
            </Code>
        </div>
    </>
}