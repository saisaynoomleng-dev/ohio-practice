import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
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
  rugged: '#115e59',
  luxury: '#161616',
};

const VansDetailPage = async ({
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
      <Link
        href="/vans"
        className="flex items-center gap-x-3 hover:underline underline-offset-4"
      >
        <span>
          <FaArrowLeft />
        </span>
        <span>Back to All Vans</span>
      </Link>

      {van?.mainImage?.asset?.url ? (
        <Image
          src={urlFor(van.mainImage.asset.url)
            .width(1000)
            .height(1000)
            .auto('format')
            .format('webp')
            .url()}
          alt={van.mainImage.alt as string}
          width={1000}
          height={1000}
          priority
          loading="eager"
          className="rounded-sm min-w-full"
        />
      ) : null}

      {van.type && (
        <div
          style={{ backgroundColor: VAN_COLORS[van.type] }}
          className="px-3 py-1 rounded-sm inline-block"
        >
          <p className="capitalize text-brand-white font-semibold">
            {van.type}
          </p>
        </div>
      )}

      <p className="text-fs-700 font-semibold">{van.name}</p>
      {van.price ? (
        <p>
          <span className="font-semibold text-fs-600">
            {formatCurrency(van.price)}
          </span>
          /day
        </p>
      ) : null}

      {van.desc && (
        <div className="prose-sm md:prose-md">
          <PortableText value={van.desc} />
        </div>
      )}

      <Link href="/rent-vans">
        <Button className="w-full bg-brand-orange-400">Rent this van</Button>
      </Link>
    </Bounded>
  );
};

export default VansDetailPage;
