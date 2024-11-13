import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SettingsProps } from "../index.d";
import { ToolTip } from "@/components/ToolTip/ToolTip";

export function FetchPriority({ settings, setSettings }: SettingsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="fetchPriority"
        className="text-md font-bold text-blue-600 tracking-wider flex items-center gap-2"
      >
        fetchpriority属性
        <ToolTip text="fetchpriority属性は画像の読込優先度を指定します。" />
      </Label>
      <RadioGroup
        value={settings.fetchPriority}
        className="flex gap-4"
        onValueChange={(value) =>
          setSettings({ ...settings, fetchPriority: value })
        }
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="auto" id="fetchpriority-auto" className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.fetchPriority === "auto" ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2" : ""
            }`}
            checked={settings.fetchPriority === "auto"}
          />
          <Label htmlFor="fetchpriority-auto" className={`text-md tracking-wide ${settings.fetchPriority === "auto" ? "text-blue-600" : ""}`}>
            auto
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="high" id="fetchpriority-high" className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.fetchPriority === "high" ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2" : ""
            }`}
            checked={settings.fetchPriority === "high"}
          />
          <Label htmlFor="fetchpriority-high" className={`text-md tracking-wide ${settings.fetchPriority === "high" ? "text-blue-600" : ""}`}>
            high
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="low" id="fetchpriority-low" className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.fetchPriority === "low" ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2" : ""
            }`}
            checked={settings.fetchPriority === "low"}
          />
          <Label htmlFor="fetchpriority-low" className={`text-md tracking-wide ${settings.fetchPriority === "low" ? "text-blue-600" : ""}`}>
            low
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
