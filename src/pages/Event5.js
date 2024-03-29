import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "assets/img/events/pwn/pwn1.jpeg", width: 1800, height: 1000 },
  { src: "assets/img/events/pwn/pwn2.jpeg", width: 1800, height: 1000 },
  { src: "assets/img/events/pwn/pwn3.jpeg", width: 1800, height: 900 },
  { src: "assets/img/events/pwn/pwn4.jpeg", width: 1100, height: 900 },
  { src: "assets/img/events/pwn/pwn5.jpeg", width: 1300, height: 1200 },
];

const Event5 = () => {
  return (
    <section>
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>Professional Women Network Romania</h2>
        </div>

        <section className="my-5 text-center">
          <p className="lead">
            The Professional Women Network Romania (PWNR) is a dynamic and
            empowering community dedicated to supporting and advancing the
            professional growth of women in various industries across Romania.
            This network serves as a platform for connecting, mentoring, and
            advocating for women to achieve their full potential in their
            careers and leadership roles. PWNR provides a vibrant space for
            professional women to connect, share experiences, and build
            meaningful relationships. Regular networking events, seminars, and
            workshops create opportunities for collaboration and knowledge
            exchange.
          </p>
        </section>

        <div className="container">
          <PhotoAlbum
            layout="rows"
            photos={photos}
            columns={2}
            spacing={10}
            padding={10}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Event5;
