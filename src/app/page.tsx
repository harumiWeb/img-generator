"use client";
import { DropZone } from "@/components/DropZone/DropZone";
import { useState, useEffect } from "react";
import { ImgInfo } from "@/components";
import { GenerateButton } from "@/components/GenerateButton/GenerateButton";
import { Settings } from "@/components/SettingsComponent/Settings";
import { altTexts, SettingsType } from "./index.d";
import { GeneratedImgTagList } from "@/components/GeneratedImgTagList/GeneratedImgTagList";
import SNSShare from "@/components/SnsShare/SnsShare";
import FV from "@/components/FV/FV";

export const runtime = 'edge';

export default function Home() {
  const [files, setFiles] = useState<ImgInfo[]>([]);
  const [generatedAltJson, setGeneratedAltJson] = useState<altTexts | null>(
    null
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [settings, setSettings] = useState<SettingsType>({
    src: "",
    loading: "auto",
    fetchPriority: "auto",
    decoding: "auto",
  });
  const [copyFiles, setCopyFiles] = useState<ImgInfo[]>(structuredClone(files));
  const [copySettings, setCopySettings] = useState<SettingsType>(
    structuredClone(settings)
  );

  useEffect(() => {
    setCopyFiles(structuredClone(files));
    setCopySettings(structuredClone(settings));
  }, [generatedAltJson]);

  useEffect(() => {
    // ローカルストレージから設定を読み込む
    const savedSettings = localStorage.getItem("settings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // settingsが変更されたときにローカルストレージに保存する
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <>
      <div className="flex flex-col mx-auto items-center gap-4 max-w-2xl min-h-[79vh] px-4">
        <FV />
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
        <GeneratedImgTagList
          altTexts={generatedAltJson?.altTexts || { altTexts: {} }}
          settings={copySettings}
          files={copyFiles}
        />
      </div>
      <SNSShare url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title="ImageX" />
    </>
  );
}
