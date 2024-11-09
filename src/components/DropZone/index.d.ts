import { ImgInfo } from "@/components";

export interface DropZoneProps {
  files: ImgInfo[];
  setFiles: React.Dispatch<React.SetStateAction<ImgInfo[]>>;
}

export interface DeleteFile {
  (index: number): void;
}

export interface OnDrop {
  (acceptedFiles: File[]): void;
}

