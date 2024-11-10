import { ImgInfo } from "..";
import { Settings, altTexts } from "@/app/index.d";

export interface GeneratedImgTagListProps {
  altTexts: altTexts.altTexts | null;
  settings: Settings;
  files: ImgInfo[];
}
