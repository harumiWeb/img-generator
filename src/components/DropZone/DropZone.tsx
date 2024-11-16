"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PreviewImgs } from "@/components/PreviewImgs/PreviewImgs";
import { DeleteFile, OnDrop, DropZoneProps } from "./index.d";
import { checkDuplicateFiles } from "./utils";
import { SyncLoader } from "react-spinners";

export function DropZone({
  files,
  setFiles,
  isGenerating,
}: DropZoneProps) {
  const [isFileOver, setIsFileOver] = useState(false);

  const deleteFile: DeleteFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const onDrop: OnDrop = useCallback(
    (acceptedFiles: File[]) => {
      setIsFileOver(false);

      if (files.length + acceptedFiles.length > 3) {
        setIsFileOver(true);
        return;
      }

      if (checkDuplicateFiles(files, acceptedFiles)) {
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
      className={`w-full border-2 border-dashed border-gray-300 rounded-md p-4 min-h-[200px] mx-auto cursor-pointer flex items-center justify-between flex-col gap-4 relative hover:bg-gray-200 transition-colors duration-300 ${isGenerating ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
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
              <span className="text-sm text-gray-500 leading-[2] block pt-4">
                ※ 対応ファイル形式：jpg, png, webp<br />
                ※ 対応ファイルサイズ：5MBまで<br />
                ※ 画像選択は一度に3枚まで対応しています
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
              ※ 画像は一度に3枚までしか対応していません
            </span>
          ) : (
            <>残り {3 - files.length} 枚</>
          )}
        </p>
      </div>
      {isGenerating && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-70 z-10 flex items-center justify-center" >
          <SyncLoader color="#fff" size={20} />
        </div>
      )}
    </div>
  );
}
