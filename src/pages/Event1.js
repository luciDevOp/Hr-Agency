import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "assets/img/events/swiss/swiss1.jpeg", width: 1000, height: 900 },
  { src: "assets/img/events/swiss/swiss2.jpeg", width: 1000, height: 1300 },
  { src: "assets/img/events/swiss/swiss3.jpeg", width: 700, height: 800 },
  { src: "assets/img/events/swiss/swiss4.jpeg", width: 1000, height: 1100 },
  { src: "assets/img/events/swiss/swiss5.jpeg", width: 1000, height: 1200 },
  { src: "assets/img/events/swiss/swiss6.jpeg", width: 900, height: 600 },
  { src: "assets/img/events/swiss/swiss7.jpeg", width: 800, height: 900 },
];

const Event1 = () => {
  return (
    <section>
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Swiss Chamber of Commerce</h2>
        </div>

        <section className="my-5 text-center">
          <p className="lead">
            The Swiss Chamber of Commerce is a dynamic and influential
            organization that serves as a central hub for businesses,
            professionals, and entrepreneurs within Switzerland and on the
            international stage. Established with the mission of promoting
            economic growth, fostering collaboration, and advocating for the
            interests of the business community, the Swiss Chamber of Commerce
            plays a pivotal role in shaping and advancing the country's
            commercial landscape.
          </p>
        </section>

        <div className="container">
          <PhotoAlbum layout="rows" photos={photos} spacing={10} padding={10} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Event1;
