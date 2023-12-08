import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Asked from './components/Asked';
import Call from './components/Call';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Skills from './components/Skills';
import Team from './components/Team';
import Why from './components/Why';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clients />
      <About />
      <Why />
      <Skills />
      <Services />
      <Call />
      <Team />
      <Pricing />
      <Asked />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
