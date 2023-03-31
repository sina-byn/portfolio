// * components
import Container from './components/Container';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Projects from './components/Projects';

const App = () => {
  return (
    <main className='app-container'>
      <Header />
      <Container>
        <TechStack />
        <Projects />
      </Container>
    </main>
  );
};

export default App;
