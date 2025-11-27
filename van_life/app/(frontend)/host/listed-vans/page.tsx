import Bounded from '@/components/Bounded';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { HOST_VANS_QUERY } from '@/sanity/lib/query';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const ListedVansPage = async () => {
  const { data: vans } = await sanityFetch({ query: HOST_VANS_QUERY });

  if (!vans) notFound();

  return (
    <Bounded>
      <h2 className="font-semibold text-fs-700">Your listed vans</h2>

      <div className="flex flex-col gap-y-3">
        {vans.map((van) => (
          <Link
            href={`/host/listed-vans/${van.slug?.current}`}
            key={van.slug?.current}
            className="grid grid-cols-[auto_1fr] gap-x-3 bg-brand-orange-100 px-2 py-1"
          >
            {van.mainImage?.asset?.url ? (
              <Image
                src={urlFor(van.mainImage.asset.url)
                  .width(100)
                  .height(100)
                  .auto('format')
                  .format('webp')
                  .url()}
                width={100}
                height={100}
                alt={van.mainImage.alt as string}
                priority
                loading="eager"
                className="rounded-sm"
              />
            ) : null}

            <div className="flex flex-col gap-y-3">
              <p className="font-semibold text-fs-500">{van.name}</p>
              {van.price && <p>{formatCurrency(van.price)}/day</p>}
            </div>
          </Link>
        ))}
      </div>
    </Bounded>
  );
};

export default ListedVansPage;
