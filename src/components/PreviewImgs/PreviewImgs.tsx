import { PreviewImg } from "@/components/PreviewImg/PreviewImg";
import { PreviewImgsProps } from "./index.d";

export function PreviewImgs({ files, deleteFile }: PreviewImgsProps) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {files.map((file, index) => (
        <PreviewImg
          file={file}
          key={`${file.file.name}-${file.file.lastModified}`}
          deleteFile={deleteFile}
          index={index}
        />
      ))}
    </ul>
  );
}
