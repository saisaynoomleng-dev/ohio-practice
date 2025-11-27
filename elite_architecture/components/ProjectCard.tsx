import { urlFor } from '@/sanity/lib/image';
import { ALL_PROJECTS_QUERYResult } from '@/sanity/types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({
  className,
  ...props
}: NonNullable<ALL_PROJECTS_QUERYResult>[number] & { className?: string }) => {
  const { mainImage, name, slug } = props;
  return (
    <Link
      href={`/projects/${slug?.current}`}
      className={clsx('flex flex-col gap-y-3', className)}
    >
      {mainImage?.asset?.url ? (
        <Image
          src={urlFor(mainImage.asset.url)
            .width(1000)
            .height(1000)
            .auto('format')
            .format('webp')
            .url()}
          alt={mainImage.alt as string}
          priority
          width={500}
          height={500}
          loading="eager"
        />
      ) : null}

      <p className="uppercase text-fs-500">{name}</p>
    </Link>
  );
};

export default ProjectCard;
