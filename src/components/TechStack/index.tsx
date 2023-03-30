import { useRef } from 'react';

// * data
import stackData from './data.json';

// * components
import TechPill from './TechPill';

const TechStack = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <section className='tech-stack h-fit sm:w-[500px] sm:h-[350px] mt-32 mx-auto'>
      <p className='text-xl font-medium text-center mb-6'>
        My experience includes
        <span className='text-primary-light ml-1 font-semibold'>
          ,but is not limited to
        </span>
      </p>
      <div className='stack-tree relative'>
        <canvas
          ref={canvasRef}
          width={500}
          height={350}
          className='hidden sm:block absolute inset-0'
        />
        <div className='tech-pills-container grid grid-cols-3 sm:grid-cols-6 justify-items-center gap-4 sm:h-[300px] mb-10 sm:mb-0'>
          {stackData.map(tech => (
            <TechPill
              key={tech.name}
              name={tech.name}
              image={tech.image}
              canvasRef={canvasRef}
            />
          ))}
        </div>
        <figure className='flex items-center justify-center relative -mt-8 sm:-mr-2 mx-auto'>
          <img src='/orbits.svg' alt='orbits' />
          <img
            src='/logo.svg'
            alt='logo'
            className='absolute w-8 sm:w-10 opacity-80 -ml-1.5 sm:-ml-2 -mt-3 sm:-mt-4'
          />
          <div className='bg-radial-gradient w-9/12 h-full absolute -z-10 opacity-50' />
          <div className='bg-radial-gradient w-9/12 h-full absolute -z-10' />
        </figure>
      </div>
    </section>
  );
};

export default TechStack;
