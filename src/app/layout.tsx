import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "imgalt",
  description: "imgalt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <main>{children}</main>
        <footer className="text-center text-md py-4 text-gray-200 bg-gray-700">
          <small>{`© ${new Date().getFullYear()} ImageX`}</small>
        </footer>
      </body>
    </html>
  );
}
