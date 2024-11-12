import { Settings } from "@/types/settings";
import { ImgInfo } from "@/types/imgInfo";

export interface CopyButtonProps {
  settings: Settings;
  file: ImgInfo;
  selectedAltText: string;
  tagName: string;
}
