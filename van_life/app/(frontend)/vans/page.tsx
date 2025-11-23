import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_VANS_QUERY } from '@/sanity/lib/query';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const VAN_TYPES = [
  { name: 'Simple', type: 'simple' },
  { name: 'Rugged', type: 'rugged' },
  { name: 'Luxury', type: 'luxury' },
];

const VAN_COLORS: Record<string, string> = {
  simple: '#e17654',
  rugged: '#115e59',
  luxury: '#161616',
};

const VansPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) => {
  const { type } = await searchParams;
  const params = {
    type: type || null,
  };
  const { data: vans } = await sanityFetch({
    query: ALL_VANS_QUERY,
    params,
  });

  return (
    <Bounded>
      <h2 className="font-semibold text-fs-800">Explore our van options</h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-3">
          {VAN_TYPES.map((van) => (
            <Link
              key={van.type}
              href={{
                pathname: '/vans',
                query: { type: van.type },
              }}
            >
              <Button
                className={clsx(
                  'bg-brand-orange-200 text-brand-black-100',
                  van.type == type ? 'text-brand-white' : '',
                )}
                style={{
                  backgroundColor: van.type == type ? VAN_COLORS[van.type] : '',
                }}
              >
                {van.name}
              </Button>
            </Link>
          ))}
        </div>
        {type ? (
          <Link
            href="/vans"
            className="underline underline-offset-4 text-red-400"
          >
            Clear Filter
          </Link>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-3">
        {vans.map((van) => (
          <Link
            key={van.slug?.current}
            href={`/vans/${van.slug?.current}`}
            className="flex flex-col gap-y-3"
          >
            {van.mainImage?.asset?.url ? (
              <Image
                src={urlFor(van.mainImage.asset.url)
                  .format('webp')
                  .width(500)
                  .height(500)
                  .url()}
                alt={van.mainImage.alt as string}
                width={500}
                height={500}
                priority
                className="rounded-sm"
              />
            ) : null}

            <div className="flex justify-between">
              <p className="font-semibold text-fs-600">{van.name}</p>
              {van.price && (
                <p className="text-right">
                  <span className="text-fs-500 font-semibold block">
                    {formatCurrency(van.price)}
                  </span>
                  /day
                </p>
              )}
            </div>
            {van.type ? (
              <div
                className="p-2 rounded-sm text-brand-white self-start"
                style={{
                  backgroundColor: VAN_COLORS[van.type],
                }}
              >
                <p className="capitalize font-semibold">{van.type}</p>
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </Bounded>
  );
};

export default VansPage;
