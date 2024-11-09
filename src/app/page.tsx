"use client";
import { DropZone } from "@/components/DropZone/DropZone";
import { useState, useEffect } from "react";
import { ImgInfo } from "@/components";
import { GenerateButton } from "@/components/GenerateButton/GenerateButton";
import { Settings } from "@/components/Settings/Settings";
import { GeneratedAltJson } from "./index.d";

export default function Home() {
  const [files, setFiles] = useState<ImgInfo[]>([]);
  const [generatedAltJson, setGeneratedAltJson] = useState<GeneratedAltJson | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  useEffect(() => {
    console.log(generatedAltJson);
  }, [generatedAltJson]);

  return (
    <main>
      <h1>img generator</h1>
      <Settings />
      <DropZone
        files={files}
        setFiles={setFiles}
        isGenerating={isGenerating}
      />
      <GenerateButton
        files={files}
        setGeneratedAltJson={setGeneratedAltJson}
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}
      />
    </main>
  );
}
