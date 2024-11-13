import { generateImgAltProps } from "./index.d";
import { GeneratedAltJson } from "@/app/index.d";

export const generateImgAlt: generateImgAltProps = async (
  files,
  setGeneratedAltJson,
  setError,
  setIsGenerating
) => {
  setIsGenerating(true);
  const base64Files: string[] = await Promise.all(
    files.map(async (imgInfo) => {
      const file = imgInfo.file;
      if (file instanceof Blob) {
        const reader = new FileReader();
        return new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      } else {
        throw new TypeError("ファイルがBlob型ではありません");
      }
    })
  );

  const json = await fetch("/api/generateAlt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ files: base64Files }),
  });

  if (!json.ok) {
    const errorText = await json.text();
    setError(`APIリクエストに失敗しました: ${errorText}`);
  }

  const jsonData: GeneratedAltJson = await json.json();
  setGeneratedAltJson(jsonData);
  setIsGenerating(false);
  
  setTimeout(() => {
    document.getElementById("generated-img-tag-list")?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};
