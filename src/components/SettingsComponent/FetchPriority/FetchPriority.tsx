import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SettingsProps } from "../index.d";
import { ToolTip } from "@/components/ToolTip/ToolTip";

export function FetchPriority({ settings, setSettings }: SettingsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="fetchPriority"
        className="text-md font-bold text-blue-600 flex items-center gap-2"
      >
        fetchpriority属性
        <ToolTip text="fetchpriority属性は画像の読込優先度を指定します。" />
      </Label>
      <RadioGroup
        defaultValue={settings.fetchPriority}
        className="flex gap-4"
        onValueChange={(value) =>
          setSettings({ ...settings, fetchPriority: value })
        }
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="auto" id="fetchpriority-auto" />
          <Label htmlFor="fetchpriority-auto" className="text-md">
            auto
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="high" id="fetchpriority-high" />
          <Label htmlFor="fetchpriority-high" className="text-md">
            high
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="low" id="fetchpriority-low" />
          <Label htmlFor="fetchpriority-low" className="text-md">
            low
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
