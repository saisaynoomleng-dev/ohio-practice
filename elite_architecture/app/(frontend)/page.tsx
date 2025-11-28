import Bounded from '@/components/Bounded';
import ProjectCard from '@/components/ProjectCard';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PROJECTS_QUERY, COMPANY_INFO_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const { data: info } = await sanityFetch({ query: COMPANY_INFO_QUERY });
  const { data: projects } = await sanityFetch({ query: ALL_PROJECTS_QUERY });

  return (
    <Bounded>
      <div className="flex flex-col gap-y-3">
        <div>
          <Image
            src="/home-hero-mobile.avif"
            width={560}
            height={560}
            alt=""
            priority
            className="md:hidden min-w-full mx-auto object-cover"
          />

          <Image
            src="/home-hero-tablet.avif"
            width={760}
            height={760}
            alt=""
            priority
            className="hidden md:block lg:hidden min-w-full mx-auto object-cover"
          />

          <Image
            src="/home-hero-desktop.avif"
            width={1000}
            height={1000}
            alt=""
            priority
            className="hidden lg:block min-w-full mx-auto object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline-last">
          <h1 className="font-semibold uppercase text-fs-700 md:text-fs-800 lg:text-fs-900 leading-none text-balance">
            crafting unique spaces
          </h1>
          <p className="capitalize text-brand-black/60">
            building inspiring environments
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 md:gap-y-5 gradient px-3 py-3">
        <div className="flex justify-between items-center">
          <h2 className="text-fs-600 md:text-fs-600 uppercase">
            success in numbers
          </h2>
          <Link href="/about" className="underline underline-offset-2">
            About Us
          </Link>
        </div>

        <div className="flex justify-between items-center border-b border-brand-black">
          <p className="uppercase">years of works</p>
          {info?.foundedDate ? (
            <p className="text-fs-600">
              {new Date().getFullYear() -
                new Date(info?.foundedDate).getFullYear()}
            </p>
          ) : null}
        </div>

        <div className="flex justify-between items-center border-b border-brand-black">
          <p className="uppercase">square feet built</p>
          {info?.foundedDate ? (
            <p className="text-fs-600">{info.sqft}</p>
          ) : null}
        </div>

        <div className="flex justify-between items-center border-b border-brand-black">
          <p className="uppercase">satisfied customers</p>
          {info?.foundedDate ? (
            <p className="text-fs-600">{info.customers}</p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-fs-600 md:text-fs-600 uppercase">
            recent accomplishments
          </h2>
          <Link href="/projects" className="underline underline-offset-2">
            All Projects
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug?.current} {...project} />
          ))}
        </div>
      </div>
    </Bounded>
  );
}
