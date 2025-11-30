import Link from 'next/link';
import Logo from './Logo';

const NAVIGATION_LINKS = [
  { name: 'Services', url: '/services' },
  { name: 'Projects', url: '/projects' },
  { name: 'About Us', url: '/about' },
  { name: 'Contact', url: '/contact' },
];

const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com' },
];

const UTILITY_LINKS = [
  { name: 'Terms & Conditions', url: '/terms&conditions' },
  { name: 'Privacy Policy', url: '/privacy' },
  { name: 'Accessibility Statement', url: '/accessibility' },
];

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-3 lg:gap-x-5 gap-y-5 px-3 py-5 md:px-5 lg:px-8 bg-brand-black-100/5">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="font-medium font-azeret-mono uppercase">head office</h3>
        <address>
          <p>500 Tery Francine St, San Francisco, CA 9415</p>
          <Link
            href="tel:+1234567890"
            className="block hover:underline underline-offset-2"
          >
            123-456-7890
          </Link>
          <Link
            href="mailto:info@mysite.com"
            className="block hover:underline underline-offset-2"
          >
            info@mysite.com
          </Link>
        </address>
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="font-medium font-azeret-mono uppercase">navigation</h3>
        {NAVIGATION_LINKS.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="hover:underline underline-offset-2"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-y-3">
        <h3 className="font-medium font-azeret-mono uppercase">follow us</h3>
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className="hover:underline underline-offset-2"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <hr className="w-[80%] place-self-center col-span-full bg-brand-black-100/10 h-px rounded-sm" />

      <div className="flex flex-col gap-y-5 md:flex-row col-span-full justify-between md:items-baseline-last">
        <div className="flex flex-col gap-y-5">
          {UTILITY_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="hover:underline underline-offset-2"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <p className="text-fs-300 text-right">
          &copy;{new Date().getFullYear()} by Sai Say Noom Leng.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
