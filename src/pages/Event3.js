import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "assets/img/events/brcc/brcc1.jpeg", width: 1000, height: 1100 },
  { src: "assets/img/events/brcc/brcc2.jpeg", width: 1000, height: 1000 },
  { src: "assets/img/events/brcc/brcc3.jpeg", width: 1000, height: 1300 },
  { src: "assets/img/events/brcc/brcc4.jpeg", width: 1000, height: 1000 },
  { src: "assets/img/events/brcc/brcc5.jpeg", width: 1200, height: 800 },
  { src: "assets/img/events/brcc/brcc6.jpeg", width: 1300, height: 900 },
  { src: "assets/img/events/brcc/brcc7.jpeg", width: 800, height: 900 },
  { src: "assets/img/events/brcc/brcc8.jpeg", width: 1300, height: 900 },
  { src: "assets/img/events/brcc/brcc9.jpeg", width: 1300, height: 900 },
];

const Event3 = () => {
  return (
    <section>
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>British Romanian Chamber of Commerce</h2>
        </div>

        <section className="my-5 text-center">
          <p className="lead">
            The British Romanian Chamber of Commerce serves as a pivotal bridge
            connecting the business communities of the United Kingdom and
            Romania. With a commitment to fostering economic growth and
            collaboration, the BRCC plays a crucial role in promoting trade,
            investment, and cultural exchange between the two nations. The BRCC
            acts as a vibrant networking platform, hosting events, seminars, and
            business gatherings that facilitate connections between British and
            Romanian entrepreneurs, professionals, and organizations. These
            interactions create opportunities for partnerships, collaborations,
            and shared insights.
          </p>
        </section>

        <div className="container">
          <PhotoAlbum
            layout="rows"
            photos={photos}
            columns={5}
            spacing={20}
            padding={10}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Event3;
