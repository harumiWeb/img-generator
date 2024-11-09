export interface GenerateButtonProps {
  files: ImgInfo[];
  setGeneratedAltJson: (json: GeneratedAltJson) => void;
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;
}

export interface generateImgAltProps {
  (
    files: ImgInfo[],
    setGeneratedAltJson: (json: GeneratedAltJson) => void,
    setError: (error: string | null) => void,
    setIsGenerating: (isGenerating: boolean) => void
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
