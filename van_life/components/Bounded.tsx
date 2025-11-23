import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'px-3 py-5 md:px-5 lg:px-8 lg:py-8 min-h-screen',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
