import { Settings } from "@/types/settings";
import { ImgInfo } from "..";

export interface CodeBlockProps {
  settings: Settings;
  selectedAltText: string;
  file: ImgInfo;
}
