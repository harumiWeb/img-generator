import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SettingsProps } from "../index.d";
import { ToolTip } from "@/components/ToolTip/ToolTip";

export function DecodingOption({ settings, setSettings }: SettingsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="decoding"
        className="text-md font-bold text-blue-600 tracking-wider flex items-center gap-2"
      >
        decoding属性
        <ToolTip text="decoding属性は画像のデコード方法を指定します。" />
      </Label>
      <RadioGroup
        value={settings.decoding}
        className="flex gap-4"
        onValueChange={(value) =>
          setSettings({ ...settings, decoding: value })
        }
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="auto" id="decoding-auto" className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.decoding === "auto" ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2" : ""
            }`}
            checked={settings.decoding === "auto"}
          />
          <Label htmlFor="decoding-auto" className={`text-md tracking-wide ${settings.decoding === "auto" ? "text-blue-600" : ""}`}>
            auto
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sync" id="decoding-sync" className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.decoding === "sync" ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2" : ""
            }`}
            checked={settings.decoding === "sync"}
          />
          <Label htmlFor="decoding-sync" className={`text-md tracking-wide ${settings.decoding === "sync" ? "text-blue-600" : ""}`}>
            sync
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="async" id="decoding-async" className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.decoding === "async" ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2" : ""
            }`}
            checked={settings.decoding === "async"}
          />
          <Label htmlFor="decoding-async" className={`text-md tracking-wide ${settings.decoding === "async" ? "text-blue-600" : ""}`}>
            async
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
