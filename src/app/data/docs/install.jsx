import Code from "../../components/code";

export default function Install(){
    return <>
        <h1>Install</h1>
        <Code lang="bash">{`
            mkdir reaperProject
            cd ./reaperProject
            npm i rprcli && npx rprcli init && npm i
        `}</Code>
        <h2>Install</h2>
        <h3>Install</h3>
        <h4>Install</h4>
        <h5>Install</h5>
        <h6>Install</h6>
        <p>Hello world,Hello world,Hello world,Hello world,Hello world,Hello world,Hello world,Hello world,</p>
    </>
}