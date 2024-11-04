import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from 'next/font/google';
import "./globals.css";
import ThemeWrapper from "./components/ThemeWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const instrumentserif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "NAOKI MIYAGAWA",
  description: "NAOKI MIYAGAWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} *:antialiased`}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}

export { instrumentserif };
