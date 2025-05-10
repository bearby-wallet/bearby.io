'use client';
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { Highlight, themes } from "prism-react-renderer";

interface DocsContentProps {
  content: MDXRemoteSerializeResult;
}

const DocsContent = ({ content }: DocsContentProps) => {
  return (
    <div className="prose prose-invert max-w-none">
      <MDXRemote
        {...content}
        components={{
          code: ({ children, className, ...props }) => {
            const code = children?.toString().trim() || "";
            const language = className?.match(/language-(\w+)/)?.[1] || "jsx";
            return (
              <CodeBlock code={code} language={language} {...props} />
            );
          },
          table: ({ children, ...props }) => (
            <table className="table-auto border-collapse border border-gray-600" {...props}>
              {children}
            </table>
          ),
          thead: ({ children, ...props }) => (
            <thead className="bg-gray-800" {...props}>
              {children}
            </thead>
          ),
          tbody: ({ children, ...props }) => (
            <tbody {...props}>
              {children}
            </tbody>
          ),
          tr: ({ children, ...props }) => (
            <tr className="border border-gray-600" {...props}>
              {children}
            </tr>
          ),
          th: ({ children, ...props }) => (
            <th className="border border-gray-600 px-4 py-2" {...props}>
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="border border-gray-600 px-4 py-2" {...props}>
              {children}
            </td>
          ),
          div: ({ children, ...props }) => (
            <div {...props}>
              {children}
            </div>
          ),
        }}
      />
    </div>
  );
};

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div style={{ position: "relative" }}>
      <Highlight theme={themes.dracula} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <button
        onClick={handleCopy}
        disabled={copied}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          padding: "4px 8px",
          background: copied ? "#28a745" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: copied ? "default" : "pointer",
        }}
        className="prism-copy-button"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default DocsContent;
