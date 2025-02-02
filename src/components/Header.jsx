import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleToggleClick = () => {
    // This function handles both click and touch events
    toggleAboutDropdown();
  };

  return (
    <div>
      <header id="header" className="fixed-top navnav">
        <div className="container d-flex align-items-center">
          <Link to="/" className="logo me-auto">
            <img src="assets/img/hhasnip.png" alt="" className="img-fluid" />
          </Link>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`mobile-nav-toggle ${mobileMenuOpen ? "open" : ""}`}
          >
            ☰ {/* You can replace this with your preferred burger icon */}
          </button>

          <nav
            id="navbar"
            className={`navbar ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
          >
            <ul>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className={`dropdown ${aboutDropdownOpen ? "active" : ""}`}>
                <span className="about-link" onClick={handleToggleClick}>
                  About <i className="bi bi-chevron-down"></i>
                </span>
                <ul
                  className={
                    aboutDropdownOpen ? "dropdown-menu open" : "dropdown-menu"
                  }
                >
                  <li>
                    <Link to="/about" onClick={closeMobileMenu}>
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-global-offices" onClick={closeMobileMenu}>
                      IMD Global reach
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-global-market-coverage"
                      onClick={closeMobileMenu}
                    >
                      Global Market Coverage
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bptw-news"
                      onClick={closeMobileMenu}
                    >
                      Noutati BPTW
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-our-commitment" onClick={closeMobileMenu}>
                      Our Commitment
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/services"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/blog"
                  onClick={closeMobileMenu}
                >
                  Media Lab
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/vacancies"
                  onClick={closeMobileMenu}
                >
                  Vacancies
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  to="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="getstarted scrollto"
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
