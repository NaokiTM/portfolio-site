import type { Metadata } from "next";

import { Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import ThemeWrapper from "./contexts/ThemeWrapper";

const instrumentserifitalic = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

// export const metadata: Metadata = {
//   title: "Naoki Miyagawa",
//   description: "Naoki Miyagawa",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} *:antialiased`}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}

export { instrumentserifitalic }

