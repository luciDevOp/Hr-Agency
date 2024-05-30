import React from "react";

const Call = () => {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row justify-content-center">
          <div className="col-lg-3 text-center">
            <img className="call-icons" src="/assets/img/years.png" alt=""/>
            <h1>50+</h1>
            <h3>Years of Experience</h3>
          </div>
          <div className="col-lg-3 text-center">
            <img className="call-icons" src="/assets/img/job offers.png" alt=""/>
            <h1>340</h1>
            <h3>Clients</h3>
          </div>
          <div className="col-lg-3 text-center">
            <img className="call-icons" src="/assets/img/resumes.png" alt=""/>
            <h1>25,400</h1>
            <h3>Candidates within reach</h3>
          </div>
          <div className="col-lg-3 text-center">
            <img className="call-icons" src="/assets/img/satisfaction.png" alt=""/>
            <h1>95%</h1>
            <h3>Clients Satisfaction</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
