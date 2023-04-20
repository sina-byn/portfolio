import clsx from 'clsx';

// * types
type ProjectCardProps = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const ProjectCard = ({ id, title, image, description }: ProjectCardProps) => {
  const isOdd = id % 2 === 1;

  return (
    <article className='project-card flex flex-col gap-y-3 md:gap-y-6 md:grid grid-cols-12 grid-rows-6 h-fit'>
      <header
        className={clsx(
          'card-header col-span-7 row-start-1 z-10 font-semibold',
          isOdd ? 'col-start-1' : 'col-start-6 text-right'
        )}
      >
        <span className='text-primary-light'>Featured Project</span>
        <h6 className='project-title text-2xl'>{title}</h6>
      </header>
      <section
        className={clsx(
          'project-details order-last col-start-1 col-span-7 row-start-2 row-end-7 z-10',
          isOdd ? 'col-start-1' : 'col-start-6'
        )}
      >
        <p className='description bg-glassy rounded-2xl p-6 shadow-sm'>
          {description}
        </p>
      </section>
      <figure
        className={clsx(
          'image-container col-span-6 row-start-1 row-end-7 relative h-fit bg-purple rounded-md pt-8',
          isOdd ? 'col-start-7 pl-14' : 'col-start-1 pr-14'
        )}
      >
        <img
          src={image}
          alt={title}
          className={clsx(
            'project-image w-full',
            isOdd ? 'rounded-tl-lg' : 'rounded-tr-lg'
          )}
        />
        <div
          className={clsx(
            'backdrop-light  bg-radial-gradient absolute -top-1/3 md:-top-1/2 -z-10 h-full w-3/4 max-w-[500px]',
            isOdd ? 'sm:right-10' : 'sm:left-10'
          )}
        />
        <div
          className={clsx(
            'backdrop-light  bg-radial-gradient absolute -top-1/3 md:-top-1/2 -z-10 h-full w-3/4 max-w-[500px]',
            isOdd ? 'sm:right-10' : 'sm:left-10'
          )}
        />
        <div
          className={clsx(
            'backdrop-light  bg-radial-gradient absolute top-1/2 -z-10 h-full w-3/4 max-w-[500px]',
            isOdd ? 'sm:right-10' : 'sm:left-10'
          )}
        />
        <div
          className={clsx(
            'backdrop-light  bg-radial-gradient absolute top-1/2 -z-10 h-full w-3/4 max-w-[500px]',
            isOdd ? 'sm:right-10' : 'sm:left-10'
          )}
        />
      </figure>
    </article>
  );
};

export default ProjectCard;
