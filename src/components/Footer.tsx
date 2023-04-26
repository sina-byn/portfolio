// * components
import Container from './Container';

const Footer = () => {
  return (
    <footer id='contact' className='footer mt-16'>
      <Container className='px-6'>
        <h5 className='text-xl mb-6'>Contact</h5>
        <div className='info-field flex items-center gap-x-2'>
          <i className='fa-solid fa-envelope mt-1' />
          <a href='mailto:sina.sina.bayan@protonmail.com'>
            sina.sina.bayan@protonmail.com
          </a>
        </div>
        <div className='info-field flex items-center gap-x-2'>
          <i className='fa-brands fa-github mt-1' />
          <a
            target='_blank'
            rel='noreferrer noopener'
            href='https://github.com/sina-byn'
          >
            github
          </a>
        </div>
        <p className='design-attribute text-xs mt-4'>
          The link to the design sheets of this website is mentioned below. This
          project is available on figma community for free licensed under&nbsp;
          <a
            target='_blank'
            rel='noreferrer noopener'
            href='https://creativecommons.org/licenses/by/4.0/'
            className='license-link text-primary-light font-medium'
          >
            CC BY 4.0
          </a>
          .
          <span className='block'>
            Note that changes were applied to the design as needed.
          </span>
          <a
            target='_blank'
            rel='noreferrer noopener'
            href='https://www.figma.com/community/file/1182197835889504018/Portfolio-Design'
            className='design-link text-primary-light font-medium'
          >
            Figma Project Link
          </a>
        </p>
        <div className='logo-attributes text-xs mt-4'>
          <span>Attributes:</span>
          <span className='attribute-link block'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com/icons/javascript'
              className='text-primary-light text-xs font-medium mr-1'
            >
              Free Javascript Icon
            </a>
            by
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com/contributors/icon-mafia'
              className='text-primary-light text-xs font-medium mx-1'
            >
              Icon Mafia
            </a>
            on
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com'
              className='text-primary-light text-xs font-medium ml-1'
            >
              IconScout
            </a>
          </span>
          <span className='attribute-link block'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              className='text-primary-light text-xs font-medium mr-1'
              href='https://iconscout.com/icons/css3'
            >
              Free Css3 Icon
            </a>
            by
            <a
              target='_blank'
              rel='noreferrer noopener'
              className='text-primary-light font-medium ml-1'
              href='https://iconscout.com/contributors/icon-mafia'
            >
              Icon Mafia
            </a>
          </span>
          <span className='attribute-link block'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              className='text-primary-light font-medium mr-1'
              href='https://iconscout.com/icons/html5'
            >
              Free Html5 Icon
            </a>
            by
            <a
              target='_blank'
              rel='noreferrer noopener'
              className='text-primary-light font-medium mx-1'
              href='https://iconscout.com/contributors/icon-mafia'
            >
              Icon Mafia
            </a>
            on
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com'
              className='text-primary-light text-xs font-medium ml-1'
            >
              IconScout
            </a>
          </span>
          <span className='attribute-link block'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com/icons/git'
              className='text-primary-light text-xs font-medium mr-1'
            >
              Free Git Icon
            </a>
            by
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com/contributors/icon-mafia'
              className='text-primary-light text-xs font-medium mx-1'
            >
              Icon Mafia
            </a>
            on
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com'
              className='text-primary-light text-xs font-medium ml-1'
            >
              IconScout
            </a>
          </span>
          <span className='attribute-link block'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com/icons/github'
              className='text-primary-light text-xs font-medium mr-1'
            >
              Free Github Icon
            </a>
            by
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com/contributors/unicons'
              className='text-primary-light text-xs font-medium mx-1'
            >
              Unicons Font
            </a>
            on{' '}
            <a
              target='_blank'
              rel='noreferrer noopener'
              href='https://iconscout.com'
              className='text-primary-light text-xs font-medium ml-1'
            >
              IconScout
            </a>
          </span>
        </div>
      </Container>
      <div className='copyright bg-primary text-xs text-center mt-8 py-2'>
        Copyright &copy; 2023 | Sina Bayandorian
      </div>
    </footer>
  );
};

export default Footer;
