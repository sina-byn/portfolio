// * components
import Container from './components/Container';
import Header from './components/Header';
import TechStack from './components/TechStack';

const App = () => {
  return (
    <main className='app-container'>
      <Header />
      <Container>
        <TechStack />
      </Container>
    </main>
  );
};

export default App;
