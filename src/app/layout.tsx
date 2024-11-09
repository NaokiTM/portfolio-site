import { Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import ThemeContext from "./contexts/ThemeContext";

const instrumentserifitalic = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} *:antialiased`}>
        <ThemeContext>
          {children}
        </ThemeContext>
      </body>
    </html>
  );
}

export { instrumentserifitalic }

