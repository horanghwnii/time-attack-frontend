import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './_providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '발랑',
  description: '타임 어택 프론트엔드 :: 발랑',
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
