import Bounded from '@/components/Bounded';
import ProjectCard from '@/components/ProjectCard';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PROJECTS_QUERY } from '@/sanity/lib/queries';

const ProjectPage = async () => {
  const { data: projects } = await sanityFetch({ query: ALL_PROJECTS_QUERY });
  return (
    <Bounded>
      <h2 className="font-semibold text-fs-600 md:text-fs-700 lg:text-fs-800 uppercase">
        all projects
      </h2>
      <p className="text-fs-500 md:text-fs-600 lg:text-fs-700 uppercase">
        variety and distinction
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug?.current} {...project} />
        ))}
      </div>
    </Bounded>
  );
};

export default ProjectPage;
