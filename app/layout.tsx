import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krischal Dhungel | Portfolio",
  description: "Software Engineer & AI Enthusiast Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
