"use client";
import { useParams } from "next/navigation";
import docs from "../../../../data/docs"
export default function Doc() {
    const {v,nav,doc} = useParams();
    console.log(v,nav,doc,docs)
    //@ts-ignore;
    const Component = docs?.[decodeURIComponent(v)]?.[decodeURIComponent(nav)]?.[decodeURIComponent(doc)]
    return Component?<Component/>:<>Error</>
}
