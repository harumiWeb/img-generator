import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DropZone } from "./DropZone";
import "@testing-library/jest-dom/vitest";
import { DropZoneProps } from "./index.d";

test("DropZone renders correctly", () => {
  const props: DropZoneProps = {
    files: [],
    setFiles: () => {},
  };
  render(<DropZone {...props} />);
  expect(
    screen.getByText(/画像をドラッグアンドドロップするか/i)
  ).toBeInTheDocument();
});
