export interface HandleDelete {
  (event: React.MouseEvent): void;
}

export interface PreviewImgProps {
  file: ImgInfo;
  deleteFile: DeleteFile;
  index: number;
}

export interface CheckDuplicateFiles {
  (files: ImgInfo[], acceptedFiles: File[]): boolean;
}
