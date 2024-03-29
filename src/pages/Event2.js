import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";
import ReactPlayer from "react-player";

const photos = [
  { src: "assets/img/events/nrcc/nrcc1.jpeg", width: 1080, height: 1200 },
  { src: "assets/img/events/nrcc/nrcc2.jpeg", width: 1080, height: 1200 },
  { src: "assets/img/events/nrcc/nrcc3.jpeg", width: 1000, height: 1900 },
  { src: "assets/img/events/nrcc/nrcc4.jpeg", width: 1000, height: 1300 },
  { src: "assets/img/events/nrcc/nrcc5.jpeg", width: 900, height: 1600 },
  { src: "assets/img/events/nrcc/nrcc6.jpeg", width: 900, height: 900 },
  { src: "assets/img/events/nrcc/nrcc7.jpeg", width: 900, height: 1600 },
  { src: "assets/img/events/nrcc/nrcc8.jpeg", width: 800, height: 1500 },
  { src: "assets/img/events/nrcc/nrcc9.jpeg", width: 1000, height: 700 },
  { src: "assets/img/events/nrcc/nrcc10.jpeg", width: 800, height: 2000 },
  { src: "assets/img/events/nrcc/nrcc11.jpeg", width: 1000, height: 900 },
  { src: "assets/img/events/nrcc/nrcc12.jpeg", width: 1000, height: 1300 },
  { src: "assets/img/events/nrcc/nrcc13.jpeg", width: 800, height: 1200 },
  { src: "assets/img/events/nrcc/nrcc14.jpeg", width: 1000, height: 900 },
  { src: "assets/img/events/nrcc/nrcc15.jpeg", width: 1000, height: 1200 },
  { src: "assets/img/events/nrcc/nrcc16.jpeg", width: 1000, height: 700 },
  { src: "assets/img/events/nrcc/nrcc17.jpeg", width: 1000, height: 700 },
  { src: "assets/img/events/nrcc/nrcc18.jpeg", width: 900, height: 700 },
  { src: "assets/img/events/nrcc/nrcc19.jpeg", width: 1000, height: 1000 },
  { src: "assets/img/events/nrcc/nrcc20.jpeg", width: 600, height: 670 },
  { src: "assets/img/events/nrcc/nrcc21.jpeg", width: 700, height: 600 },
  { src: "assets/img/events/nrcc/nrcc22.jpeg", width: 600, height: 800 },
  { src: "assets/img/events/nrcc/nrcc23.jpeg", width: 1000, height: 600 },
];

const Event2 = () => {
  return (
    <section>
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Netherlands Romanian Chamber of Commerce</h2>
        </div>

        <section className="my-5 text-center">
          <p className="lead">
            The Netherlands Romanian Chamber of Commerce serves as a vital
            platform facilitating economic and trade relations between the
            Netherlands and Romania. This dynamic organization plays a pivotal
            role in fostering business connections, promoting bilateral trade,
            and supporting the interests of its members in both countries. The
            NRCC operates as a robust networking hub, bringing together
            businesses, entrepreneurs, and professionals from the Netherlands
            and Romania. Through various events, seminars, and business forums,
            it creates opportunities for meaningful connections and
            collaborations.
          </p>
        </section>

        <div className="container">
          <PhotoAlbum
            layout="rows"
            photos={photos}
            columns={5}
            spacing={10}
            padding={10}
          />
        </div>
        <div className="video-container mt-5">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=methfxzvNnk&ab_channel=NRCCTV"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Event2;
