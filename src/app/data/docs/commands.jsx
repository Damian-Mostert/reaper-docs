import Link from "next/link";
import Code from "../../components/code";

export default function Install() {
    return (
        <>
            <Section title="Build" description="Builds the Reaper.js application.">
                <Command code="npm run build" alternative="npx rprcli build" />
                <ExampleOutput>
                    {`Reaper.js [2:28:00 PM] ℹ INFO: Starting up dev server...
Reaper.js [2:28:02 PM] ✔ Server is running on port 5050
Reaper.js [2:28:12 PM] ⠏ Building server...`}
                </ExampleOutput>
            </Section>

            <Section title="Start" description="Starts a built server.">
                <Command code="npm start" alternative="npx rprcli start" />
                <ExampleOutput>
                    {`Reaper.js [2:29:57 PM] ✔ Client and server built.`}
                </ExampleOutput>
            </Section>

            <Section title="Dev" description="Runs the application in development mode, watching for file changes.">
                <Command code="npm run dev" alternative="npx rprcli dev" />
                <ExampleOutput>
                    {`Reaper.js [2:29:57 PM] ✔ Client and server built.`}
                </ExampleOutput>
            </Section>

            <Section title="Migrate" description="Runs new database migrations.">
                <Command code="npm run migrate" alternative="npx rprcli migrate" />
                <ExampleOutput>
                    {`Reaper.js [2:29:57 PM] ✔ Client and server built.`}
                </ExampleOutput>
            </Section>

            <Section title="Rollback" description="Undoes the last migration.">
                <Command code="npm run rollback" alternative="npx rprcli rollback" />
                <ExampleOutput>
                    {`Reaper.js [2:29:57 PM] ✔ Client and server built.`}
                </ExampleOutput>
            </Section>

            <Section title="Seed" description="Runs database seeders.">
                <p>To execute all seeders use:</p>
                <Command code="npm run seed" alternative="npx rprcli seed" />
                <p>To execute a single seeder use:</p>
                <Command code="npm run seed {name}" alternative="npx rprcli seed {name}" />
                <ExampleOutput>
                    {`Reaper.js [2:29:57 PM] ✔ Client and server built.`}
                </ExampleOutput>
            </Section>

            <Section title="Make" description="Creates project resources.">
                <Command code="npm run make {type} {name}" alternative="npx rprcli make {type} {name}" />
                <h5>Types</h5>
                <ul>
                    <li>controller <span className="text-blue-400">(makes a new controller as <span className="text-green-500">"api/controllers/{"{name}"}Controller.ts"</span>)</span></li>
                    <li>middleware <span className="text-blue-400">(makes new middleware as <span className="text-green-500">"api/middleware/{"{name}"}Middleware.ts"</span>)</span></li>
                    <li>event <span className="text-blue-400">(makes a new event as <span className="text-green-500">"api/events/{"{name}"}Event.ts"</span>)</span></li>
                    <li>service <span className="text-blue-400">(makes a new service as <span className="text-green-500">"api/services/{"{name}"}Service.ts"</span>)</span></li>

                    <li>model <span className="text-blue-400">(makes new middleware as <span className="text-green-500">"api/middleware/{"{name}"}Middleware.ts"</span>)</span></li>
                    <li>migration</li>
                    <li>seeder</li>
                    <li>view</li>
                </ul>
            </Section>
            <Section title="Help" description="Logs list of commands and other tips.">
                <Command code="npm run help" alternative="npx rprcli help" />
            </Section>
        </>
    );
}

function Section({ title, description, children }) {
    return (
        <div className="flex flex-col gap-2">
            <h3>{title}</h3>
            <p>{description}</p>
            {children}
        </div>
    );
}

function Command({ code, alternative }) {
    return (
        <div className="flex items-center gap-2">
            <Code lang="bash">{code}</Code>
            or
            <Code lang="bash">{alternative}</Code>
        </div>
    );
}

function ExampleOutput({ children }) {
    return (
        <>
            <h4>Example output</h4>
            <Code lang="bash">{children}</Code>
        </>
    );
}
