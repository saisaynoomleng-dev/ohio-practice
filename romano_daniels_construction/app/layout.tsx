import type { Metadata } from 'next';
import './globals.css';
import { azeret_mono, helvetica } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Romano Daniels Construction',
    default: 'Romano Daniels Construction',
  },
  description:
    'Romano Daniels Construction is the biggest construction agency in U.S.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} ${azeret_mono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
