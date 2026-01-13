import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata = {
  title: "AI Model Studio - 브랜드의 무드, 가장 완벽한 페르소나로 재탄생하다",
  description: "AI 커스텀 모델 개발 및 이미지, 영상 제작 서비스. 전문가가 정교하게 설계한 모델로, 브랜드가 원하는 모든 장면을 직접 완성하세요.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className={`${inter.variable} ${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
