import React from "react";
import Footer from "../components/Footer";

const EventsGallery = () => {
  return (
      <div className="container my-4">
          <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-3">
                <img 
                      src="assets/img/events/age1.jpg" 
                      alt="Event 1" 
                      className="img-fluid rounded"
                  />
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center mb-3">
                  <img 
                      src="assets/img/events/age2.jpg" 
                      alt="Event 2" 
                      className="img-fluid rounded"
                  />
              </div>
          </div>
      </div>
  );
};


  const Hashtags = () => {
    const hashtags = [
      "ageinclusion",
      "50isthenew30",
      "ageisjustanumber",
      "rdcc",
      "AndreeaVasile",
      "LestatMonroe",
      "SandraSoniaMogoș",
      "FlorentinaCiontea(Nuta)",
      "AndreeaCiulacu",
      "AylaMengazi",
      "FlaviaTioc",
      "BradPalas",
      "PhilipChoban",
      "RazvanBran",
      "CatalinVasile",
      "SiminaPatrascoiu",
      "LuminitaFlorea",
      "ColinCLovering",
      "HerminaMihaelaRadu",
      "EsteraAnghelescu",
      "AndraHuidu",
      "CrisAga",
      "CharlesCrocker",
      "IrinaCrocker",
      "IulianSirbu",
      "VeronicaIgnat",
      "BiancaBarascu",
      "DaianaDragoi",
      "HeadHuntingAgency",
      "LoredaSilviaDragomir",
      "OrangePluxeeRomania",
      "DeutscheBahnCargoRomania",
      "BRD-GroupeSocieteGenerale",
      "OMVPetrom",
      "Google",
      "TeliosCare",
      "Lenovo",
      "RaiffeisenBankRomania",
      "PhilipMorrisInternational",
      "Primark",
      "KauflandRomania&Moldova"
    ];
  
    return (
      <div style={{ textAlign: "center" }}>
        {hashtags.map((hashtag, index) => (
          <a
            key={index}
            href="https://hha.ro/"
            style={{ textAlign: "center", margin: "2px", display: "inline-block" }}
          >
            #{hashtag}
          </a>
        ))}
      </div>
    );
  };

const Event13 = () => {
  return (
    <section>
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Age Inclusive Workplace by Romanian Diversity Chamber of Commerce</h2>
          <h3>Loreda Dragomir panlist</h3>
        </div>
        <div className="row py-5 my-5 justify-content-center align-items-center">
            <div className="col-lg-12 order-md-2">
              <div className="d-lg-flex post-entry-2">
                <div className="py-5">
                  <p className="pb-5 lead" style={{textAlign: "center", fontWeight: "500"}}>
                  💜 AGE INCLUSIVE WORKPLACE CONFERENCE, Bucharest, Romania 💜 
                    Thank you, Romanian Diversity Chamber of Commerce for organizing another great event with an interesting and controversial topic <a href="https://hha.ro/" style={{textAlign: "center"}}>#ageinclusion</a>! 
                    Thank you The Marmorosch Bucharest | Autograph Collection for hosting us!
                    Some of the insights from yesterday:
                    When it comes to <a href="https://hha.ro/" style={{textAlign: "center"}}>#ageinclusion</a>
                  </p>
                  <h2 style={{textAlign: "center"}}> Main discussion points:<br></br></h2>
                  <p style={{textAlign: "center"}}>
                  💥 EDUCATE, EDUCATE, EDUCATE <a href="https://hha.ro/" style={{textAlign: "center"}}>#educationiskey</a><br></br>
                  💥 Raise Awareness;<br></br>
                  💥 DISPEL & OVERCOME STEREOTYPES; Don't be shy in addressing the negative ones;<br></br>
                  💥 OPEN COMMUNICATION: Encourage open conversations about age related biases;<br></br>
                  💥 MITIGATE;<br></br>
                  💥 ENCOURAGE COLLABORATION across generations;<br></br>
                  💥 POINT OUT COMMONALITIES that all employees have and value;<br></br>
                  💥 Focus on different ways of working to BRING PEOPLE TOGETHER;<br></br>
                  💥 AVOID ASSUMPTIONS AND GENERALIZATIONS related to mature, experienced employees ( level of energy, high financial expectations, career aspirations, desire to develop, willingness to learn, resistance to change, etc.)<br></br>

                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <Hashtags />
                  </div>
                  </div>
                </div>
              </div>

            </div>
            <EventsGallery />
          </div>
      <Footer />
    </section>
  );
};

export default Event13;