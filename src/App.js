import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalOffices from "./pages/GlobalOffices";
import GlobalMarket from "./pages/GlobalMarket";
import BPTW from "./pages/BPTW";
import OurCommitment from "./pages/OurCommitment";
import Privacy from "./pages/Privacy";
import Vacancies from "./pages/vacancies/Vacancies";
import SendCV from "./pages/SendCV";
import PostContent from "./pages/blog/PostContent";

//admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminHeader from "./components/admin/AdminHeader";
import Dashboard from "./pages/admin/Dashboard";
import JobList from "./pages/admin/JobList";
import PostList from "./pages/admin/PostList";
import LatestToughtsList from "./pages/admin/LatestToughtsList";
import CategoriesList from "./pages/admin/CategoriesList";



function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin6769");
  const isLoginPage = location.pathname === "/admin6769";

  return (
    <div className="App">
      {!isLoginPage && (isAdminRoute ? <AdminHeader /> : <Header />)}

      <Routes>
        {/* admin */}

        <Route path="/admin6769" element={<AdminLogin />} />
        <Route path="/admin6769/dashboard" element={<Dashboard />} />
        <Route path="/admin6769/job_list" element={<JobList />} />
        <Route path="/admin6769/post_list" element={<PostList />} />
        <Route path="/admin6769/latest_thoughts_list" element={<LatestToughtsList />} />
        <Route path="/admin6769/categories_list" element={<CategoriesList />} />
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
        {/* <Route path="/blog/swiss-chamber-of-commerce" element={<Event1 />} />
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
        <Route path="/blog/bogdan-costinescu" element={<Event21 />} />*/}
        <Route path="/blog/:slug" element={<PostContent />} /> 
        <Route path="/send-cv/:jobId?" element={<SendCV />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
