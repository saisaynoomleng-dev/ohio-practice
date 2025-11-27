import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'space-y-3 md:space-y-5 lg:space-y-8 px-3 md:px-5 lg:px-8 py-2 md:py-5 lg:py-8',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
