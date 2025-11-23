import { SanityLive } from '@/sanity/lib/live';

export default function frontendLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      {children}
      <SanityLive />
    </main>
  );
}
