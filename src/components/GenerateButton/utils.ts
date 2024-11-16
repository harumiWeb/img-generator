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

  const response = await fetch("/api/generateAlt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ files: base64Files }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(response);
    setError(`APIリクエストに失敗しました: ${errorText}`);
    return;
  }

  const jsonData: GeneratedAltJson = await response.json();
  setGeneratedAltJson(jsonData);
  setIsGenerating(false);
  
  setTimeout(() => {
    document.getElementById("generated-img-tag-list")?.scrollIntoView({
      behavior: "smooth",
    });
  }, 100);
};
