import React from "react";
import Footer from "../components/Footer";

function Event21() {
  return (
    <section id="event">
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Presenting Bogdan Costinescu</h2>
        </div>

        <section className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <div className="pic-bogdan">
                <img
                  src="assets/img/bogdan.jpg"
                  className="img-fluid rounded-circle shadow"
                  alt="Bogdan Costinescu"
                />
              </div>
            </div>

            <div className="col-md-8">
              <div className="bio-content">
                <h3 >We are pleased to introduce Bogdan Costinescu</h3>
                <p style={{color: '#d082f7', fontSize:'20px'}} className="font-italic mb-5">Partner Head Hunting Agency</p>

                <h4>Educational Background</h4>
                <p>Bogdan graduated from the Mechanical Faculty of Polytechnic University in Bucharest where he earned a master’s degree in engineering.</p>

                <h4>Professional Experience</h4>
                <p>Bogdan's professional journey includes diverse roles in engineering, followed by import export and retail, as a SME entrepreneur.</p>

                <h4>Motivation and Aspirations</h4>
                <p>With a passion for helping others, Bogdan is dedicated to supporting the recruitment, training, and development of employees in order to find best matches and valuable careers rather than simple jobs.</p>

                <h4>Personal Attributes</h4>
                <p>Bogdan considers himself a highly adaptable and communicative individual, with a keen eye for detail. He is committed to working with passion to help others find success in their careers.</p>

                <a
                  href="https://www.linkedin.com/in/bogdan-costinescu-00321085/"
                  className="btn btn-primary mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default Event21;
