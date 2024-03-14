import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "assets/img/events/austria/austria1.jpeg", width: 900, height: 1300 },
  { src: "assets/img/events/austria/austria2.jpeg", width: 1000, height: 1300 },
  { src: "assets/img/events/austria/austria3.jpeg", width: 1400, height: 1200 },
  { src: "assets/img/events/austria/austria4.jpeg", width: 1000, height: 1000 },
  { src: "assets/img/events/austria/austria5.jpeg", width: 1000, height: 1200 },
  { src: "assets/img/events/austria/austria6.jpeg", width: 1000, height: 900 },
  { src: "assets/img/events/austria/austria7.jpeg", width: 800, height: 1300 },
  { src: "assets/img/events/austria/austria8.jpeg", width: 1100, height: 900 },
];

const Event6 = () => {
  return (
    <section>
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Advantage Austria</h2>
        </div>

        <section class="my-5 text-center">
          <p class="lead">
            Advantage Austria is the global brand representing the international
            activities of the Austrian Federal Economic Chamber and its regional
            chambers. With a focus on promoting Austria's economic interests
            abroad, Advantage Austria serves as a key partner for businesses
            seeking to engage with Austrian companies, products, and expertise.
            Advantage Austria plays a crucial role in promoting Austrian exports
            and facilitating international trade. The network assists Austrian
            companies in expanding their reach to global markets and helps
            foreign businesses connect with Austrian suppliers and partners.
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

export default Event6;
