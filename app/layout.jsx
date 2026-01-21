import { Lexend, Noto_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'UniCommunity - Etkinlikler',
  description: 'UniCommunity etkinlik sayfası',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${lexend.variable} ${notoSans.variable} antialiased font-body bg-background-light dark:bg-background-dark text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
