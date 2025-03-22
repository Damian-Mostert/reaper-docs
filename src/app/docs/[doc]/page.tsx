"use client";
import { useParams } from "next/navigation";
import {base as docs} from "../../data/docs"
export default function Doc() {
    const {doc} = useParams();
    //@ts-ignore;
    const Component = docs[decodeURIComponent(doc)]
    return Component?<Component/>:<>Error</>
}
