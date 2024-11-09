import { SrcOption } from "./SrcOption/SrcOption";
import { LazyOption } from "./LazyOption/LazyOption";
import { FetchPriority } from "./FetchPriority/FetchPriority";
import { DecodingOption } from "./Decoding/DecodingOption";
import { SettingsProps } from "./index.d";

export function Settings({ settings, setSettings }: SettingsProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-bold">imgタグ属性設定</h2>
      <div className="flex flex-col gap-5">
        <SrcOption settings={settings} setSettings={setSettings} />
        <LazyOption settings={settings} setSettings={setSettings} />
        <FetchPriority settings={settings} setSettings={setSettings} />
        <DecodingOption settings={settings} setSettings={setSettings} />
      </div>
    </div>
  );
}
