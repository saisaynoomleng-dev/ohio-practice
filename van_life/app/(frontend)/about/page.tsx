import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <Bounded>
      <div>
        <Image
          src="/about-hero.png"
          alt=""
          width={800}
          height={800}
          className="min-w-full rounded-sm"
          priority
          loading="eager"
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="font-semibold text-fs-800 leading-[1.2]">
          Don&apos;t squeeze in a sedan when you could relax in a van.
        </h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-brand-orange-200 flex flex-col px-5 py-3 font-semibold gap-y-3">
        <p>Your destination is waiting.</p>
        <p>Your van is ready.</p>
        <Link href="/vans">
          <Button>Explore our vans.</Button>
        </Link>
      </div>
    </Bounded>
  );
};

export default AboutPage;
