import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SettingsProps } from "../index.d";
import { ToolTip } from "@/components/ToolTip/ToolTip";
export function LazyOption({ settings, setSettings }: SettingsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="auto"
        className="text-md font-bold text-blue-600 flex items-center gap-2"
      >
        loading属性
        <ToolTip text="loading属性は画像の読み込み方法を指定します。" />
      </Label>
      <RadioGroup
        defaultValue={settings.loading}
        className="flex gap-4"
        onValueChange={(value) => setSettings({ ...settings, loading: value })}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="auto" id="auto" />
          <Label htmlFor="auto" className="text-md">
            auto
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="lazy" id="lazy" />
          <Label htmlFor="lazy" className="text-md">
            lazy
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="eager" id="eager" />
          <Label htmlFor="eager" className="text-md">
            eager
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
