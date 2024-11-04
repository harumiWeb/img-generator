import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DropZone } from "./DropZone";
import "@testing-library/jest-dom/vitest";

test("DropZone renders correctly", () => {
  render(<DropZone />);
  expect(
    screen.getByText(/画像をドラッグアンドドロップするか/i)
  ).toBeInTheDocument();
});
