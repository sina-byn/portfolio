// * components
import Container from './components/Container';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className='app-container'>
      <Header />
      <Container>
        <TechStack />
        <Projects />
        <Footer />
      </Container>
    </main>
  );
};

export default App;
