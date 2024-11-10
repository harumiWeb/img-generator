import { render, screen } from "@testing-library/react";
import { Settings } from "./Settings";
import { SettingsProps } from "./index.d";
import { expect, test } from "vitest";

test("Settings component renders correctly", () => {
  const props: SettingsProps = {
    settings: {},
    setSettings: () => {},
  };
  render(<Settings {...props} />);
  expect(screen.getByText(/imgタグ属性設定/i)).toBeInTheDocument();
});

test("Settings component renders SrcOption component", () => {
  const props: SettingsProps = {
    settings: {},
    setSettings: () => {},
  };
  render(<Settings {...props} />);
  const srcElements = screen.getAllByText(/src属性/i);
  expect(srcElements.length).toBeGreaterThan(0);
});

test("Settings component renders LazyOption component", () => {
  const props: SettingsProps = {
    settings: {},
    setSettings: () => {},
  };
  render(<Settings {...props} />);
  const lazyElements = screen.getAllByText(/loading属性/i);
  expect(lazyElements.length).toBeGreaterThan(0);
});

test("Settings component renders FetchPriority component", () => {
  const props: SettingsProps = {
    settings: {},
    setSettings: () => {},
  };
  render(<Settings {...props} />);
  const fetchPriorityElements = screen.getAllByText(/fetchpriority属性/i);
  expect(fetchPriorityElements.length).toBeGreaterThan(0);
});

test("Settings component renders DecodingOption component", () => {
  const props: SettingsProps = {
    settings: {},
    setSettings: () => {},
  };
  render(<Settings {...props} />);
  const decodingElements = screen.getAllByText(/decoding属性/i);
  expect(decodingElements.length).toBeGreaterThan(0);
});
