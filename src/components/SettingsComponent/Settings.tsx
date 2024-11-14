import { SrcOption } from "./SrcOption/SrcOption";
import { LazyOption } from "./LazyOption/LazyOption";
import { FetchPriority } from "./FetchPriority/FetchPriority";
import { DecodingOption } from "./Decoding/DecodingOption";
import { SettingsProps } from "./index.d";
import { SettingIcon } from "./settingIcon";
export function Settings({ settings, setSettings }: SettingsProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <SettingIcon size="26" className="translate-y-[1px]" />
        <h2 className="text-xl font-bold">imgタグ属性設定</h2>
      </div>
      <div className="flex flex-col gap-5 mt-2">
        <SrcOption settings={settings} setSettings={setSettings} />
        <LazyOption settings={settings} setSettings={setSettings} />
        <FetchPriority settings={settings} setSettings={setSettings} />
        <DecodingOption settings={settings} setSettings={setSettings} />
      </div>
    </div>
  );
}
