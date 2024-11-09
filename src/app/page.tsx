"use client";
import { DropZone } from "@/components/DropZone/DropZone";
import { useState, useEffect } from "react";
import { ImgInfo } from "@/components";
import { GenerateButton } from "@/components/GenerateButton/GenerateButton";
import { Settings } from "@/components/SettingsComponent/Settings";
import { GeneratedAltJson, SettingsType } from "./index.d";

export default function Home() {
  const [files, setFiles] = useState<ImgInfo[]>([]);
  const [generatedAltJson, setGeneratedAltJson] =
    useState<GeneratedAltJson | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsType>({
    src: "",
    loading: "lazy",
    fetchPriority: "auto",
    decoding: "auto",
  });

  useEffect(() => {
    console.log(generatedAltJson);
  }, [generatedAltJson]);

  return (
    <main>
      <h1>img generator</h1>
      <div className="flex flex-col mx-auto justify-center items-center gap-4 max-w-2xl">
        <Settings settings={settings} setSettings={setSettings} />
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
      </div>
    </main>
  );
}
