import { ImgInfo } from "@/components";
import { CheckDuplicateFiles } from "@/components/PreviewImg/index.d";

export const checkDuplicateFiles: CheckDuplicateFiles = (
  files: ImgInfo[],
  acceptedFiles: File[]
) => {
  // 画像の重複チェック
  const fileNames = files.map((file) => file.file.name);
  const duplicateFiles = acceptedFiles.filter((file) =>
    fileNames.includes(file.name)
  );
  if (duplicateFiles.length > 0) {
    alert("同じ画像は追加できません");
    return true;
  }
  return false;
};
