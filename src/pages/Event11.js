import React from "react";
import Footer from "../components/Footer";


const Event11 = () => {
  return (
    <section id="event">
      <div className="article-container container-fluid" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>As of February, <br></br>HHA proud member of Professional Women Network</h2>
        </div>
        <div className="container-fluid py-5">
          <div className="row pwn-img"></div>
        </div>


        <section className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="pic">
                    <img
                    src="assets/img/loreda.jpeg"
                    className="img-fluid"
                    alt=""
                    />
                    </div>
                </div>
                <div className="col-md-4 pad">
                    <h2>Loreda Dragomir</h2>
                    <h5 style={{ color: "#7947a2", fontWeight: "500" }}>Head Hunting Agency</h5>{" "}
                    <h4>Managing Director</h4>
                    <h3 className="lead"><span style={{fontWeight: "700", paddingTop: "10px"}}>Industry:</span> Executive Coaching and Development</h3>
                    <h3 className="lead"><span style={{fontWeight: "700", paddingTop: "10px" }}>Place name:</span> Bucharest, Romania</h3>
                    <h3 className="lead"><span style={{fontWeight: "700", paddingTop: "10px" }}>Citizenship:</span> Romanian</h3>
                    <h3 className="lead"><span style={{fontWeight: "700", paddingTop: "10px" }}>Gender:</span> Female</h3>
                    <h3 className="lead"><span style={{fontWeight: "700", paddingTop: "10px" }}>Education:</span>{" "}Master's degree</h3>
                    <h3 className="lead"><span style={{fontWeight: "700", paddingTop: "10px"  }}>Short bio:</span> My name is Loreda. I am a Math Professor, but for the past 20 years I've dedicated myself to HR consultancy. My specializations are Executive Search, Head Hunting, HR, Management and ESG Advisory.</h3>
                </div>
                <div className="col-md-4 padd"> 
                    <h2 className="pb-5" style={{ color: "#ffb6c9"}}>Premium Memeber <br></br>PWN Bucharest</h2>
                    <h2 style={{ color: "#7947a2"}}>Contact me:</h2>
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
                </a><br></br>
                <i className='bx bx-envelope pt-3'><span style={{paddingLeft: "5px", fontSize: "20px"}}>loreda.dragomir@hha.ro</span></i><br></br>
                <i className='bx bx-phone pt-3' ><span style={{paddingLeft: "5px", fontSize: "20px"}}>+40 (731) 100 2820</span></i>
                </div>
                </div>
            </div>

        </section>

      </div>
      <Footer />
    </section>
  );
};

export default Event11;