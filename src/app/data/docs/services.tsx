import Code from "@/app/components/code";
import Link from "next/link";

export default function ServicesDocs() {
    return <>
        <h1>🛠 Universal Services in Reaper.js</h1>
        <p>
            Universal services in <strong>Reaper.js</strong> allow you to define shared logic that can be imported and used across your entire backend application. These services can handle tasks like database access, email notifications, and other shared functionality.
        </p>

        <h2>📍 Creating a Service</h2>
        <p>
            A service is a simple module that exports functions or classes for reuse. It can be imported anywhere in your application to provide functionality.
        </p>
        <Code lang="tsx">
            {`// services/emailService.ts
const emailService = {
    sendEmail: async (to: string, subject: string, body: string) => {
        // Logic to send email
        console.log(\`Sending email to \${to}\`);
    }
};

export default emailService;`}
        </Code>

        <h2>🔗 Using Services in Controllers</h2>
        <p>
            Services can be imported and used in your controllers or middleware to encapsulate shared functionality.
        </p>
        <Code lang="tsx">
            {`// controllers/userController.ts
import { Controller } from "reaperjs";
import emailService from "api/services/emailService";

const userController: Controller = {
    register: async (request, response) => {
        // Registration logic
        await emailService.sendEmail("user@example.com", "Welcome", "Thanks for registering!");
        response.send("User registered!");
    }
};

export default userController;`}
        </Code>

        <h2>✅ Best Practices for Services</h2>
        <ul>
            <li>✅ Keep services focused on a single responsibility, such as email sending or database interactions.</li>
            <li>✅ Use dependency injection or factory methods for complex services.</li>
            <li>✅ Always import services where needed to ensure reusability.</li>
        </ul>

        <h2>🔗 Next Steps</h2>
        <p>
            Now that you have an understanding of universal services, you can explore:
        </p>
        <ul>
            <li><Link href="/docs/Routing">Routing Documentation</Link></li>
            <li><Link href="/docs/Controllers">Controller Documentation</Link></li>
        </ul>
    </>
}

ServicesDocs.parentCategory = "Services"
