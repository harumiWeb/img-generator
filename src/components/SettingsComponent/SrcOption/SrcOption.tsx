import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SettingsProps } from "../index.d";
import { ToolTip } from "@/components/ToolTip/ToolTip";

export function SrcOption({ settings, setSettings }: SettingsProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="src" className="text-md font-bold text-blue-600 flex items-center gap-2">
        src属性
        <ToolTip text="src属性は画像ファイルまでのパスを指定します。" />
      </Label>
      <div className="flex items-center">
        <Input
          type="text"
          id="src"
          className="border-2 border-gray-300 rounded-md text-[16px] max-w-[300px]"
          placeholder="./src/images"
          value={settings.src}
          onChange={(e) => setSettings({ ...settings, src: e.target.value })}
        />
        <span>/sample.webp</span>
      </div>
    </div>
  );
}
