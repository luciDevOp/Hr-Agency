import React from "react";
import Footer from "../components/Footer";

function GlobalOffices() {
  return (
    <section className="p-content" data-aos="fade-up">
      <div className="ctr">
        <h1 className="global">
          <span className="IMD">IMD</span> Global Offices
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="office-p">
                Founded in 1972, IMD International Search Group is a Top-20
                global search organization with offices in major markets and
                business centers throughout the world, providing instant access
                to a world-class executive talent pool serving the global
                economy. To find, assess, attract and retain the best and
                brightest requires a true partnership with a trusted outside
                advisor.
              </p>
              <p className="office-p">
                IMD International Search Group Partners deliver effective
                solutions with hands-on experience in the markets we serve.
                Operating through a matrix structure and organized by geographic
                and industry specialization, IMD International Search Group is
                ideally equipped to satisfy the talent acquisition requirements
                of those organizations seeking to acquire and retain high impact
                executives.
              </p>
              <p className="office-p">
                Our IMD executive search professionals, many of whom held senior
                positions in the industry sectors they now serve, conduct more
                than 2,000 senior-level searches for clients worldwide each
                year.
              </p>
            </div>
            <div className="col-md-4 related-pages">
              <h3>Related pages</h3>
              <a href="https://www.imdsearch.com">IMD Global Offices</a>
              <br />
              <a href="https://www.imdsearch.com/our-expertise/">
                IMD Global Expertise
              </a>
            </div>
          </div>
        </div>
        <div className="off-img">
          <div className="office-img"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default GlobalOffices;
