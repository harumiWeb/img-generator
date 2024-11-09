import { QuestionCircleOutlined } from "./Question";
import { useState } from "react";

export function ToolTip({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="flex items-center justify-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <QuestionCircleOutlined size={20} className="fill-gray-500" />
      </button>
      {isOpen && (
        <p className="text-sm text-gray-500">{text}</p>
      )}
    </>
  );
}
