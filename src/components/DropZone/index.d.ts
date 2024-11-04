export interface DeleteFile {
  (index: number): void;
}

export interface OnDrop {
  (acceptedFiles: File[]): void;
}

