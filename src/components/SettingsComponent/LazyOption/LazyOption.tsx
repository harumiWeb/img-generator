import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SettingsProps } from "../index.d";
import { ToolTip } from "@/components/ToolTip/ToolTip";
export function LazyOption({ settings, setSettings }: SettingsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="auto"
        className="text-md font-bold text-blue-600 tracking-wider flex items-center gap-2"
      >
        loading属性
        <ToolTip text="loading属性は画像の読み込み方法を指定します。" />
      </Label>
      <RadioGroup
        value={settings.loading}
        className="flex gap-4"
        onValueChange={(value) => setSettings({ ...settings, loading: value })}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="auto"
            id="auto"
            checked={settings.loading === "auto"}
            className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.loading === "auto"
                ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2"
                : ""
            }`}
          />
          <Label htmlFor="auto" className={`text-md tracking-wide ${settings.loading === "auto" ? "text-blue-600" : ""}`}>
            auto
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="lazy"
            id="lazy"
            checked={settings.loading === "lazy"}
            className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.loading === "lazy" ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2" : ""
            }`}
          />
          <Label htmlFor="lazy" className={`text-md tracking-wide ${settings.loading === "lazy" ? "text-blue-600" : ""}`}>
            lazy
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="eager"
            id="eager"
            checked={settings.loading === "eager"}
            className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
              settings.loading === "eager" ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2" : ""
            }`}
          />
          <Label htmlFor="eager" className={`text-md tracking-wide ${settings.loading === "eager" ? "text-blue-600" : ""}`}>
            eager
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
