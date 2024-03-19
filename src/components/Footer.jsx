import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact mb-3">
              <img className="logo-img" src="assets/img/hha-logo.png" />
              <p>
                City Gate Office Building – South Tower
                <br />
                Piața Presei Libere 3-5, București 013702
                <br />
                Romania <br />
                <br />
                <strong>Phone:</strong> +40 (731) 002 820
                <br />
                <strong>Email:</strong> office@hha.ro
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links pt-1">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/about">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/services">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links pt-1">
              <h4>Our Social Networks</h4>
              <p>
                Stay connected with us! Explore our latest updates and insights
                on our social media channels.
              </p>
              <div className="social-links mt-3">
                <a
                  href="https://www.linkedin.com/showcase/headhuntingagency/about/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100093103434674"
                  className="facebook"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/headhuntingagency/"
                  className="instagram"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
              <p className="mt-3">
                Website powered by{" "}
                <a href="https://lucianung.com">Lucian Ungureanu</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Head Hunting Agency</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
