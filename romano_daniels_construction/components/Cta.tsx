import { CTAProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const Cta = ({ url, children, className }: CTAProps) => {
  return (
    <Link
      href={url}
      className={clsx(
        ' font-semibold px-2 py-1 flex items-center gap-x-3 group',
        className,
      )}
    >
      <span className="bg-brand-green px-2 py-1 group-hover:translate-x-1 transition-transform duration-150">
        <FaArrowRightLong />
      </span>
      <span className="group-hover:underline underline-offset-2">
        {children}
      </span>
    </Link>
  );
};

export default Cta;
