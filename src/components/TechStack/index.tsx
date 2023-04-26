import { createRef, useEffect, useRef, useState } from 'react';

// * utils
import { drawCurve } from '../../helpers/canvasUtils';

// * components
import TechPill from './TechPill';

// * data
import stackData from './data.json';

const TechStack = () => {
  const [curvesDrawn, setCurvesDrawn] = useState<boolean>(false);
  const [pillRefs] = useState<React.RefObject<HTMLDivElement>[]>(
    stackData.map(_ => createRef())
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const curveDrawHandler = () => {
      if (window.innerWidth < 640 || curvesDrawn) return;
      pillRefs.forEach(pillRef => drawCurve(canvasRef, pillRef));
      setCurvesDrawn(true);
    };

    curveDrawHandler();
    window.addEventListener('resize', curveDrawHandler);

    return () => window.removeEventListener('resize', curveDrawHandler);
  }, [canvasRef.current]);

  return (
    <section className='tech-stack h-fit sm:w-[500px] sm:h-[350px] sm:mt-20 mx-auto'>
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
        <div className='tech-pills-container flex flex-wrap justify-center gap-4 sm:h-[300px] mb-10 sm:mb-0'>
          {stackData.map((tech, idx) => (
            <TechPill
              key={tech.name}
              ref={pillRefs[idx]}
              name={tech.name}
              image={tech.image}
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
