import { GeneratedImgTagListProps } from "./index.d";
import { GeneratedImgTag } from "./GeneratedImgTag/GeneratedImgTag";

export function GeneratedImgTagList({
  altTexts,
  settings,
  files,
}: GeneratedImgTagListProps) {

  const isEmpty = altTexts.altTexts;
  if (!altTexts || isEmpty) return null;

  return (
    <ul id="generated-img-tag-list" className="flex flex-col gap-4 w-full">
      {Object.entries(altTexts).map(([key, value], index) => {
        if (!files[index]) return null;
        return (
          <li key={key + new Date().getTime()}>
            <GeneratedImgTag
              alt={value as { altText1: string; altText2: string; altText3: string } | null}
              settings={settings}
              file={files[index]}
            />
          </li>
        );
      })}
    </ul>
  );
}
