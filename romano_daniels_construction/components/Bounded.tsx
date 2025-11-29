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
        'space-y-5 md:space-y-8 lg:space-y-10 px-3 md:px-5 lg:px-8 py-3 md:py-5',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
