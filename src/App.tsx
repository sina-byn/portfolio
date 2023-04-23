// * components
import Container from './components/Container';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <main className='app-container'>
      <Header />
      <HeroSection />
      <Container className='px-6'>
        <AboutMe />
        <TechStack />
        <Projects />
        <Footer />
      </Container>
    </main>
  );
};

export default App;
