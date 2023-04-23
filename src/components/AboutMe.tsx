const AboutMe = () => {
  return (
    <section id="about-me" className='about-me mt-12 mb-16 sm:mb-0'>
      <h2 className='text-2xl font-bold mb-6'>About Me</h2>
      <p className='description max-w-[900px]'>
        <span className='block mb-2'>
          I'm a computer engineering student at&nbsp;
          <abbr title='Karaj Azad University' className='no-underline'>
            KIAU
          </abbr>
          &nbsp;with nearly 2 years of experience working on different front-end
          projects. My speciality is developing fast, reliable, and responsive
          web apps using mostly Next.js, React.js, Typescript, and Tailwind-Css.
        </span>
        <span className='block mb-2'>
          What I love about being a so-called tech guy is that you have keep
          yourself updated and progress day by day, and you also get to see the
          wonders of tech and what are the new possibilities it brings with
          itself with each and every progress that is made. One other thing that
          I love about this field is that what we do helps people all around the
          world not knowing any boundaries of any kind.
        </span>
        I'm also interested in reading psychology books and training
        calisthenics, so that I can keep both my mind and body as healthy as
        they should be.
      </p>
      <a
        download
        href='/docs/sina-bayandorian.pdf'
        className='cv-link inline-block bg-primary-light/20 text-sm border border-transparent rounded-lg hover:border-white/50 active:scale-95 transition-all py-2 px-6 mt-6'
      >
        Download my CV
      </a>
    </section>
  );
};

export default AboutMe;
