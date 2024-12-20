import { SyncLoader } from "react-spinners";
import { GenerateButtonProps } from "./index.d";
import { generateImgAlt } from "./utils";
import { useState } from "react";

export function GenerateButton({
  files,
  setGeneratedAltJson,
  isGenerating,
  setIsGenerating,
}: GenerateButtonProps) {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-sm text-gray-500 pt-4 pb-6">
        <a href="/terms" className="underline text-blue-500 font-bold">利用規約</a>と<a href="/privacy" className="underline text-blue-500 font-bold">プライバシーポリシー</a>に同意の上でご利用ください。
      </p>
      <button
        className={`generate-button bg-blue-500 flex items-center justify-center gap-3 text-white text-lg font-bold py-2 px-8 rounded-md mx-auto hover:bg-blue-600 transition-colors duration-200 ${
          isGenerating ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => {
          generateImgAlt(files, setGeneratedAltJson, setError, setIsGenerating);
        }}
        disabled={isGenerating}
      >
        {isGenerating && <SyncLoader color="#fff" size={5} />}
        {isGenerating ? "生成中..." : "imgタグを生成する"}
      </button>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </div>
  );
}
