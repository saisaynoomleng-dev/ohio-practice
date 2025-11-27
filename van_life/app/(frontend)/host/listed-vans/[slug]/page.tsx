import Bounded from '@/components/Bounded';
import { formatCurrency } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { VAN_QUERY } from '@/sanity/lib/query';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';

const VAN_COLORS: Record<string, string> = {
  simple: '#e17654',
  luxury: '#161616',
  rugged: '#115e59',
};

const ListedVanDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: van } = await sanityFetch({
    query: VAN_QUERY,
    params: await params,
  });

  if (!van) notFound();

  return (
    <Bounded>
      <Link href="/host/listed-vans" className="flex items-center gap-x-2">
        <span>
          <FaArrowLeft />
        </span>
        <span>Back to all vans</span>
      </Link>

      <div className="bg-brand-orange-100 px-2 py-3 space-y-5">
        <div className="grid grid-cols-[auto_1fr] gap-x-3 items-center">
          {van?.mainImage?.asset?.url ? (
            <Image
              src={urlFor(van.mainImage.asset.url)
                .auto('format')
                .width(300)
                .height(300)
                .format('webp')
                .url()}
              width={300}
              height={300}
              alt={van.mainImage.alt as string}
              priority
              loading="eager"
              className="rounded-sm"
            />
          ) : null}

          <div className="flex flex-col gap-y-3">
            {van.type && (
              <p
                className="font-semibold px-3 py-1 capitalize text-brand-white rounded-sm self-start"
                style={{ backgroundColor: VAN_COLORS[van.type] }}
              >
                {van.type}
              </p>
            )}
            <p className="text-fs-600 font-semibold">{van.name}</p>
            {van.price && (
              <p>
                <span className="font-semibold">
                  {formatCurrency(van.price)}
                </span>
                /day
              </p>
            )}
          </div>
        </div>

        <p>
          <span className="font-semibold">Name:&nbsp;</span>
          {van.name}
        </p>
        <p className="capitalize">
          <span className="font-semibold">Category:&nbsp;</span>
          {van.type}
        </p>

        {van.desc && (
          <div className="prose-md flex gap-x-2">
            <span className="font-semibold">Description:&nbsp;</span>
            <PortableText value={van.desc} />
          </div>
        )}

        <p>
          <span className="font-semibold">Visibility:&nbsp;</span>
          {van.visibility ? 'Public' : 'Private'}
        </p>
      </div>
    </Bounded>
  );
};

export default ListedVanDetail;
