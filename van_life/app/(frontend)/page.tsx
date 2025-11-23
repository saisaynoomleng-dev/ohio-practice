import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Bounded className="relative">
      <div className="absolute inset-0 h-[500px]">
        <Image
          src="/home-hero.png"
          alt=""
          width={800}
          height={800}
          className="min-h-full brightness-50"
          loading="eager"
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-center relative gap-y-4 text-brand-white">
        <h1 className="text-fs-900 font-semibold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link href="/vans" className="w-full">
          <Button className="font-semibold bg-brand-orange-400 w-full">
            Find Your Van
          </Button>
        </Link>
      </div>
    </Bounded>
  );
}
