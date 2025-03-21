import Link from "next/link";
import Code from "../../components/code"
export default function Install(){
    return <>
        <h3>Database</h3>
        <p>The reaper uses SQL an database for database query's and so on, use the env keys bellow to configure your db connection:</p>
        <Code lang={"ini"}>
            {`DB_HOST=127.0.0.1 #DATABASE PORT
DB_PORT=3306 #DATABASE PORT
DB_USER=#DATABASE USER
DB_PASSWORD=#DATABASE USER PASSWORD
DB_NAME=#DATABASE NAME`}
        </Code>
        <Code lang={"ini"}>
            {`PORT=5050 #SERVER PORT
BE_SECRET=testsecret
`}
        </Code>
        <h3>Server</h3>
        <h3>App</h3>
    </>
}