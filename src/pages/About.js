import React from "react";
import Team from "../components/Team";
import Call from "../components/Call";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="section-title">
        <div className="about-us">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 info-container">
            <h2>History</h2>
            <p className="py-3">
              The company was founded in December 2013 as CABS RECRUITMENT in
              partnership with CNA International Executive Search, and rebranded
              into HEAD HUNTING AGENCY in 2023, since 2024 Partner with IMD International Executive Search Group and Since 2024 Official Partner Best Places to Work Certification Program.
            </p>
            <p className="pb-5">
              Celebrating 10 years on the local market, the agency built a solid
              reputation, serving more than 300 clients, approaching more than
              20,000 candidates, having an average NPS score of 92%, an
              average success rate of above 90% and repeated business from
              numerous clients and candidates.
            </p>
            <h2>Profesionalism</h2>
            <h5 style={{ display: "inline" }} className="py-3">
              Managing Partner:
            </h5>
            <p style={{ display: "inline" }}> Loreda Silvia Dragomir</p>
            <p className="pt-3">
              Loreda Silvia Dragomir is the Managing Partner for Head Hunting
              Agency, based in Bucharest, Romania.
            </p>
            <p>
              Prior to this she was Permanent Placement Director within Adecco,
              coordinated the Romanian operations of CNA International, as well
              as Balkans Director.
            </p>
            <p>
              Over the past 18 years she gained relevant experience in the
              executive search industry, as well as recruitment in well known
              organizations such as Adecco, CNA International, Kienbaum GmbH,
              Stanton Chase International, Grafton Recruitment, and Hudson.
            </p>
            <p>
              Loreda has relevant experience in delivering various head hunting
              and executive search & selection assignments, assessment and
              development centers, conducting market mapping, professional
              coaching and career management projects, remuneration and ESG
              studies, both locally in Romania, and across boarders regionally
              or globally.
            </p>
          </div>
          <div className="col-md-6 info-image d-none d-md-block">
            <img
              src="assets/img/img-about.png"
              alt=""
              className="img-fluid mx-5"

            />
          </div>
        </div>
      </div>
      <Team />
      <Call />
      <Testimonials />
      <Footer />
    </section>
  );
}

export default About;
