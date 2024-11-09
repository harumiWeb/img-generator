"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PreviewImgs } from "@/components/PreviewImgs/PreviewImgs";
import { DeleteFile, OnDrop, DropZoneProps } from "./index.d";
import { checkDuplicateFiles } from "./utils";

export function DropZone({ files, setFiles }: DropZoneProps) {
  const [isFileOver, setIsFileOver] = useState(false);

  const deleteFile: DeleteFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const onDrop: OnDrop = useCallback(
    (acceptedFiles: File[]) => {
      setIsFileOver(false);

      if (files.length + acceptedFiles.length > 5) {
        setIsFileOver(true);
        return;
      }

      if (checkDuplicateFiles(files,acceptedFiles)) {
        return;
      }

      acceptedFiles.forEach((file) => {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
          setFiles((prev) => [
            ...prev,
            { file, width: img.width, height: img.height },
          ]);
        };
      });
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "image/jpg": [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-md p-4 max-w-2xl min-h-[200px] mx-auto cursor-pointer flex items-center justify-between flex-col gap-4"
    >
      <label htmlFor="dropzone-input" className="sr-only">
        ファイルを選択
      </label>
      <input {...getInputProps()} id="dropzone-input" />
      {files.length === 0 && (
        <div className="text-center pt-8">
          {isDragActive ? (
            <p>画像をドラッグアンドドロップしてください</p>
          ) : (
            <p>
              画像をドラッグアンドドロップするか、
              <br />
              クリックしてファイルを選択してください
              <br />
              <span className="text-sm text-gray-500 leading-[2]">
                ※ 画像は一度に5枚まで対応しています
              </span>
            </p>
          )}
        </div>
      )}
      {/* 受け取った画像をプレビュー表示 */}
      {files.length > 0 && (
        <PreviewImgs files={files} deleteFile={deleteFile} />
      )}
      <div className="w-full text-end">
        <p>
          {isFileOver ? (
            <span className="text-red-500">
              ※ 画像は一度に5枚までしか対応していません
            </span>
          ) : (
            <>残り {5 - files.length} 枚</>
          )}
        </p>
      </div>
    </div>
  );
}
