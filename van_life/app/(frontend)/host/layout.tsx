import HostHeader from '@/components/HostHeader';

export default function HostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="px-3">
      <HostHeader />
      {children}
    </main>
  );
}
