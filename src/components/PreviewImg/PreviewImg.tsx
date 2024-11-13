import { useCallback } from "react";
import { HandleDelete, PreviewImgProps } from "./index.d";

export function PreviewImg({ file, deleteFile, index }: PreviewImgProps) {
  const handleDelete: HandleDelete = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      deleteFile(index);
    },
    [deleteFile, index]
  );

  return (
    <li className="p-2 border-2 border-gray-300 rounded-md flex flex-col gap-2">
      <p className="text-sm break-all">{file.file.name}</p>
      <img
        src={URL.createObjectURL(file.file)}
        alt={file.file.name}
        width={file.width}
        height={file.height}
      />
      <p className="text-sm text-gray-800 mt-auto">{`${file.width}px ✕ ${file.height}px`}</p>
      <button
        className="bg-red-500 text-white font-bold px-2 py-1 rounded-md mt-2 hover:bg-red-600 transition-colors duration-200"
        onClick={handleDelete}
      >
        削除
      </button>
    </li>
  );
}
