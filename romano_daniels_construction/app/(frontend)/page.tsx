import Bounded from '@/components/Bounded';
import Cta from '@/components/Cta';
import ProjectCard from '@/components/ProjectCard';
import Subtitle from '@/components/Subtitle';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PROJECTS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

const Services = [
  {
    name: 'Commercial',
    inclusive: 'Warehouses, outdoor, malls',
    imgURL: '/commercial.avif',
  },
  {
    name: 'Residential',
    inclusive: 'Neighborhoods, multiple homes',
    imgURL: '/residential.avif',
  },
  {
    name: 'Infrastructure',
    inclusive: 'Roads, pipes, etc.',
    imgURL: '/infrastructure.avif',
  },
];

const Clients = [
  { name: 'i11', imgURL: '/i11.avif' },
  { name: 'gasparyan', imgURL: '/gasparyan.avif' },
  { name: 'datox', imgURL: '/datox.avif' },
  { name: 'spazio', imgURL: '/Spazio.avif' },
  { name: 'ocean', imgURL: '/Ocean.avif' },
];

export default async function Home() {
  const { data: projects } = await sanityFetch({ query: ALL_PROJECTS_QUERY });

  return (
    <Bounded>
      <div className="h-[60vh] home-hero-mobile md:home-hero-tablet lg:home-hero-desktop relative flex justify-center items-start md:items-center md:justify-start">
        <div className="absolute inset-0 bg-brand-black-200/65" />
        <div className="flex flex-col mt-10 md:mt-0 text-brand-white relative z-20 ml-5 border-l-2 border-brand-white/50 pl-5">
          <h1 className="font-semibold text-fs-700 leading-none">
            Building Trust
          </h1>
          <p className="max-w-[70%]">
            Quality construction, innovative designs, and sustainable solution
            for every project
          </p>
          <Cta url="/projects" className="font-azeret-mono" arrowStyle="green">
            View Projects
          </Cta>
        </div>
      </div>

      <div className="space-y-1 md:space-y-2">
        <Subtitle title="our services" />
        <h3 className="text-fs-500 md:text-fs-600 font-medium">
          Diverse solutions tailored to your every need
        </h3>
        <Cta url="/services">Learn More</Cta>

        <div className="grid md:grid-cols-3 gap-3">
          {Services.map((service, i) => (
            <div key={i} className="flex flex-col gap-y-1">
              <div>
                <Image
                  src={service.imgURL}
                  width={500}
                  height={500}
                  alt=""
                  priority
                  className="min-w-full"
                />
              </div>
              <h3 className="font-semibold">{service.name}</h3>
              <p className="text-brand-black-200/50">{service.inclusive}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center md:justify-start bg-[url(/about-hero.avif)] bg-center bg-cover h-[50vh]">
        <div className="flex flex-col gap-y-2 text-brand-white ml-5 pl-5 border-l-2 border-brand-white/50">
          <Subtitle title="about" />
          <h3 className="text-fs-500 md:text-fs-600 font-medium">
            About Romano & Daniels
          </h3>
          <p className="max-w-[80%] md:max-w-[50%]">
            This is the space to introduce visitors to the business or brand.
            Briefly explain who's behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.
          </p>
          <Cta url="/about" arrowStyle="green" className="uppercase">
            Learn More
          </Cta>
        </div>
      </div>

      <div className="flex flex-col bg-brand-black-100/10 py-5 md:py-8">
        <p className="text-center font-azeret-mono uppercase">Our clients</p>
        <div className="grid grid-cols-3 md:grid-cols-5 place-items-center">
          {Clients.map((client) => (
            <div className="" key={client.name}>
              <Image
                src={client.imgURL}
                width={100}
                height={80}
                priority
                className="min-w-full"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2 md:space-y-4">
        <Subtitle title="recent projects" />

        <h3 className="text-fs-500 md:text-fs-600 font-medium">
          Discover our latest projects
        </h3>

        <Cta url="/projects" className="uppercase">
          More Projects
        </Cta>

        <div className="grid md:grid-cols-3 gap-y-2 md:gap-x-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project?.slug?.current} {...project} />
          ))}
        </div>
      </div>

      <div className="space-y-1 md:space-y-3 bg-brand-green/40 py-3 text-center">
        <p className="font-semibold">Get a quote for your upcoming project</p>
        <Link
          href="/contact"
          className="bg-brand-black-200 text-brand-white px-3 py-2 inline-block hover:scale-[1.02] transition-transform duration-300"
        >
          Contact
        </Link>
      </div>
    </Bounded>
  );
}
