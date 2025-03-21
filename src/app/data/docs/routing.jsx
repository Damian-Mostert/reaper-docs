import Code from "@/app/components/code";

export default function Routing(){
    return <>
        <h1>Routing</h1>
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
        <h2>GET</h2>
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
        <h2>POST</h2>
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
        <h2>GROUPING</h2>
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
        <h2>MIDDLEWARE</h2>
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
    </>
}