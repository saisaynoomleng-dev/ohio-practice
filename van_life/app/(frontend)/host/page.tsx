import Bounded from '@/components/Bounded';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { HOST_VANS_QUERY } from '@/sanity/lib/query';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaStar } from 'react-icons/fa6';

const HostPage = async () => {
  const { data: vans } = await sanityFetch({ query: HOST_VANS_QUERY });

  if (!vans) notFound();

  return (
    <Bounded>
      <div className="bg-brand-orange-100 flex flex-col gap-y-3 px-3 py-4">
        <p className="font-semibold text-fs-700">Welcome!</p>
        <div className="flex justify-between items-center">
          <p>
            Income last <span className="underline">30 days</span>
          </p>
          <Link href="/host/income" className="underline underline-offset-4">
            Details
          </Link>
        </div>
        <p className="font-semibold text-fs-900">{formatCurrency(2000)}</p>
      </div>

      <div className="flex justify-between items-center bg-brand-orange-200 px-3 py-4">
        <div className="flex gap-x-3 items-center">
          <p className="font-semibold">Review Score</p>
          <p className="flex items-center gap-x-1">
            <FaStar className="text-brand-orange-400" />
            5.0 <span className="font-normal">/ 5</span>
          </p>
        </div>
        <Link href="/host/reviews" className="underline underline-offset-4">
          Details
        </Link>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-fs-600">Your listed vans</p>
          <Link href="/host/listed-vans">View All</Link>
        </div>

        <div className="flex flex-col gap-y-3">
          {vans.map((van) => (
            <Link
              key={van.slug?.current}
              href={`/host/listed-vans/${van.slug?.current}`}
              className="grid grid-cols-[auto_1fr_auto] gap-x-2 bg-brand-orange-100/50 px-2 py-1"
            >
              {van.mainImage?.asset?.url ? (
                <Image
                  src={urlFor(van.mainImage.asset.url)
                    .width(100)
                    .height(100)
                    .auto('format')
                    .format('webp')
                    .url()}
                  alt={van.mainImage.alt as string}
                  width={100}
                  height={100}
                  priority
                  loading="eager"
                  className="rounded-sm"
                />
              ) : null}

              <div className="flex flex-col gap-y-2">
                <p className="font-semibold">{van.name}</p>
                {van.price && <p>{formatCurrency(van.price)}/day</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default HostPage;
