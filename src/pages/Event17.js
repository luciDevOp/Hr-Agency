import React from "react";
import Footer from "../components/Footer";

function Event17() {
  return (
    <section id="event">
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Presenting Loreda Dragomir</h2>
        </div>

        <section className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="pic">
                <img
                  src="assets/img/loreda.jpeg"
                  className="img-fluid"
                  alt="Loreda Dragomir"
                />
              </div>
            </div>
            <div className="col-md-4 pad">
              <h2>Loreda Dragomir</h2>
              <h4>Founder and Managing Partner</h4>
              <h5 style={{ color: "#7947a2", fontWeight: "600" }}>
                Head Hunting Agency
              </h5>

              <h3 className="lead">
                <span style={{ fontWeight: "500", paddingTop: "10px" }}>
                  Based in:
                </span>{" "}
                Bucharest
              </h3>
              <h3 className="lead">
                <span style={{ fontWeight: "500", paddingTop: "10px" }}>
                  Education:
                </span>{" "}
                Master's degree
              </h3>
              <h3 className="lead">
                <span style={{ fontWeight: "500", paddingTop: "10px" }}>
                  Motto:
                </span>
                My talent is to find your talent
              </h3>
            </div>
            <div className="col-md-4 desktop-right">
              <h2 style={{ color: "#7947a2" }}>Contact:</h2>
              <div className="social-links mt-3">
                <a
                  href="https://www.linkedin.com/in/loreda-silvia-dragomir-2953a37/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/loreda.silvia.dragomir"
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
                <br />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 mt-5">
              <h3>About Loreda Dragomir</h3>
              <p>
                Prior to January 2024, Loreda was Permanent Placement Director
                within Adecco, Balkans Director of CNA International, Country
                Manager Romania and Bulgaria for Kienbaum GmbH, COO and Practice
                Leader of Stanton Chase International, Country Manager of
                Grafton Recruitment, and more.
              </p>
              <p>
                Over the past 20 years spent in Romania, she has gained
                extensive experience in C-suite Executive Headhunting, Executive
                Search, Leadership Advisory, Recruitment, Human Capital
                Advisory, Career Management, Assessment and Development Centers,
                Remuneration Studies, and Management Consultancy.
              </p>
              <p>
                Loreda has delivered various Head Hunting and Executive Search
                assignments, conducted Assessment and Development centers,
                Market Mapping, Professional Coaching, Career Management
                Projects, Remuneration and ESG studies. Her expertise spans
                across Romania and globally in industries such as Production,
                Manufacturing & Engineering, Consumer Products and Services,
                Retail, Life Science and Healthcare, Professional Services,
                Automotive, Energy, and Utilities.
              </p>
              <p>
                With over 20 years of experience in the management consulting
                industry, she is passionate about helping companies find and
                retain the best talent and improve their environmental, social,
                and governance (ESG) performance.
              </p>
              <p>
                Additionally, she is the official Partner for Romania for the
                Best Places to Work Certification Program, a global initiative
                that recognizes and celebrates the most attractive employers in
                various markets and sectors.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default Event17;
