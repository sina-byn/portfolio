const Footer = () => {
  return (
    <footer id='contact' className='footer pb-20 mt-16'>
      <h5 className='text-xl mb-12'>Contact</h5>
      <p></p>
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
    </footer>
  );
};

export default Footer;
