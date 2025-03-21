"use client";
import { useParams } from "next/navigation";
import  docs from "../../data/docs"
export default function Doc() {
    const {doc} = useParams();
    //@ts-ignore;
    const Component = docs[doc]
    return <Component/>
}
