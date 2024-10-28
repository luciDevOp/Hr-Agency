import React from "react";
import Footer from "../components/Footer";


const Event19 = () => {
  return (
    <section>
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Alexandru Dragomir – Data Wrangler Head Hunting Agency<br></br></h2>
        </div>
        <div className="row py-5 my-5 justify-content-center align-items-center">
            <div className="col-lg-12 order-md-2 px-5">
              <div className="d-lg-flex post-entry-2 px-5">
                <div className="py-2 px-5">
                  <p className="pb-2 lead " style={{textAlign: "center"}}>
                  Alexandru Dragomir has double citizenships - USA and Romanian and has relevant experience in
                    analysis, research, data base administration and technical support in well-known companies
                    such as Stanton Chase International, Kienbaum Executive Search GmbH, CNA Internationals,
                    Bitdefender.
                  </p>
                    <p className="pb-2 lead" style={{textAlign: "center"}}>
                    Over the years, Alexandru was responsible for collecting, filtering, sorting, categorizing numerous relevant information and data related to recruitment projects, by maintaining,  securing, and operating confident databases.
                    </p>
                    <p className="pb-2 lead" style={{textAlign: "center"}}>
                    In his current role as Data Wrangler he is ensuring that all data is correctly stored and retrieved,  that confidentiality is kept, and also implementing new features and troubleshooting all issues.
                    </p>
                    <p className="pb-2 lead" style={{textAlign: "center"}}>
                    Alexandru had also jobs in his areas of interests such as music, cooking, writing and translating  books, nature, gardening, dog caring.
                    </p>
                    <p className="lead" style={{textAlign: "center"}}>
                        <a href="https://www.linkedin.com/in/alexandru-dragomir-88b041ab/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 mb-4 d-flex justify-content-center">
                        <img src="assets/img/alexdragomir.jpg" alt="Expo 1" style={{ height: "25vh" }} />
                    </div>
                </div>
                </div>
          </div>
      <Footer />
    </section>
  );
};

export default Event19;