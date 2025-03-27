import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalOffices from "./pages/GlobalOffices";
import GlobalMarket from "./pages/GlobalMarket";
import BPTW from "./pages/BPTW";
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
import Event15 from "./pages/Event15";
import Event16 from "./pages/Event16";
import Event17 from "./pages/Event17";
import Event18 from "./pages/Event18";
import Event19 from "./pages/Event19";
import Event20 from "./pages/Event20";
import Event21 from "./pages/Event21";
import Privacy from "./pages/Privacy";
import Vacancies from "./pages/Vacancies";
import SendCV from "./pages/SendCV";

//admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHeader from "./components/admin/AdminHeader";
import Dashboard from "./pages/admin/Dashboard";




function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="App">
      {isAdminRoute ? <AdminHeader /> : <Header />}

      <Routes>
        {/* admin */}

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* public */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/about-global-offices" element={<GlobalOffices />} />
        <Route
          path="/about-global-market-coverage"
          element={<GlobalMarket />}
        />
        <Route path="/bptw-news" element={<BPTW />} />
        <Route path="/error" element={<Error />} />
        <Route path="/about-our-commitment" element={<OurCommitment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/swiss-chamber-of-commerce" element={<Event1 />} />
        <Route path="/blog/NRCC" element={<Event2 />} />
        <Route path="/blog/BRCC" element={<Event3 />} />
        <Route path="/blog/DWNT" element={<Event4 />} />
        <Route path="/blog/professional-women-network" element={<Event5 />} />
        <Route path="/blog/advantage-austria" element={<Event6 />} />
        <Route path="/blog/RDCC" element={<Event7 />} />
        <Route path="/blog/ramona-ungureanu" element={<Event8 />} />
        <Route path="/blog/robert-negru" element={<Event9 />} />
        <Route path="/blog/womenrise" element={<Event10 />} />
        <Route path="/blog/member-professional-women-network" element={<Event11 />} />
        <Route path="/blog/networking-breakfast" element={<Event12 />} />
        <Route path="/blog/a_best-ac_texas" element={<Event13 />} />
        <Route path="/blog/valentina-calin" element={<Event15 />} />
        <Route path="/blog/IMD-international-london" element={<Event16 />} />
        <Route path="/blog/loreda-dragomir" element={<Event17 />} />
        <Route path="/blog/accessability-expo" element={<Event18 />} />
        <Route path="/blog/alexandru-dragomir" element={<Event19 />} />
        <Route path="/blog/age-inclusive-workplace" element={<Event20 />} />
        <Route path="/blog/bogdan-costinescu" element={<Event21 />} />

        <Route path="/send-cv" element={<SendCV />} />

      </Routes>
    </div>
  );
}

export default App;
