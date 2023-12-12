import { Link } from 'react-router-dom';


function Header() {
    return (
      <div>
        <header id="header" className="fixed-top navnav">
    <div className="container d-flex align-items-center">

      <Link to="/" className="logo me-auto"><img src="assets/img/hhasnip.png" alt="" className="img-fluid" /></Link>

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
          <li className="dropdown"><Link to="/about"><span>About us</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link to="/about-global-offices">IMD Global reach</Link></li>
              <li><Link to="/about-global-market-coverage">Global Market Coverage</Link></li>
              <li><Link to="/about-our-commitment">Our Commitment</Link></li>
            </ul>
          </li>
          <li><Link className="nav-link scrollto" to="/services">Services</Link></li>
          <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>

          <li><Link className="getstarted scrollto" to="/about">Get Started</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
      </div>
    );
  }
  
  export default Header;