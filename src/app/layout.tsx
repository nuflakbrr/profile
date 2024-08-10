import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins as FontSans } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/providers/ThemeProvider';

const fontSans = FontSans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Naufal Akbar Nugroho',
  description:
    'Saya bersemangat membuat kontribusi untuk memberikan pengetahuan teknologi kepada semua orang!',
  metadataBase: new URL('https://nuflakbrr.github.io/profile'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const basePath = process.env.BASE_PATH || '';

  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/assets/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/assets/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/assets/favicons/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${basePath}/assets/favicons/site.webmanifest`}
      />
      <link
        rel="mask-icon"
        href={`${basePath}/assets/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <body className={fontSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="bg-white dark:bg-[#1a1a1a]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
