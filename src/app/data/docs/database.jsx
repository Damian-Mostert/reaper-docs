import Link from "next/link";

export default function Install(){
    return <div className="w-full flex flex-col min-h-screen">
        <div className="flex items-center gap-4">
            <Link className="px-4 rounded-md border" href={"Overview"}>Prev</Link>
            <h1>Database</h1>
        </div>
        <div className="mt-auto w-full flex justify-end">
        <Link className="px-4 rounded-md border" href={"Routing"}>Next</Link>
        </div>
    </div>
}