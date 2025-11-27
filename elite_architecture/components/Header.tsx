'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="px-3 py-3 md:px-5 lg:px-8 flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" width={80} height={80} alt="" />
      </Link>

      {/* mobile nav */}
      <Button
        className="md:hidden relative z-20 bg-transparent"
        onClick={() => {
          setNavOpen((prevOpen) => !prevOpen);
        }}
        aria-label="navigation button"
      >
        {navOpen ? (
          <IoIosClose className="text-brand-black size-6" />
        ) : (
          <RxHamburgerMenu className="text-brand-black size-6" />
        )}
      </Button>
      <nav
        role="navigation"
        aria-label="main navigation"
        className={clsx(
          'md:hidden flex flex-col gap-y-3 fixed inset-0 py-[10vh] items-center bg-brand-white transition-transform duration-300 ease-in-out z-10',
          navOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={clsx(
              '',
              pathname === link.url ? 'font-semibold text-blue-400' : '',
            )}
            onClick={() => setNavOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Nav */}
      <nav
        role="navigation"
        className="hidden md:flex gap-x-3 items-center"
        aria-label="main navigation"
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={clsx(
              '',
              pathname === link.url && 'font-semibold text-blue-400',
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
