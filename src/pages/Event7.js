import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";

const photos = [
  {
    src: "assets/img/events/diversity/diversity1.jpeg",
    width: 1500,
    height: 900,
  },
  {
    src: "assets/img/events/diversity/diversity2.jpeg",
    width: 1500,
    height: 900,
  },
  {
    src: "assets/img/events/diversity/diversity3.jpeg",
    width: 1000,
    height: 1400,
  },
];

const Event7 = () => {
  return (
    <section>
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Romanian Diversity Chamber of Commerce</h2>
        </div>

        <section className="my-5 text-center">
          <p className="lead">
            The Romanian Diversity Chamber of Commerce (RDCC) is a dynamic
            organization committed to promoting diversity and inclusion in the
            business landscape of Romania. Dedicated to fostering an environment
            where businesses thrive on the strengths of diverse perspectives,
            the RDCC serves as a hub for enterprises that prioritize and
            champion diversity in their operations. The RDCC builds a vibrant
            and inclusive business network that brings together companies,
            entrepreneurs, and professionals committed to diversity and
            inclusion. Through networking events, workshops, and conferences,
            the chamber provides a platform for meaningful connections.
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

export default Event7;
