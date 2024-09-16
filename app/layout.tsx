import type { Metadata } from "next";
import "./tailwind.css";

export const metadata: Metadata = {
  title: "nextjs-map-sample",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
