import { GeneratedImgTagListProps } from "./index.d";
import { GeneratedImgTag } from "./GeneratedImgTag/GeneratedImgTag";

export function GeneratedImgTagList({
  altTexts,
  settings,
  files,
}: GeneratedImgTagListProps) {

  const isEmpty = altTexts.altTexts;
  if (!altTexts || isEmpty) return null;

  const copyFiles = files.map((file) => file);
  const copySettings = settings;

  return (
    <ul className="flex flex-col gap-4 w-full">
      {Object.entries(altTexts).map(([key, value], index) => {
        if (!files[index]) return null;
        return (
          <li key={key}>
            <GeneratedImgTag
              alt={value as { altText1: string; altText2: string; altText3: string } | null}
              settings={copySettings}
              file={copyFiles[index]}
            />
          </li>
        );
      })}
    </ul>
  );
}
