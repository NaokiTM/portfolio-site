import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import ThemeContext from "./contexts/ThemeContext";

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

