export interface GenerateButtonProps {
  files: ImgInfo[];
  setGeneratedAltJson: (json: GeneratedAltJson) => void;
}

export interface generateImgAltProps {
  (
    files: ImgInfo[],
    setGeneratedAltJson: (json: GeneratedAltJson) => void
  ): Promise<void>;
}

export interface inlineData {
  base64: string;
  mimeType: string;
}

export interface fileToGenerativePartProps {
  (file: inlineData): {
    inlineData: {
      data: string;
      mimeType: string;
    };
  };
}
