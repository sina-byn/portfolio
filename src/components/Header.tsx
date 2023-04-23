import { useState } from 'react';
import clsx from 'clsx';

// * components
import Container from './Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuOpenToggler = () => setIsMenuOpen(prev => !prev);

  return (
    <header className='header fixed inset-0 z-50 w-screen h-fit bg-primary'>
      <Container className='flex justify-between items-center relative py-4 px-6'>
        <img src='/logo.svg' alt='personal logo' className='w-10' />
        <nav
          className={clsx(
            'flex sm:inline flex-col gap-y-6',
            'fixed sm:static top-0 right-0 z-50',
            'h-screen sm:h-auto bg-primary transition-transform',
            'sm:space-x-20 px-16 sm:px-0 pt-10 sm:pt-0',
            !isMenuOpen && 'translate-x-full sm:translate-x-0'
          )}
        >
          <i
            onClick={menuOpenToggler}
            className='close-icon fa-solid fa-close fa-lg sm:hidden cursor-pointer mb-10'
          />
          <a href='#home'>Home</a>
          <a href='#about-me'>About Me</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
        <i
          onClick={menuOpenToggler}
          className='menu-icon fa-solid fa-bars fa-lg sm:hidden cursor-pointer'
        />
        <i
          onClick={menuOpenToggler}
          className={clsx(
            'cover sm:hidden fixed inset-0 z-40 w-screen h-screen bg-black/50 transition-transform',
            !isMenuOpen && '-translate-x-full sm:translate-x-0'
          )}
        />
      </Container>
    </header>
  );
};

export default Header;
