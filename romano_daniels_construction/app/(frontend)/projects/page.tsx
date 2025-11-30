import Bounded from '@/components/Bounded';
import ContactUsSection from '@/components/ContactUsSection';
import ProjectCard from '@/components/ProjectCard';
import Subtitle from '@/components/Subtitle';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PROJECTS_QUERY } from '@/sanity/lib/queries';

const ProjectsPage = async () => {
  const { data: projects } = await sanityFetch({ query: ALL_PROJECTS_QUERY });

  return (
    <Bounded>
      <div className="flex items-end-safe h-[40vh] project-hero-mobile md:project-hero-tablet lg:project-hero-desktop text-brand-white">
        <div className="ml-5 pl-5 my-3 border-l-2 border-brand-white">
          <Subtitle title="our projects" />
          <h1 className="font-semibold">We build projects that last</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-3 place-items-center gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug.current} {...project} />
        ))}
      </div>

      <div>
        <ContactUsSection />
      </div>
    </Bounded>
  );
};

export default ProjectsPage;
