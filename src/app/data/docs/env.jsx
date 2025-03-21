import Link from "next/link";
import Code from "../../components/code";

export default function Install() {
    return (
        <>
            <Section title="Database">
                <p>Reaper uses an SQL database for queries and data management. Configure your database connection using the environment variables below:</p>
                <Code lang="ini">
                    {`DB_HOST=127.0.0.1   # Database host
DB_PORT=3306        # Database port
DB_USER=            # Database user
DB_PASSWORD=        # Database user password
DB_NAME=            # Database name`}
                </Code>
            </Section>

            <Section title="Server">
                <p><code>PORT</code> sets the runtime port for the server.</p>
                <Code lang="ini">
                    {`PORT=5050   # Server port`}
                </Code>

                <p><code>BE_SECRET</code> is used to encrypt and decrypt database values.</p>
                <Code lang="ini">
                    {`BE_SECRET=testsecret`}
                </Code>
            </Section>

            <Section title="App">
                <p>Environment variables prefixed with <code>REAPER_APP_</code> will be accessible in client-side templates.</p>
                <Code lang="ini">
                    {`REAPER_APP_variable_name=""`}
                </Code>
            </Section>
        </>
    );
}

function Section({ title, children }) {
    return (
        <div className="mb-6">
            <h3>{title}</h3>
            {children}
        </div>
    );
}
