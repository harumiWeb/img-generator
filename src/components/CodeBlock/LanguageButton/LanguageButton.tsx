import { LanguageButtonProps } from "./index.d";

export function LanguageButton({
  languageName,
  language,
  setLanguage,
}: LanguageButtonProps) {
  return (
    <button
      id={languageName}
      role="tab"
      aria-selected={language === languageName}
      aria-controls={`${languageName}Tab`}
      tabIndex={language === languageName ? -1 : 0}
      type="button"
      className={`focus:outline text-md font-medium text-gray-300 font-mono px-4 pt-1 pb-2  min-w-20 w-fit rounded-md ${
        language !== languageName ? "bg-gray-600" : "bg-[rgb(29,31,33)]"
      }`}
      onClick={() => language !== languageName && setLanguage(languageName)}
    >
      {languageName}
    </button>
  );
}
