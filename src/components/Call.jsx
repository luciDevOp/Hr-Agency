import React from "react";

const Call = () => {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row justify-content-center">
          <div className="col-lg-3 text-center">
            <img className="call-icons" src="/assets/img/years.png" />
            <h1>18+</h1>
            <h3>Years of Experience</h3>
          </div>
          <div className="col-lg-3 text-center">
            <img className="call-icons" src="/assets/img/job offers.png" />
            <h1>330+</h1>
            <h3>Clients</h3>
          </div>
          <div className="col-lg-3 text-center">
            <img className="call-icons" src="/assets/img/resumes.png" />
            <h1>23,286</h1>
            <h3>Candidates within reach</h3>
          </div>
          <div className="col-lg-3 text-center">
            <img className="call-icons" src="/assets/img/satisfaction.png" />
            <h1>100%</h1>
            <h3>Clients Satisfaction</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
