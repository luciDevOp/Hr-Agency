import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">


    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <img className='logo-img' src='assets/img/hha-logo.png'/>
            <p>
            22D, Sfantul Pantelimon Street<br />
            077145, Pantelimon, Ilfov<br />
            Romania <br /><br />
              <strong>Phone:</strong> +40 (731) 002 820<br />
              <strong>Email:</strong> loreda.dragomir@hha.ro<br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links pt-4">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/services">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links pt-4">
            <h4>Our Social Networks</h4>
            <p>Stay connected with us! Explore our latest updates and insights on our social media channels.</p>
            <div className="social-links mt-3">
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright <strong><span>Head Hunting Agency</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
    );
};

export default Footer;