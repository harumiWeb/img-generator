import { describe, it, expect, vi, Mock } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { GenerateButton } from './GenerateButton';
import { generateImgAlt } from './utils';
import { beforeEach } from 'vitest';

// モックの設定
vi.mock('./utils', () => ({
  generateImgAlt: vi.fn()
}));

describe('GenerateButton', () => {
  const mockFiles = [
    { file: new Blob(['test'], { type: 'image/jpeg' }), preview: 'test.jpg' }
  ];
  const mockSetGeneratedAltJson = vi.fn();
  const mockSetIsGenerating = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('ボタンが正しくレンダリングされること', () => {
    render(<GenerateButton files={mockFiles} setGeneratedAltJson={mockSetGeneratedAltJson} isGenerating={false} setIsGenerating={mockSetIsGenerating} />);
    expect(screen.getByText('imgタグを生成する')).toBeInTheDocument();
  });

  it('ボタンクリック時にgenerateImgAlt関数が呼ばれること', () => {
    render(<GenerateButton files={mockFiles} setGeneratedAltJson={mockSetGeneratedAltJson} isGenerating={false} setIsGenerating={mockSetIsGenerating} />);
    
    const buttons = screen.getAllByText('imgタグを生成する');
    fireEvent.click(buttons[0]);

    expect(generateImgAlt).toHaveBeenCalledTimes(1);
    expect(generateImgAlt).toHaveBeenCalledWith(mockFiles, mockSetGeneratedAltJson, expect.any(Function), expect.any(Function));
  });

  it('ボタンクリック時にエラーが発生した場合にエラーメッセージが表示されること', () => {
    render(<GenerateButton files={mockFiles} setGeneratedAltJson={mockSetGeneratedAltJson} isGenerating={false} setIsGenerating={mockSetIsGenerating} />);
    const buttons = screen.getAllByText('imgタグを生成する');
    fireEvent.click(buttons[0]);
  });
});
