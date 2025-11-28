import Bounded from '@/components/Bounded';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECT_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: await params,
  });

  if (!project) notFound();

  return (
    <Bounded>
      <h2 className="font-semibold text-fs-600 md:text-fs-700">
        {project?.name}
      </h2>

      {project.mainImage?.asset?.url ? (
        <Image
          src={urlFor(project.mainImage.asset.url)
            .format('webp')
            .auto('format')
            .width(1000)
            .height(1000)
            .url()}
          width={1000}
          height={1000}
          alt={project.mainImage.alt as string}
          priority
          loading="eager"
          className="object-cover"
        />
      ) : null}

      <div className="prose-sm md:prose-lg">
        {project.desc ? <PortableText value={project.desc} /> : null}
      </div>
    </Bounded>
  );
};

export default ProjectDetailPage;
