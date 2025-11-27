import type { Metadata } from 'next';
import './globals.css';
import { Inter } from '@/lib/font';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <html lang="en" data-scroll-behavior="smooth">
      <body className={Inter.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
