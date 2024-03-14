import React from "react";

const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>
            At our Head Hunting Agency, our team of seasoned HR professionals is
            dedicated to identifying and securing top-tier talent for your
            organization. With a wealth of experience in talent acquisition and
            executive search, our experts leverage their industry insights and
            network to deliver strategic hiring solutions tailored to your
            unique needs.
          </p>
        </div>

        <div className="row justify-content-md-center">
          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img
                  src="assets/img/loreda.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Loreda Silvia Dragomir</h4>
                <span>Managing Partner</span>
                <p>My talent is to find your talent.</p>
                <div className="social">
                  <a href="https://www.linkedin.com/in/loreda-silvia-dragomir-2953a37/">
                    {" "}
                    <i className="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img
                  src="assets/img/ramona.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Ramona Ungureanu</h4>
                <span>Partener Coaching & Career Management</span>
                <p>Empowering lives, crafting futures.</p>
                <div className="social">
                  <a href="https://www.linkedin.com/in/ramonaungureanu/">
                    {" "}
                    <i className="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 mt-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img
                  src="assets/img/robert.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Robert M. Negru</h4>
                <span>ESG Consultant</span>
                <p>For a greener tomorrow.</p>
                <div className="social">
                  <a href="https://www.linkedin.com/in/robertmnegru-wildlife/">
                    {" "}
                    <i className="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
