import './App.css';
import Header from './components/Header';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { Route, Routes } from 'react-router-dom';
import GlobalOffices from './pages/GlobalOffices';
import GlobalMarket from './pages/GlobalMarket';
import OurCommitment from './pages/OurCommitment';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about-global-offices' element={<GlobalOffices />} />
        <Route path='/about-global-market-coverage' element={<GlobalMarket />} />
        <Route path='/about-our-commitment' element={<OurCommitment />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
