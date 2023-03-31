// * components
import ProjectCard from './ProjectCard';

// * data
import projectsData from './data.json';

const Projects = () => {
  return (
    <div id='projects' className='projects space-y-24 md:space-y-10 pt-20 sm:pt-12 sm:mt-60'>
      {projectsData.map(proj => (
        <ProjectCard
          key={proj.id}
          id={proj.id}
          title={proj.title}
          image={proj.image}
          description={proj.description}
        />
      ))}
    </div>
  );
};

export default Projects;
