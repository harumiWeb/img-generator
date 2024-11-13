import { Dispatch, SetStateAction } from "react";
import { SettingsType } from "@/app/index.d";

export interface SettingsProps {
  settings: SettingsType;
  setSettings: Dispatch<SetStateAction<SettingsType>>;
}
