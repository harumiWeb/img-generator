import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PreviewImgs } from "./PreviewImgs";
import { ImgInfo } from "@/components";

// URL.createObjectURL をモック
vi.stubGlobal('URL', {
  createObjectURL: vi.fn(() => 'mocked-url'),
  revokeObjectURL: vi.fn(),
});

describe("PreviewImgs", () => {
  const mockDeleteFile = vi.fn();
  const files: ImgInfo[] = [
    {
      file: new File(["image1.png"], "image1.png", { type: "image/png" }),
      width: 100,
      height: 100,
    },
    {
      file: new File(["image2.png"], "image2.png", { type: "image/png" }),
      width: 100,
      height: 100,
    },
  ];

  it("renders files correctly", () => {
    render(<PreviewImgs files={files} deleteFile={mockDeleteFile} />);

    // ファイル名が正しく表示されているか確認
    expect(screen.getByText("image1.png")).toBeInTheDocument();
    expect(screen.getByText("image2.png")).toBeInTheDocument();
  });

  it("calls deleteFile when delete button is clicked", () => {
    render(<PreviewImgs files={files} deleteFile={mockDeleteFile} />);

    // 削除ボタンがクリックされたときに deleteFile が呼ばれるか確認
    const deleteButtons = screen.getAllByRole("button", { name: /削除/i });
    fireEvent.click(deleteButtons[0]);

    expect(mockDeleteFile).toHaveBeenCalledWith(0);
  });
});
