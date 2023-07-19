// * components
import ProjectCard from './ProjectCard';

// * data
import projectsData from './data.json';

const Projects = () => {
  return (
    <div
      id='projects'
      className='projects space-y-24 md:space-y-40 pt-20 md:pt-28 sm:mt-64'
    >
      {projectsData.map(proj => (
        <ProjectCard
          key={proj.id}
          id={proj.id}
          title={proj.title}
          image={proj.image}
          demoLink={proj.demoLink}
          githubLink={proj.githubLink}
          packageLink={proj.packageLink}
          description={proj.description}
          tags={proj.tags}
        />
      ))}
    </div>
  );
};

export default Projects;
