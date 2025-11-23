import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Bounded>
      <p className="font-semibold text-fs-900">
        Sorry, the page you were looking for was not found.
      </p>
      <Link href="/">
        <Button className="w-full">Return to Home</Button>
      </Link>
    </Bounded>
  );
};

export default NotFoundPage;
