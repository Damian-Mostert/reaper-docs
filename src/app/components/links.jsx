"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Links({ docs:DOCS }) {
  const { doc,v } = useParams();
  const docs = DOCS[v];

  const [open, setOpen] = useState(null);

  // Automatically open the tab corresponding to the current doc
  useEffect(() => {
    // Loop through the docs to find the parent category that contains the current doc
    const foundCategory = Object.keys(docs).find((category) =>
      Object.keys(docs[category]).includes(decodeURIComponent(doc))
    );
    // If the category is found, set it as the open category
    if (foundCategory) {
      setOpen(foundCategory);
    }
  }, [doc, docs]); // Depend on `doc` and `docs` to trigger the effect when either changes

  return (
    <div className="w-56 p-2">
      {Object.keys(docs).map((KEY) => (
        <div className="relative flex flex-col mb-4" key={KEY}>
          {/* Category header with hover effect */}
          <div
            className="w-full p-3 cursor-pointer hover:bg-[#11111130] rounded-lg flex justify-between items-center"
            onClick={() => setOpen(KEY === open ? null : KEY)}
          >
            <span className="font-semibold text-lg">{KEY}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transform transition-transform ${
                open === KEY ? "rotate-180" : "rotate-0"
              }`}
              style={{
                ...open == KEY?{color:"var(--main-borders)"}:{}
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Nested links (only show if parent is open) */}
          {open === KEY && (
            <div className="w-full pl-4 p-2 space-y-2">
              {Object.keys(docs[KEY]).map((url) => (
                <Link
                  key={`/docs/${v}/${KEY}/${url}`}
                  className={`block p-2 text-sm transition-colors`}
                  style={{
                    ...url === decodeURIComponent(doc)?{color:"var(--main-borders)"}:{color:"var(--body-text)"}
                  }}
                  href={`/docs/${v}/${KEY}/${url}`}
                >
                  {url}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
