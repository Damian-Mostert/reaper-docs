import Code from "@/app/components/code";
import Link from "next/link";

export default function Controllers(){
    return <>
        <p>
            Controllers in **Reaper.js** are used to handle incoming requests and send back responses, usually through rendering views or returning JSON data. They are typically found in the <code>api/controllers</code> directory.
        </p>

        <h2>📍 Creating a Controller</h2>
        <p>
            A controller is an object that defines methods that will handle different routes. Each method receives a <code>request</code> and <code>response</code> object.
        </p>

        <Code lang={"tsx"}>
            {`import { Controller } from "rprcli";

const pageController: Controller = {
    async home(request, response, next) {
        response.render("home", {
            metadata: {
                title: "Home",
                description: "Welcome to the homepage!"
            },
            props: {
                data: request.params.test
            }
        });
    },
    async test(request, response, next) {
        response.render("test", {
            metadata: {
                title: "Test",
                description: "Test page description"
            },
            props: {
                data: request.params.test
            }
        });
    }
};

export default pageController;`}
        </Code>

        <h2>🔹 ReaperRequest Class</h2>
        <p>
            The <code>ReaperRequest</code> class is a wrapper around the incoming request, providing structured access to request parameters, authentication, and headers.
        </p>
        <ul>
            <li><strong>headers()</strong>: Retrieves the request headers.</li>
            <li><strong>cookies()</strong>: Retrieves the cookies from the request.</li>
            <li><strong>user()</strong>: Attempts to extract user authentication details from the request headers.</li>
            <li><strong>params</strong>: Stores route parameters.</li>
            <li><strong>data</strong>: Contains the request body (for POST requests) or query parameters (for GET requests).</li>
        </ul>
        <Code lang={"tsx"}>
            {`export class ReaperRequest {
    private req: Request;
    data: any = {};
    headers = () => {
        return this.req.headers;
    };
    cookies = () => {
        return this.req.cookies;
    };
    user = async () => {
        const authHeader = this.req.headers.authorization;
        return {
            id: "" // Implement proper user extraction logic
        };
    };
    auth: Auth;
    params: { [key: string]: any };

    constructor(req: Request, params: { [key: string]: any }) {
        this.params = params;
        this.auth = new Auth(req);
        this.req = req;
        if (req.method == "GET") {
            this.data = req.query;
        }
        if (req.method == "POST") {
            this.data = req.body;
        }
    }
}`}
        </Code>

        <h2>🔹 ReaperResponse Class</h2>
        <p>
            The <code>ReaperResponse</code> class provides methods for sending responses to the client.
        </p>
        <ul>
            <li><strong>render(template, data)</strong>: Renders a template with provided data.</li>
            <li><strong>status(code)</strong>: Sets the response HTTP status code.</li>
            <li><strong>text(data)</strong>: Sends a plain text response.</li>
            <li><strong>json(body)</strong>: Sends a JSON response.</li>
        </ul>
        <Code lang={"tsx"}>
            {`export class ReaperResponse {
    res: Response;
    Render: any;
    constructor(res: Response, Render: any) {
        this.res = res;
        this.Render = Render;
    }
    render<Props>(template: string, data: Template<Props>) {
        this.Render(template, data);
    }
    status(code: number) {
        this.res.status(code);
        return this;
    }
    text(data: string) {
        this.res.send(data);
    }
    json(body: any) {
        this.res.json(body);
    }
}`}
        </Code>

        <h2>⚡ Rendering Views in Controllers</h2>
        <p>
            To render a view, use the <code>response.render()</code> method. This method expects the view's name and an object that contains data (like metadata or page-specific props).
        </p>
        <Code lang={"tsx"}>
            {`response.render<HomePageProps>("home", {
    metadata: {
        title: "Home",
        description: "Home page description"
    },
    props: {
        data: request.params.test
    }
});`}
        </Code>

        <h2>🔐 Dynamic Data with Request Parameters</h2>
        <p>
            You can access request parameters (like slugs or query parameters) through the <code>request.params</code> object. For example, <code>request.params.test</code> gets the "test" parameter in the route.
        </p>
        <Code lang={"tsx"}>
            {`async home(request, response) {
    const testData = request.params.test;
    response.render("home", {
        metadata: {
            title: "Home Page"
        },
        props: {
            data: testData
        }
    });
}`}
        </Code>

        <h2>🔹 The next Function</h2>
        <p>
            The <code>next</code> function allows you to skip the current controller and proceed to the next middleware or controller in the stack. This is useful when you need to defer the response to the next function or if certain conditions are not met.
        </p>
        <ul>
            <li><strong>Flow Control</strong>: If you don't respond to the request within the current controller, you can call <code>next()</code> to pass the request to the next handler.</li>
            <li><strong>Skipping Logic</strong>: When a condition is not met (e.g., failed validation or missing data), you can call <code>next()</code> to skip the current controller and continue with the next available handler.</li>
        </ul>

        <h2>🔹 Skipping Controllers with next</h2>
        <p>
            The <code>next()</code> function is commonly used to skip the current controller. If the request doesn't meet certain criteria, the controller can call <code>next()</code> to defer handling to the next controller in the chain.
        </p>
        <Code lang={"tsx"}>
            {`async home(request, response, next) {
    // If some condition fails, skip this controller
    if (someConditionFails) {
        return next();  // Skip and move to the next controller
    }

    response.render("home", {
        metadata: { title: "Home Page" },
        props: { data: request.params.test }
    });
}`}
        </Code>

        <h2>📌 Best Practices for Controllers</h2>
        <ul>
            <li>✅ **Organize** controllers by feature (e.g., separate controllers for users, posts, etc.).</li>
            <li>✅ **Validate** inputs and request parameters before using them in logic.</li>
            <li>✅ **Use middleware** to protect routes that require authentication or authorization checks.</li>
            <li>✅ **Use next() for flow control**: Make sure to call <code>next()</code> to skip controllers when certain conditions are not met, or to defer to the next middleware or controller.</li>
        </ul>

        <h2>🔗 Next Steps</h2>
        <p>
            Now that you have an understanding of controllers, you can explore:
        </p>
        <ul>
            <li><Link href="/docs/Routing">Routing Documentation</Link></li>
            <li><Link href="/docs/Middleware">Middleware Documentation</Link></li>
        </ul>
    </>
}