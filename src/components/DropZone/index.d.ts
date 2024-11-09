import { ImgInfo } from "@/components";

export interface DropZoneProps {
  files: ImgInfo[];
  setFiles: React.Dispatch<React.SetStateAction<ImgInfo[]>>;
  isGenerating: boolean;
}

export interface DeleteFile {
  (index: number): void;
}

export interface OnDrop {
  (acceptedFiles: File[]): void;
}

