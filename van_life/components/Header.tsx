'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Host', url: '/host' },
  { name: 'About', url: '/about' },
  { name: 'Vans', url: '/vans' },
  { name: 'Sign In', url: '/sign-in', icon: <FaUserCircle size={25} /> },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between py-5 px-3">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="" width={100} height={100} />
        </Link>
      </div>
      <nav className="flex gap-x-3 items-center" role="navigation">
        {NAV_LINKS.map((link) => (
          <Link
            className={clsx(
              'font-medium',
              link.url == pathname
                ? 'underline underline-offset-2 font-semibold'
                : '',
            )}
            key={link.url}
            href={link.url}
          >
            {link.icon ? link.icon : link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
