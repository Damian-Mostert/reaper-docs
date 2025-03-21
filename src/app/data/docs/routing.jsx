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
    "@pagesController.home" //controller to use
)
Post(
    "home-page", //endpoint name, this is important
    "/", //end point url
    "@pagesController.home" //controller to use
)
`}
            </Code>  
            Example using a slug
            <Code lang={"tsx"}>
                {`Get("home-page","/url/[slug]","@pagesController.home")`}
            </Code>  
            Example using a full sub pathname as a slug
            <Code lang={"tsx"}>
                {`Get("home-page","/url/[...slug]","@pagesController.home")`}
            </Code>  
            <h3>Grouping routes</h3>
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
            <h3>Using middleware</h3>
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
        </div>
    </>
}