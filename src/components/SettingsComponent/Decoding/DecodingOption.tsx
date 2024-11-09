import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SettingsProps } from "../index.d";
import { ToolTip } from "@/components/ToolTip/ToolTip";

export function DecodingOption({ settings, setSettings }: SettingsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor="decoding"
        className="text-md font-bold text-blue-600 flex items-center gap-2"
      >
        decoding属性
        <ToolTip text="decoding属性は画像のデコード方法を指定します。" />
      </Label>
      <RadioGroup
        defaultValue={settings.decoding}
        className="flex gap-4"
        onValueChange={(value) =>
          setSettings({ ...settings, decoding: value })
        }
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="auto" id="decoding-auto" />
          <Label htmlFor="decoding-auto" className="text-md">
            auto
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sync" id="decoding-sync" />
          <Label htmlFor="decoding-sync" className="text-md">
            sync
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="async" id="decoding-async" />
          <Label htmlFor="decoding-async" className="text-md">
            async
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
