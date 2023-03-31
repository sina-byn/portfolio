const HeroSection = () => {
  return (
    <section
      id='home'
      className='hero-section flex flex-col sm:flex-row items-center sm:items-start pt-24'
    >
      <figure className='image-container grid place-items-center w-80 h-96 relative bg-radial-gradient'>
        <img
          src='/arrow.svg'
          alt='arrow'
          className='hidden sm:block absolute top-5 right-5'
        />
        <img src='/memoji.png' alt='memoji' className='w-32' />
        <div className='backdrop-light bg-radial-gradient w-full h-full absolute -z-10' />
      </figure>
      <div className='flex flex-col'>
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
    </section>
  );
};

export default HeroSection;
