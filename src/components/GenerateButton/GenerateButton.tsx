import { GenerateButtonProps } from "./index.d";
import { generateImgAlt } from "./utils";

export function GenerateButton({ files, setGeneratedAltJson }: GenerateButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white text-lg font-bold py-2 px-8 rounded-md mx-auto block mt-4 hover:bg-blue-600 transition-colors duration-200"
      onClick={() => generateImgAlt(files, setGeneratedAltJson)}
    >
      imgタグを生成する
    </button>
  );
}
