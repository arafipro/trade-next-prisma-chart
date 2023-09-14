import HeadNavBar from "@/components/HeadNavBar";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notosanjp = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "trade-next-prisma",
  description: "trade-next-prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notosanjp.className}>
      <body className="flex w-screen bg-gray-100 overflow-x-hidden scroll-smooth">
        <HeadNavBar />
        <div className="w-full">
          <div className="fixed min-h-screen w-72 border-r bg-slate-200 mt-16">
            SideNavBar
          </div>
          <div className="mt-16 ml-72 mr-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
