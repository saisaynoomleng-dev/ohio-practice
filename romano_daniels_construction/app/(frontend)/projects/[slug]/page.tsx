import Bounded from '@/components/Bounded';
import { formatDate } from '@/lib/utils';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECT_QUERY } from '@/sanity/lib/queries';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

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
    <Bounded className="grid md:grid-cols-2 gap-5">
      <div className="col-span-full">
        <Link href="/projects" className="flex items-center gap-x-2 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to all projects
        </Link>
      </div>
      <div>
        {project.mainImage.asset?.url ? (
          <Image
            src={urlFor(project.mainImage.asset.url)
              .width(1000)
              .height(1000)
              .auto('format')
              .format('webp')
              .url()}
            width={1000}
            height={1000}
            alt={project.mainImage.alt as string}
            priority
            loading="eager"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-y-3">
        <h2 className="font-semibold">{project.name}</h2>
        {project.startDate && (
          <p>
            <span className="font-semibold">Started Date: </span>
            {formatDate(project.startDate)}
          </p>
        )}
        {project.finishDate && (
          <p>
            <span className="font-semibold">Finish Date: </span>
            {formatDate(project.finishDate)}
          </p>
        )}

        <div className="prose-sm md:prose-lg">
          {project.desc ? <PortableText value={project.desc} /> : null}
        </div>
      </div>
    </Bounded>
  );
};

export default ProjectDetailPage;
