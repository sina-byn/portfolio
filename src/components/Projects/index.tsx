// * components
import ProjectCard from './ProjectCard';

// * data
import projectsData from './data.json';

const Projects = () => {
  return (
    <div
      id='projects'
      className='projects space-y-24 md:space-y-40 pt-20 sm:pt-12 sm:mt-52 md:mt-96'
    >
      {projectsData.map(proj => (
        <ProjectCard
          key={proj.id}
          id={proj.id}
          title={proj.title}
          url={proj.url}
          image={proj.image}
          description={proj.description}
          tags={proj.tags}
        />
      ))}
    </div>
  );
};

export default Projects;
