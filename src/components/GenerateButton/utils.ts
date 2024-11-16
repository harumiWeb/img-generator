import { generateImgAltProps } from "./index.d";
import { GeneratedAltJson } from "@/app/index.d";

export const generateImgAlt: generateImgAltProps = async (
  files,
  setGeneratedAltJson,
  setError,
  setIsGenerating
) => {
  setIsGenerating(true);
  
  // 画像を圧縮してbase64形式で取得
  const base64Files: string[] = await Promise.all(
    files.map(async (imgInfo) => {
      const file = imgInfo.file;
      if (file instanceof Blob) {
        const reader = new FileReader();
        return new Promise<string>((resolve, reject) => {
          reader.onloadend = async () => {
            const img = new Image();
            img.src = reader.result as string;

            img.onload = () => {
              // canvasを作成
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');

              // 圧縮するためのサイズを設定（例: 800x600）
              const maxWidth = 800;
              const maxHeight = 600;
              let width = img.width;
              let height = img.height;

              // アスペクト比を保ちながらサイズを調整
              if (width > height) {
                if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
                }
              } else {
                if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
                }
              }

              // canvasのサイズを設定
              canvas.width = width;
              canvas.height = height;

              // 画像をcanvasに描画
              ctx?.drawImage(img, 0, 0, width, height);

              // 圧縮した画像をbase64形式で取得（品質を指定）
              const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7); // 0.7は圧縮率（0.0〜1.0）

              resolve(compressedBase64);
            };

            img.onerror = (error) => {
              reject(new Error("画像の読み込みに失敗しました"));
            };
          };

          reader.readAsDataURL(file);
        });
      } else {
        throw new TypeError("ファイルがBlob型ではありません");
      }
    })
  );

  // APIに圧縮した画像を送信
  const response = await fetch("/api/generateAlt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ files: base64Files }), // 圧縮した画像を含める
  });

  // APIレスポンスの処理
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`APIリクエストに失敗しました: ${errorText}`);

    try {
      const errorJson = await response.json();
      console.error(`エラー詳細: ${JSON.stringify(errorJson)}`);
    } catch (e) {
      console.error("JSONパースに失敗しました:", e);
    }

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
