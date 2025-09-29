import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gatget World",
  description: "This is the best eccomerse website in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
