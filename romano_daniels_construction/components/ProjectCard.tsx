import { urlFor } from '@/sanity/lib/image';
import { ALL_PROJECTS_QUERYResult } from '@/sanity/types';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = (props: NonNullable<ALL_PROJECTS_QUERYResult[number]>) => {
  const { name, mainImage, slug } = props;
  return (
    <Link href={`/projects/${slug?.current}`} className="flex flex-col gap-y-2">
      <div className="overflow-hidden">
        {mainImage?.asset?.url ? (
          <Image
            src={urlFor(mainImage.asset.url)
              .width(500)
              .height(500)
              .auto('format')
              .format('webp')
              .url()}
            width={500}
            height={500}
            alt={mainImage.alt as string}
            priority
            loading="eager"
            className="min-w-full hover:scale-[1.1] transition-transform duration-300"
          />
        ) : null}
      </div>

      <p className="font-semibold">{name}</p>
    </Link>
  );
};

export default ProjectCard;
