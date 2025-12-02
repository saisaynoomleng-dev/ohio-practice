import type { Metadata } from 'next';
import './globals.css';
import { Inter, Sora } from '@/lib/fonts';
import { SanityLive } from '@/sanity/lib/live';

export const metadata: Metadata = {
  title: {
    template: '%s | Espresso',
    default: 'Espresso',
  },
  description:
    'Espresso is one of the favorite coffee spot in downtown NYC. We serves the best coffee, sell the beans and as well as provide the equipments for your needs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Sora.variable} ${Inter.variable} antialiased`}>
        <main>{children}</main>

        <SanityLive />
      </body>
    </html>
  );
}
