'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import LoadingSpinner from './LoadingSpinner';
import clsx from 'clsx';

const SubmitButton = ({ className }: { className?: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={clsx(
        'bg-transparent border-brand-white border rounded-3xl',
        className,
      )}
    >
      {pending ? <LoadingSpinner /> : 'Submit'}
    </Button>
  );
};

export default SubmitButton;
