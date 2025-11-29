'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

const NAV_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Projects', url: '/projects' },
  { name: 'About Us', url: '/about' },
  { name: 'Contact', url: '/contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleNavButton = () => {
    setNavOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="flex justify-between items-center px-3 py-5">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* desktop nav */}
      <nav
        role="navigation"
        aria-label="main navigation"
        className="md:flex gap-x-3 hidden"
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className={clsx(
              'block',
              pathname === link.url
                ? 'underline underline-offset-2 font-semibold'
                : 'font-normal',
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* mobile nav */}
      <button
        className="md:hidden relative z-20"
        onClick={handleNavButton}
        aria-label="Toggle Navigation"
        aria-expanded={navOpen}
        aria-controls="mobile-menu"
      >
        {navOpen ? <IoClose size={20} /> : <GiHamburgerMenu size={20} />}
      </button>

      <nav
        role="navigation"
        id="mobile-menu"
        aria-label="main navigation"
        className={clsx(
          'md:hidden flex flex-col fixed inset-0 z-10 bg-brand-white items-center gap-y-10 py-20 transition-transform duration-300',
          navOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            onClick={() => setNavOpen(false)}
            className={clsx(
              'py-1 w-[50%] text-center block transition',
              pathname === link.url
                ? 'font-semibold bg-brand-green'
                : 'font-normal bg-brand-white',
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
