import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";


const photos = [
    { src: "assets/img/network1.jpg", width: 2900, height: 2500 },
    { src: "assets/img/network2.jpg", width: 2400, height: 2900 },
  ];

const Event12 = () => {
  return (
    <section>
      <div className="container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Networking Breakfast<br></br> by Romanian Diversity Chamber of Commerce and UNHCR </h2>
        </div>
        <div className="row justify-content-center pt-3">
            <img
            className="article-image"
            src="assets/img/network.jpg"
            alt=""
            class="img-fluid"
            style={{maxWidth: "70%"}}
            />
        </div>
        <div className="row py-5 my-5 justify-content-center align-items-center">
            <div className="col-lg-12 order-md-2">
              <div className="d-lg-flex post-entry-2">
                <div className="py-5">
                  <p className="pb-5 lead" style={{textAlign: "center", fontWeight: "500"}}>
                  Great start of the day with Networking Breakfast by Romanian Diversity Chamber of Commerce and UNHCR, the UN Refugee Agency with very interesting topic "Accelerating Business Growth with Refugee Talent in Romania".
                  </p>
                  <p style={{textAlign: "center"}}>
                  <h4>Main discussion points:<br></br></h4>
                    💡 The social importance of integration of the workforce;<br></br>
                    💡 Barrier language and how to overcome it;<br></br>
                    💡 The need for a viable solution for daycare;<br></br>
                    💡 The business-driven benefits of employing refugees;<br></br>
                    💡 Strategies of work integration from the business perspective;<br></br>
                    💡 Sharing of success stories, best practices, great tools and platforms.<br></br>
                  </p>
                  <p className="pt-5" style={{textAlign: "center", paddingBottom: "20px"}}>Special thanks to <a href="https://www.linkedin.com/company/dentons/">Dentons</a>, <a href="https://www.linkedin.com/in/perry-v-zizzi-98a209/">Perry V. Zizzi</a>, <a href="https://www.linkedin.com/company/romanian-diversity-chamber-of-commerce/">Romanian Diversity Chamber of Commerce</a>, <a href="https://www.linkedin.com/in/lestatmonroe/">Lestat Monroe</a>, <a href="https://www.linkedin.com/in/andreea-bereczki/">Andreea Bereczki</a>!</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a href="#" style={{textAlign: "center"}}>#business #growth #refugeetalent #romania</a>
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

export default Event12;