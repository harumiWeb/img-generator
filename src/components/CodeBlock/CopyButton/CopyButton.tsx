import { CopyOutlined } from "./CopyIcon";
import { CopyButtonProps } from "./index.d";
import { useState } from "react";
import { CheckOutlined } from "./CopiedIcon";

export function CopyButton({
  settings,
  file,
  selectedAltText,
  tagName,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    const text = `<${tagName} src="${settings.src}/${file.file.name}" width="${file.width}" height="${file.height}" loading="${settings.loading}"${
      settings.fetchPriority !== "auto"
        ? ` fetchpriority="${settings.fetchPriority}"`
        : ""
    }${
      settings.decoding !== "auto" ? ` decoding="${settings.decoding}"` : ""
    } alt="${selectedAltText}"/>`;
    
    try {
      await navigator.clipboard.writeText(text); // クリップボードにコピー
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button
      type="button"
      className="absolute top-2 right-2 border border-gray-300 rounded-md p-1 hover:border-gray-500 transition-colors duration-200 group"
      onClick={handleCopy} // ボタンのクリックでhandleCopyを呼び出す
    >
      {copied ? (
        <CheckOutlined size="24" className="fill-gray-300 group-hover:fill-gray-500 transition-colors duration-200" />
      ) : (
        <CopyOutlined size="24" className="fill-gray-300 group-hover:fill-gray-500 transition-colors duration-200" />
      )}
    </button>
  );
}
