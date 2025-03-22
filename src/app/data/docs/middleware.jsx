import Code from "@/app/components/code";
import Link from "next/link";

export default function MiddlewareDocs() {
    return <>
        <h1>🛠 Middleware in Reaper.js</h1>
        <p>
            Middleware in <strong>Reaper.js</strong> allows you to intercept requests before they reach controllers, enabling authentication, logging, or other pre-processing tasks. Middleware functions are defined separately and then applied to routes using the <code>Middleware</code> function.
        </p>

        <h2>📍 Creating Middleware</h2>
        <p>
            A middleware function receives the <code>request</code> and <code>response</code> objects and a <code>next</code> function, which must be called to continue request processing.
        </p>
        <Code lang="tsx">
            {`import { Middleware } from "reaperjs";

const authMiddleware: Middleware = async (request, response, next) => {
    // Perform authentication checks here
    next(); // Allow request to proceed
};

export default authMiddleware;`}
        </Code>

        <h2>🔗 Registering Middleware in Routes</h2>
        <p>
            Middleware must be registered in the <code>ApiRoutes</code> function using the <code>Middleware</code> method. The <code>@{name}Middleware</code> notation is used to reference middleware files.
        </p>
        <Code lang="tsx">
            {`import { ReaperRoutes } from "reaperjs";

export default function ApiRoutes({
    Get,
    Post,
    Middleware,
    Group,
}: ReaperRoutes) {
    
    Post("test", "/login", "@userController.login");
    
    Middleware("/auth/[...url]", "@authMiddleware", ({
        Post,
    }: ReaperRoutes) => {
        Post("logout", "/logout", "@userController.logout");
        Post("user", "/user", "@userController.details");
    });
}`}
        </Code>

        <h2>✅ Best Practices for Middleware</h2>
        <ul>
            <li>✅ Use middleware for **authentication, logging, and request validation**.</li>
            <li>✅ Always call <code>next()</code> unless you want to block a request.</li>
            <li>✅ Use named middleware files and reference them with <code>@middlewareName</code> for consistency.</li>
        </ul>
        <h2>🔗 Next Steps</h2>
        <p>
            Now that you have an understanding of middleware, you can explore:
        </p>
        <ul>
            <li><Link href="/docs/Routing">Routing Documentation</Link></li>
            <li><Link href="/docs/Controllers">Controller Documentation</Link></li>
        </ul>
    </>
}

MiddlewareDocs.parentCategory = "Routing"