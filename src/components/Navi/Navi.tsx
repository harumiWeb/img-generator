interface NaviProps {
  className?: string;
}

export default function Navi({ className }: NaviProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a className="link-hover" href="/terms">利用規約</a>
      <a className="link-hover" href="/privacy">プライバシーポリシー</a>
      <a className="link-hover" href="https://www.halpost.tech">ブログ</a>
      <a className="link-hover" href="https://www.halpost.tech/contact">お問い合わせ</a>
    </div>
  );
}
