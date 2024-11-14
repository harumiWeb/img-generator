"use client";
import { DropZone } from "@/components/DropZone/DropZone";
import { useState, useEffect } from "react";
import { ImgInfo } from "@/components";
import { GenerateButton } from "@/components/GenerateButton/GenerateButton";
import { Settings } from "@/components/SettingsComponent/Settings";
import { altTexts, SettingsType } from "./index.d";
import { GeneratedImgTagList } from "@/components/GeneratedImgTagList/GeneratedImgTagList";
import SNSShare from "@/components/SnsShare/SnsShare";

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
      <header>
        <h1 className="block py-4">
          <img
            src="/logo.png"
            alt="ImageX"
            width={400}
            height={174}
            className="mx-auto"
          />
        </h1>
      </header>
      <main>
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
          <GeneratedImgTagList
            altTexts={generatedAltJson?.altTexts || { altTexts: {} }}
            settings={copySettings}
            files={copyFiles}
          />
        </div>
        <SNSShare url={window.location.href} title="ImageX" />
      </main>
      <footer className="text-center text-md py-4 text-gray-200 bg-gray-700">
        <small>{`© ${new Date().getFullYear()} ImageX`}</small>
      </footer>
    </>
  );
}
