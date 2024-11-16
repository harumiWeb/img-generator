import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
  title: {
    template: "%s | IMAGEX",
    default: "IMAGEX | 画像を選んでimgタグに必要なコードを一瞬で生成",
  },
  description: "IMAGEXは画像を選んでimgタグに必要なコードを一瞬で生成できるサービスです。altテキストを考えたりする時間は不要です。コーディングスピードを更に上げましょう！",
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "IMAGEX",
    description: "IMAGEX",
    siteName: "IMAGEX",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body className={notoSansJP.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
