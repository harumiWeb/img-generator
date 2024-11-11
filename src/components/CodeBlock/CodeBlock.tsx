import { CodeBlockProps } from "./index.d";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";

export function CodeBlock({ settings, selectedAltText, file }: CodeBlockProps) {
  return (
    <div>
      <SyntaxHighlighter
        language="html"
        style={atomDark}
        wrapLines={true}
        lineProps={{ style: { whiteSpace: "pre-wrap", wordBreak: "break-all" } }}
      >
        {`<img src="${settings.src}/${file.file.name}" width="${
          file.width
        }" height="${file.height}" loading="${settings.loading}"${
          settings.fetchPriority !== "auto"
            ? ` fetchpriority="${settings.fetchPriority}"`
            : ""
        }${
          settings.decoding !== "auto" ? ` decoding="${settings.decoding}"` : ""
        } alt="${selectedAltText}"/>`}
      </SyntaxHighlighter>
    </div>
  );
}
