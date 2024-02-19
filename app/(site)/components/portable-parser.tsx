'use client'

import { PortableText } from "@portabletext/react";
import SanityImage from "../components/sanity-image";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const PortableParser = ({ value }: { value: any }) => {
  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: SanityImage,
          code: ({ value }: any) => {
            return (
                    <CopyBlock
                        text={value.code}
                        language={value.language}
                        showLineNumbers
                        theme={dracula}
                    />
            );
          },
        },
        marks: {
          em: ({ children }) => <em className="font-semibold">{children}</em>,
          link: ({ value, children }) => {
            const target = (value?.href || "").startsWith("http")
              ? "_blank"
              : undefined;
            return (
              <a
                href={value?.href}
                target={target}
                rel={target === "_blank" ? "noindex nofollow" : ""}
                className="text-blue-400"
              >
                {children}
              </a>
            );
          },
        },
        block: {
          // Ex. 1: customizing common block types
          h1: ({ children }) => <h1 className="text-6xl">{children}</h1>,
          h2: ({ children }) => <h2 className="text-5xl">{children}</h2>,
          h3: ({ children }) => <h3 className="text-4xl">{children}</h3>,
          h4: ({ children }) => <h4 className="text-3xl">{children}</h4>,
          h5: ({ children }) => <h5 className="text-2xl">{children}</h5>,
          h6: ({ children }) => <h6 className="text-xl">{children}</h6>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 pl-4 border-l-grey">
              {children}
            </blockquote>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc ml-4">{children}</ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal ml-4">{children}</ol>
          ),
          checkmarks: ({ children }) => (
            <ol className="m-auto text-lg">{children}</ol>
          ),
        },
      }}
    />
  );
};

export default PortableParser;
