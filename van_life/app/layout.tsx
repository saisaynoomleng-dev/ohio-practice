import type { Metadata } from 'next';
import './globals.css';
import { Inter } from '@/lib/font';

export const metadata: Metadata = {
  title: {
    template: '%s | VanLife',
    default: 'Vanlife',
  },
  description: 'We offer different vans for your need.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Inter.variable}>{children}</body>
    </html>
  );
}
