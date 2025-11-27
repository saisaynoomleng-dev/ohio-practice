import type { Metadata } from 'next';
import './globals.css';
import { helvetica } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    default: 'Elite Architecture',
    template: '%s | Elite Architecture',
  },
  description:
    'Elite Architecture is the architecture team based in the U.S. We design modern and high-end building.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.variable}>{children}</body>
    </html>
  );
}
