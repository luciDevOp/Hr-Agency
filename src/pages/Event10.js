import React from "react";
import Footer from "../components/Footer";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "assets/img/wr1.jpeg", width: 1200, height: 1700 },
  { src: "assets/img/wr2.jpeg", width: 2000, height: 1500 },
  { src: "assets/img/wr3.jpeg", width: 1200, height: 1700 },
];

const Event10 = () => {
  return (
    <section>
      <div className="article-container container" data-aos="fade-up">
        <div className="section-title blog-header">
          <h2>WOMENRISE</h2>
        </div>

        <section class="my-5 text-center">
          <p class="lead">

          I am ecstatic to announce my participation in the third edition of <span style={{ color: "#7947a2", fontWeight: "700" }}>WOMENRISE</span>{" "}, a prestigious event curated by <a href="https://www.linkedin.com/company/dynamic-business-connections/">Dynamic Business Connections</a>, celebrating the prowess of women leaders and innovators who have left an indelible mark on the business landscape.

Against the backdrop of the magnificent <a href="https://visitbucharest.today/cesianu-racovita-palace/">Cesianu-Racovita Palace/Artmark</a> location, this year's gathering promises an unparalleled experience. Nestled within the opulent surroundings of the palace, attendees will immerse themselves in an atmosphere conducive to meaningful exchanges, the exploration of cutting-edge solutions, and the dissemination of best practices.<br></br>

Set within this dynamic, interactive, and professional environment, <span style={{ color: "#7947a2", fontWeight: "700" }}>WOMENRISE</span>{" "} aims to foster collaboration, inspire creativity, and empower women to reach new heights in their respective fields. As we convene amidst the grandeur of this historic venue, I am eager to engage with fellow trailblazers, glean insights, and contribute to the collective journey of female leadership and innovation.<br></br>
          </p>
        </section>

        <div className="container">
          <PhotoAlbum layout="rows" photos={photos} spacing={10} padding={20} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Event10;