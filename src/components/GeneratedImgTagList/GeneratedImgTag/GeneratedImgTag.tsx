import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@/components/ui/label";
import { GeneratedImgTagProps } from "./";
import { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export function GeneratedImgTag({ alt, settings, file }: GeneratedImgTagProps) {
  const [selectedAltText, setSelectedAltText] = useState(alt?.altText1);
  if (!alt) return null;
  if (!selectedAltText) return null;
  return (
    <div>
      <div className="flex gap-4">
        <div className="grid place-items-center border-2 border-gray-200 p-2 rounded-md">
          <img
            src={URL.createObjectURL(file.file)}
            alt={file.file.name}
            width={file.width}
            height={file.height}
            className="max-w-[150px] h-auto "
          />
        </div>
        <div className="p-2">
          <p className="text-md text-blue-600 tracking-wide">altテキストを選択してください</p>
          <RadioGroup
            defaultValue={selectedAltText}
            className="flex flex-col gap-4 mt-3"
            onValueChange={(value) => {
              setSelectedAltText(value);
            }}
          >
            {Object.entries(alt).map(([key, value], index) => {
              return (
                <div key={key} className="flex items-center gap-2">
                  <RadioGroupItem
                    value={value}
                    id={`alt-${index + 1}`}
                    className={`w-6 h-6 border-2 border-blue-600 rounded-full relative flex-shrink-0 ${
                      selectedAltText === value
                        ? "[&::before]:content-[''] [&::before]:absolute [&::before]:w-3 [&::before]:h-3 [&::before]:bg-blue-600 [&::before]:rounded-full [&::before]:top-1/2 [&::before]:left-1/2 [&::before]:-translate-x-1/2 [&::before]:-translate-y-1/2"
                        : ""
                    }`}
                  />
                  <Label
                    htmlFor={`alt-${index + 1}`}
                    className="leading-5 tracking-wider"
                  >
                    {String(value)}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      </div>
      <CodeBlock settings={settings} selectedAltText={selectedAltText} />
    </div>
  );
}
