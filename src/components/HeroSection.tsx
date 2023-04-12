// * components
import Circuit from './Circuit';
import Container from './Container';

const HeroSection = () => {
  return (
    <Container>
      <section
        id='home'
        className='hero-section grid sm:flex grid-rows-2 grid-cols-2 flex-row sm:items-center pt-24 sm:pl-6'
      >
        <figure className='image-container col-span-2 grid place-items-center w-80 h-96 relative bg-radial-gradient mx-auto sm:mx-0'>
          <img
            src='/arrow.svg'
            alt='arrow'
            className='hidden sm:block absolute top-5 right-5'
          />
          <img src='/memoji.png' alt='memoji' className='w-32' />
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
