'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HOST_NAV_LINKS = [
  { name: 'Dashboard', url: '/host' },
  { name: 'Income', url: '/host/income' },
  { name: 'Vans', url: '/host/listed-vans' },
  { name: 'Reviews', url: '/host/reviews' },
];
const HostHeader = () => {
  const pathname = usePathname();
  return (
    <header>
      <nav className="flex gap-x-3 items-center">
        {HOST_NAV_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={clsx(
              'font-medium',
              pathname == link.url
                ? 'underline underline-offset-4 font-semibold'
                : '',
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HostHeader;
