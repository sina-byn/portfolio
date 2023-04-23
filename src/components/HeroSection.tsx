// * components
import Container from './Container';
import Circuit from './Circuit';

const HeroSection = () => {
  return (
    <Container>
      <section
        id='home'
        className='hero-section grid sm:flex grid-rows-2 grid-cols-2 gap-x-10 sm:items-center pt-24 sm:pl-6'
      >
        <figure className='image-container col-span-2 grid place-items-center min-w-[280px] w-2/4 sm:w-80 sm:h-96 relative bg-radial-gradient mx-auto sm:mx-0'>
          <img
            alt='arrow'
            src='/arrow.svg'
            className='hidden sm:block absolute top-5 right-5'
          />
          <img src='/memoji.png' alt='memoji' className='w-[40%] sm:w-32' />
          <div className='backdrop-light bg-radial-gradient w-full h-full absolute -z-10' />
        </figure>
        <div className='flex flex-col grow sm:self-start pl-6 sm:pl-0'>
          <span className='text-lg sm:text-base mt-5 sm:mt-10 sm:-ml-8'>
            Hello! I Am
            <span className='fullname text-primary-light font-medium ml-1'>
              Sina Bayandorian
            </span>
          </span>
          <p className='sm:mt-28 sm:-ml-12'>
            <span className='block text-3xl font-bold'>
              A Front-End Developer
            </span>
            who enjoys coding a lot...
          </p>
        </div>
        <Circuit />
      </section>
    </Container>
  );
};

export default HeroSection;
