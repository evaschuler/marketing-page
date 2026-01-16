import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hallo Bärn!",
  description: "Eine einfache Hallo Welt Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
