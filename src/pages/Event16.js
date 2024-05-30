import React from "react";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";


const Event16 = () => {
  return (
    <section>
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Annual General Meeting IMD<br/> International London</h2>
        </div>

        <div className="row mt-5 justify-content-center align-items-center">
            <div className="col-lg-12 order-md-2">
              <div className="d-lg-flex post-entry-2">
                <div className="pt-5">
                  <p className="pb-5 lead" style={{textAlign: "center"}}>
                                Last week was a great honor for me as I participated in the Annual General Meeting of IMD International Search Group in London, event wonderfully hosted by our partner in UK, MINERVA.
                I would like to express my gratitude to <a href='https://www.linkedin.com/in/ben-tucker-7638095/'>Ben Tucker</a>, <a href='https://www.linkedin.com/in/kerry-shepherd-b1512a1/'>Kerry Shepherd</a>, and their amazing team for the great planning and organization of this event. Their hard work and dedication made this event a success 🙏
                I would also like to extend my thanks to Estelle Carrère for her contribution and helping hand and to our guest speakers <a href='https://www.linkedin.com/in/adam-habib-70409397/'>Adam Habib</a>, <a href='https://www.linkedin.com/in/eva-vati/'>Eva Vati</a> 🌍 and <a href="https://www.linkedin.com/in/ben-verinder/">Ben Verinder</a>.
                <br/>
                <p className="lead pt-5" style={{}}>The event was not only a great opportunity to network and learn from industry leaders, but also in depth understanding of trends, IMD added value, AI added value, social media impact, sustainability and much more.
Being the first such event for <a href='https://www.linkedin.com/company/headhuntingagency/'>Head Hunting Agency, part of IMD International Search Group, Partner Romania for Best Places to Work</a>, we've felt welcomed, inspired, fully understood the IMD added value.
Looking forward to attending more events like this in the future! 🚀</p>
                  </p>


                  <div className="video-container londra-video">
                    <ReactPlayer
                        url="./assets/img/video/londra.mp4"
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                    </div>
                    <p className="pt-5" style={{textAlign: "center", paddingBottom: "0px"}}>Special thanks to <a href="https://www.linkedin.com/in/josejruiz/">Jose Ruiz</a>, <a href="https://www.linkedin.com/in/anthony-albers-bakker/">Anthony Albers</a>, <a href="https://www.linkedin.com/in/simona-cremascoli-a8b956/">Simona Cremascoli</a>, <a href="https://www.linkedin.com/in/evacnielsen/">Eva Nielsen</a>, <a href="https://www.linkedin.com/in/charlottecastelein/">Charlotte Castelein</a>, <a href='https://www.linkedin.com/in/patrick-mclean-2142b/'>Patrick McLean</a>, <a href='https://www.linkedin.com/in/pavel-smejkal-9207311b/'>Pavel Smejkal</a>, <a href='https://www.linkedin.com/in/terhi-heikkinen-22169879/'>Terhi Heikkinen</a>, <a href='https://www.linkedin.com/in/terhi-heikkinen-22169879/'>Mikael Silvennoinen</a>, <a href='https://www.linkedin.com/in/mimmasilvennoinen/'>Mimma Silvennoinen</a>, <a href='https://www.linkedin.com/in/sebalindqvist/'>Sebastian Lindqvist</a>, <a href='https://www.linkedin.com/in/sari-salojarvi-a1aa421/'>Sari Salojarvi</a>, <a href='https://www.linkedin.com/in/pascalbohusircaexecutivesearch/'>Pascal Bohu</a>, <a href='https://www.linkedin.com/in/arndt-masuch-3172844/'>Arndt Masuch</a>, <a href='https://www.linkedin.com/in/charliesolorzano/'>Charlie Solorzano</a>, <a href='https://www.linkedin.com/in/job-de-visser-4b851/'>Job de Visser</a>, <a href='https://www.linkedin.com/in/peramarum/'>Per A Marum</a>, <a href='https://www.linkedin.com/in/richardkaluzynski/'>Richard Kaluzynski</a>, <a href='https://www.linkedin.com/in/olle-olofsson-97939117/'>Olle Olofsson</a>, <a href='https://www.linkedin.com/in/maltemuellerprofessionals/'>Malte (Müller) Mueller</a>, <a href='https://www.linkedin.com/in/jorgedavalos/'>Jorge Davalos M.</a>, <a href='https://www.linkedin.com/in/silviafloress/'>Silvia Flores</a>, <a href='https://www.linkedin.com/in/cullen-onstott/'>Cullen Onstott</a>, <a href='https://www.linkedin.com/in/jennifer-silvester/'>Jennifer Silvester</a>!</p>

                  <div className="d-flex justify-content-center align-items-center pt-5">
                    
                    <a href="https://hha.ro/" style={{textAlign: "center"}}>
                        #IMDInternationalSearchGroup #AnnualGeneralMeeting #NetworkingEvent #IndustryLeaders
                        #London #WeAreIMD
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <Footer />
    </section>
  );
};

export default Event16;
