import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
import GlobalOffices from "./pages/GlobalOffices";
import GlobalMarket from "./pages/GlobalMarket";
import OurCommitment from "./pages/OurCommitment";
import Event1 from "./pages/Event1";
import Event3 from "./pages/Event3";
import Event2 from "./pages/Event2";
import Event4 from "./pages/Event4";
import Event5 from "./pages/Event5";
import Event6 from "./pages/Event6";
import Event7 from "./pages/Event7";
import Event8 from "./pages/Event8";
import Event9 from "./pages/Event9";
import Event10 from "./pages/Event10";
import Event11 from "./pages/Event11";
import Event12 from "./pages/Event12";
import Event13 from "./pages/Event13";
import Privacy from "./pages/Privacy";
import Vacancies from "./pages/Vacancies";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/about-global-offices" element={<GlobalOffices />} />
        <Route
          path="/about-global-market-coverage"
          element={<GlobalMarket />}
        />
        <Route path="/about-our-commitment" element={<OurCommitment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-event-1" element={<Event1 />} />
        <Route path="/blog-event-2" element={<Event2 />} />
        <Route path="/blog-event-3" element={<Event3 />} />
        <Route path="/blog-event-4" element={<Event4 />} />
        <Route path="/blog-event-5" element={<Event5 />} />
        <Route path="/blog-event-6" element={<Event6 />} />
        <Route path="/blog-event-7" element={<Event7 />} />
        <Route path="/blog-event-8" element={<Event8 />} />
        <Route path="/blog-event-9" element={<Event9 />} />
        <Route path="/blog-event-10" element={<Event10 />} />
        <Route path="/blog-event-11" element={<Event11 />} />
        <Route path="/blog-event-12" element={<Event12 />} />
        <Route path="/blog-event-13" element={<Event13 />} />
      </Routes>
    </div>
  );
}

export default App;
