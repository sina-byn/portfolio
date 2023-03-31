// * components
import Container from './components/Container';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <main className='app-container'>
      <Header />
      <Container>
        <HeroSection />
        <TechStack />
        <Projects />
        <Footer />
      </Container>
    </main>
  );
};

export default App;
