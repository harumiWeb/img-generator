import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PreviewImg } from './PreviewImg';
import { ImgInfo } from "@/components";

// URL.createObjectURL をモック
vi.stubGlobal('URL', {
  createObjectURL: vi.fn(() => 'mocked-url'),
  revokeObjectURL: vi.fn(),
});

describe('PreviewImg', () => {
  const mockDeleteFile = vi.fn();
  const file: ImgInfo = {
    file: new File([''], 'image.png', { type: 'image/png', lastModified: 123456789 }),
    width: 100,
    height: 100,
  };

  it('renders file information correctly', () => {
    render(<PreviewImg file={file} deleteFile={mockDeleteFile} index={0} />);
    
    // ファイル名が正しく表示されているか確認
    expect(screen.getByText('image.png')).toBeInTheDocument();
    // 画像が正しく表示されているか確認
    expect(screen.getByAltText('image.png')).toBeInTheDocument();
  });

  it('calls deleteFile when delete button is clicked', () => {
    render(<PreviewImg file={file} deleteFile={mockDeleteFile} index={0} />);
    
    // 削除ボタンがクリックされたときに deleteFile が呼ばれるか確認
    const deleteButtons = screen.getAllByRole('button', { name: /削除/i });
    fireEvent.click(deleteButtons[0]); // 最初のボタンをクリック
    
    expect(mockDeleteFile).toHaveBeenCalledWith(0);
  });
});
