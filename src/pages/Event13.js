import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";


const photos = [
    { src: "assets/img/best3.jpg", width: 2200, height: 1400 },
    { src: "assets/img/best4.jpg", width: 3000, height: 4000 },
  ];

const Event13 = () => {
  return (
    <section>
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Launching of Strategic Partnership -<br></br>Centrul de Limbi Straine A_BEST & <br></br>AC Language School Texas, USA</h2>
        </div>
        <div className="row justify-content-center pt-3">
            <img
            className="article-image img-fluid"
            src="assets/img/best2.jpg"
            alt=""
            style={{maxWidth: "100%"}}
            />
        </div>
        <div className="row py-5 my-5 justify-content-center align-items-center">
            <div className="col-lg-12 order-md-2">
              <div className="d-lg-flex post-entry-2">
                <div className="py-5">
                  <p className="pb-5 lead" style={{textAlign: "center", fontWeight: "500"}}>
                  Loreda Dragomir, Managing Partner of Head Hunting Agency was part of the Launching Event of the strategic partnership between Centrul de Limbi Straine A_BEST , Bucharest, Romania and AC Language School Texas, USA.
                  </p>
                  <h2 style={{textAlign: "center"}}> Main discussion points:<br></br></h2>
                  <p style={{textAlign: "center"}}>
                  ✨The main conclusion of last evening's event is that proficiency in foreign languages is essential for achieving career access and success.<br></br>
                  🤝 The event was a wonderful opportunity to connect or reconnect with Cezar Iulian Armasu, Iulia Lascau, Irina Stanciuc, Richard Peers Charles Vernon,<br></br> Isfahan Doekhie Crina Diculescu Andrei Dicher Gorun Ivancu Liliana Munteanu Cecilia Stănia.<br></br>
                  ⭐ Thank you for insightful messages from last night speakers: Angeles Chavez, Elias Alonzo, Eli Corso-Phinney, Michael Makar, Ileana Botez, MBA,<br></br> Costin Tudor, Mihaela-Loredana Nabăr and wonderful artistic moment with Angela Stratulat.<br></br>
                  </p>
                  <p className="pt-5" style={{textAlign: "center", paddingBottom: "20px"}}>Best of Luck, Aura ICODIN, Centrul de Limbi Straine A_BEST & team!</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a href="#" style={{textAlign: "center"}}>#LanguageLearning #Education #StrategicPartnership</a>
                  </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="container">
                <PhotoAlbum layout="rows" photos={photos} spacing={10} padding={20} />
            </div>
          </div>
      <Footer />
    </section>
  );
};

export default Event13;