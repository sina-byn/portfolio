import { useEffect, useRef } from 'react';
import clsx from 'clsx';

// * components
import Tag from './Tag';

// * types
type ProjectCardProps = {
  id: number;
  title: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  packageLink?: string;
  description: string;
  tags: string[];
};

const ProjectCard = ({
  id,
  title,
  image,
  demoLink,
  githubLink,
  packageLink,
  description,
  tags,
}: ProjectCardProps) => {
  const imageContainerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isOdd = id % 2 === 1;

  const imageLoadHandler = () => {
    imageContainerRef.current!.style.height = 'fit-content';
    imageRef.current!.style.display = 'initial';
  };
  console.log(packageLink);

  useEffect(() => {
    const container = imageContainerRef.current!;
    const image = imageRef.current!;
    const ratio = image.naturalWidth / image.naturalHeight;
    const containerWidth = parseInt(
      getComputedStyle(container).getPropertyValue('width')
    );

    container.style.height = containerWidth / ratio + 'px';
  }, [imageRef.current, imageContainerRef.current]);

  return (
    <article className='project-card flex flex-col gap-y-3 md:gap-y-6 md:grid grid-cols-12 grid-rows-6 h-fit'>
      <header
        className={clsx(
          'card-header col-span-7 row-start-1 z-10 font-semibold',
          isOdd ? 'col-start-1' : 'col-start-6 md:text-right'
        )}
      >
        <span className='text-primary-light'>Featured Project</span>
        <h6 className='project-title text-2xl'>{title}</h6>
      </header>
      <section
        className={clsx(
          'project-details order-last col-start-1 col-span-7 row-start-2 row-end-7 flex flex-col gap-y-3 z-10',
          isOdd ? 'col-start-1' : 'col-start-6 md:items-end'
        )}
      >
        <p className='description bg-glassy-primary rounded-2xl p-6 shadow-sm'>
          {description}
        </p>
        <div className='tags flex flex-wrap gap-2'>
          {tags.map(tag => (
            <Tag key={tag} title={tag} />
          ))}
        </div>
        <div className='project-links flex flex-col sm:flex-row flex-wrap gap-2'>
          {githubLink !== undefined && githubLink.length > 0 && (
            <a
              target='_blank'
              href={githubLink}
              rel='noreferrer noopener'
              className='github-repo-link w-fit bg-primary-light/20 text-sm border border-transparent rounded-lg hover:border-white/50 active:scale-95 transition-all py-2 px-4'
            >
              View Github Repo
            </a>
          )}
          {packageLink !== undefined && packageLink.length > 0 && (
            <a
              target='_blank'
              href={packageLink}
              rel='noreferrer noopener'
              className='github-repo-link w-fit bg-primary-light/20 text-sm border border-transparent rounded-lg hover:border-white/50 active:scale-95 transition-all py-2 px-4'
            >
              View npm Package
            </a>
          )}
          {demoLink !== undefined && demoLink.length > 0 && (
            <a
              href={demoLink}
              target='_blank'
              rel='noreferrer noopener'
              className='demo-link w-fit bg-primary-light/20 text-sm border border-transparent rounded-lg hover:border-white/50 active:scale-95 transition-all py-2 px-4'
            >
              View Demo
            </a>
          )}
        </div>
      </section>
      <figure
        ref={imageContainerRef}
        className={clsx(
          'image-container col-span-6 row-start-1 row-end-7 relative h-fit bg-purple rounded-md pt-4 md:pt-8',
          isOdd
            ? 'col-start-7 pl-4 md:pl-10 lg:pl-14'
            : 'col-start-1 pr-4 md:pr-10 lg:pr-14'
        )}
      >
        <img
          src={image}
          alt={title}
          loading='lazy'
          ref={imageRef}
          onLoad={imageLoadHandler}
          className={clsx(
            'project-image w-full',
            isOdd
              ? 'rounded-tl-lg rounded-br-lg'
              : 'rounded-tr-lg rounded-bl-lg'
          )}
        />
        <div
          className={clsx(
            'backdrop-light bg-radial-gradient absolute -top-1/3 md:-top-1/2 -z-10 h-full w-3/4 max-w-[500px]',
            isOdd ? 'sm:right-10' : 'sm:left-10'
          )}
        />
        <div
          className={clsx(
            'backdrop-light bg-radial-gradient absolute -top-1/3 md:-top-1/2 -z-10 h-full w-3/4 max-w-[500px]',
            isOdd ? 'sm:right-10' : 'sm:left-10'
          )}
        />
        <div
          className={clsx(
            'backdrop-light bg-radial-gradient absolute top-1/2 -z-10 h-full w-3/4 max-w-[500px]',
            isOdd ? 'sm:right-10' : 'sm:left-10'
          )}
        />
        <div
          className={clsx(
            'backdrop-light bg-radial-gradient absolute top-1/2 -z-10 h-full w-3/4 max-w-[500px]',
            isOdd ? 'sm:right-10' : 'sm:left-10'
          )}
        />
      </figure>
    </article>
  );
};

export default ProjectCard;
