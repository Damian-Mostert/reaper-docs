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
    async home(request, response) {
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
    async test(request, response) {
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

        <h2>🔹 Controller Methods</h2>
        <p>
            Each controller method is responsible for handling specific routes. It takes the <code>request</code> and <code>response</code> objects as parameters and can either render a view or return data in different formats (like JSON).
        </p>
        <Code lang={"tsx"}>
            {`async home(request, response) {
    response.render<HomePageProps>("home", {
        metadata: {
            title: "Home",
            description: "Home page description"
        },
        props: {
            data: request.params.test
        }
    });
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

        <h2>📌 Best Practices for Controllers</h2>
        <ul>
            <li>✅ **Organize** controllers by feature (e.g., separate controllers for users, posts, etc.).</li>
            <li>✅ **Validate** inputs and request parameters before using them in logic.</li>
            <li>✅ **Use middleware** to protect routes that need authentication or authorization checks.</li>
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
