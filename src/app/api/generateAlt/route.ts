import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';

export const runtime = 'edge';

interface inlineData {
  base64: string;
  mimeType: string;
}

interface fileToGenerativePartProps {
  (file: inlineData): {
    inlineData: {
      data: string;
      mimeType: string;
    };
  };
}

// Zodスキーマの定義
const base64Schema = z.string().regex(/^data:(.+);base64,(.+)$/, '無効なbase64形式');
const filesSchema = z.array(base64Schema);

export async function POST(req: NextRequest) {
  const { files } = await req.json() as { files: string[] };

  // 入力の検証
  const validationResult = filesSchema.safeParse(files);
  if (!validationResult.success) {
    return NextResponse.json({ error: validationResult.error.errors }, { status: 400 });
  }

  const validFiles: inlineData[] = [];
  const maxFileSize = 5 * 1024 * 1024; // 最大ファイルサイズ 5MB

  for (const base64 of files) {
    const matches = base64.match(/^data:(.+);base64,(.+)$/);
    if (matches) {
      const mimeType = matches[1];
      const data = matches[2];

      // base64データのサイズを確認
      const fileSize = Buffer.from(data, 'base64').length;
      if (fileSize <= maxFileSize) {
        validFiles.push({
          base64: data,
          mimeType: mimeType,
        });
      } else {
        return NextResponse.json({ error: `ファイルサイズが大きすぎます: ${fileSize} bytes` }, { status: 400 });
      }
    }
  }

  // validFilesが空の場合はエラーを返す
  if (validFiles.length === 0) {
    return NextResponse.json({ error: '有効なファイルがありません' }, { status: 400 });
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { responseMimeType: "application/json" },
  });

  const inlineData: inlineData[] = validFiles;

  const fileToGenerativePart: fileToGenerativePartProps = (file) => {
    return {
      inlineData: {
        data: file.base64,
        mimeType: file.mimeType,
      },
    };
  };

  const prompt = `
  あなたは画像のalt属性を生成してJSONを返すAPIです。
  画像の説明を日本語で生成してください。
  画像ごとに3つずつaltテキスト候補を生成してください。
  JSONの形式は以下の通りです。"必ず以下のJSON形式で返してください。"
  {
    "altTexts": {
      ${files.map(
        (file, index) =>
          `"img${index + 1}": {
        "altText1": "altテキスト1",
        "altText2": "altテキスト2",
        "altText3": "altテキスト3"
      }`
      )}
    }
  }
  `;

  try {
    const generatedContent = await model.generateContent([prompt, ...inlineData.map(fileToGenerativePart)]);
    
    // generatedContentの内容を確認
    if (!generatedContent || !generatedContent.response) {
      throw new Error("生成されたコンテンツが無効です");
    }

    const json = JSON.parse(generatedContent.response.text());
    return NextResponse.json(json);
  } catch (error) {
    // 503エラーの特定
    if (error instanceof Error && error.message.includes("503")) {
      console.error("503エラーが発生しました:", error.message);
      return NextResponse.json({ error: 'サービスが一時的に利用できません。後ほど再試行してください。' }, { status: 503 });
    }

    // errorがError型であることを確認
    if (error instanceof Error) {
      console.error("エラー詳細:", error.message); // エラーメッセージを出力
      return NextResponse.json({ error: 'APIリクエストに失敗しました', details: error.message }, { status: 500 });
    } else {
      console.error("不明なエラー:", error); // 不明なエラーを出力
      return NextResponse.json({ error: 'APIリクエストに失敗しました', details: '不明なエラーが発生しました' }, { status: 500 });
    }
  }
}