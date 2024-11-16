import { CodeBlockProps } from "./index.d";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";
import { useState } from "react";
import { LanguageButton } from "./LanguageButton/LanguageButton";
import { CopyButton } from "./CopyButton/CopyButton";

export function CodeBlock({ settings, selectedAltText, file }: CodeBlockProps) {
  const [language, setLanguage] = useState<"html" | "next/image">("html");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      setLanguage((prev) => (prev === "html" ? "next/image" : "html"));
    } else if (event.key === "ArrowLeft") {
      setLanguage((prev) => (prev === "next/image" ? "html" : "next/image"));
    }
  };

  return (
    <div role="tab">
      <div
        onKeyDown={handleKeyDown}
        role="tablist"
        className="flex items-center translate-y-[14.5px] z-0 gap-[1px]"
      >
        <LanguageButton
          languageName="html"
          language={language}
          setLanguage={setLanguage}
        />
        <LanguageButton
          languageName="next/image"
          language={language}
          setLanguage={setLanguage}
        />
      </div>
      {/* html */}
      <div
        hidden={language !== "html"}
        role="tabpanel"
        tabIndex={-1}
        aria-labelledby="html"
        id="htmlTab"
        className="z-10 relative"
      >
        <CopyButton
          settings={settings}
          file={file}
          selectedAltText={selectedAltText}
          tagName="img"
        />
        <SyntaxHighlighter
          language="html"
          style={atomDark}
          wrapLines={true}
          lineProps={{
            style: {
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
              fontFamily: "monospace",
            },
          }}
          className="code-block"
        >
          {`<img src="${settings.src}/${file.file.name}" width="${
            file.width
          }" height="${file.height}"${
            settings.loading !== "auto"
              ? ` loading="${settings.loading}"`
              : ""
          }${
            settings.fetchPriority !== "auto"
              ? ` fetchpriority="${settings.fetchPriority}"`
              : ""
          }${
            settings.decoding !== "auto"
              ? ` decoding="${settings.decoding}"`
              : ""
          } alt="${selectedAltText}"/>`}
        </SyntaxHighlighter>
      </div>
      {/* next/image */}
      <div
        hidden={language !== "next/image"}
        role="tabpanel"
        tabIndex={-1}
        aria-labelledby="next/image"
        id="next/imageTab"
        className="z-10 relative"
      >
        <CopyButton
          settings={settings}
          file={file}
          selectedAltText={selectedAltText}
          tagName="Image"
        />
        <SyntaxHighlighter
          language="jsx"
          style={atomDark}
          wrapLines={true}
          lineProps={{
            style: {
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
              fontFamily: "monospace",
            },
          }}
        >
          {`<Image src="${settings.src}/${file.file.name}" width={${
            file.width
          }} height={${file.height}}${
            settings.loading !== "auto"
              ? ` loading="${settings.loading}"`
              : ""
          }${
            settings.fetchPriority !== "auto"
              ? ` fetchpriority="${settings.fetchPriority}"`
              : ""
          }${
            settings.decoding !== "auto"
              ? ` decoding="${settings.decoding}"`
              : ""
          } alt="${selectedAltText}"/>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
