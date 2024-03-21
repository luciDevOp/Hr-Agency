import React, { useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Blog() {
  return (
    <div data-aos="fade-up">
      <div className="section-title blog-header" data-aos="fade-up">
        <h2>People for People</h2>
      </div>
      <section id="hero-slider" class="hero-slider">
        <div class="container-md" data-aos="fade-in">
          <div class="row">
            <div class="col-12">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ autoplay: true }}
              >
                <SwiperSlide>
                  <div
                    className="img-bg d-flex align-items-end"
                    style={{
                      backgroundImage: `url('assets/img/post-slide-1.png')`,
                      backgroundSize: "80%",
                    }}
                  >
                    <div className="img-bg-inner">
                      <h2 style={{ color: "#fff" }}>
                        Swiss Chamber of Commerce
                      </h2>
                      <a href="https://www.ccer.ro" style={{ color: "#fff" }}>
                        Visit Site
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="img-bg d-flex align-items-end"
                    style={{
                      backgroundImage: `url('assets/img/nrcc.png')`,
                      backgroundSize: "60%",
                    }}
                  >
                    <div className="img-bg-inner">
                      <h2 style={{ color: "#fff" }}>
                        Netherlands Romanian Chamber of Commerce
                      </h2>
                      <a href="https://www.nrcc.ro" style={{ color: "#fff" }}>
                        Visit Site
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="img-bg d-flex align-items-end"
                    style={{
                      backgroundImage: `url('assets/img/post-slide-3.jpg')`,
                      backgroundSize: "50%",
                    }}
                  >
                    <div className="img-bg-inner">
                      <h2 style={{ color: "#fff" }}>
                        British Romanian Chamber of Commerce
                      </h2>
                      <a href="https://brcconline.eu" style={{ color: "#fff" }}>
                        Visit Site
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="img-bg d-flex align-items-end"
                    style={{
                      backgroundImage: `url('assets/img/post-slide-4.jpg')`,
                      backgroundSize: "40%",
                    }}
                  >
                    <div className="img-bg-inner">
                      <h2 style={{ color: "#fff" }}>
                        Romanian Diversity Chamber of Commerce
                      </h2>
                      <a href="https://www.rdcc.ro" style={{ color: "#fff" }}>
                        Visit Site
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="img-bg d-flex align-items-end"
                    style={{
                      backgroundImage: `url('assets/img/post-slide-4.png')`,
                      backgroundSize: "40%",
                    }}
                  >
                    <div className="img-bg-inner">
                      <h2 style={{ color: "#fff" }}>
                        Professional Women Network Romania
                      </h2>
                      <a
                        href="https://pwnbucharest.net"
                        style={{ color: "#fff" }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="img-bg d-flex align-items-end"
                    style={{
                      backgroundImage: `url('assets/img/post-slide-5.jpeg')`,
                    }}
                  >
                    <div className="img-bg-inner">
                      <h2 style={{ color: "#fff" }}>
                        Deutschsprachiger Wirtschaftsklub Nord-Transilvanien
                      </h2>
                      <a href="https://www.dwnt.ro" style={{ color: "#fff" }}>
                        Visit Site
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="img-bg d-flex align-items-end"
                    style={{
                      backgroundImage: `url('assets/img/post-slide-6.jpg')`,
                      backgroundSize: "70%",
                    }}
                  >
                    <div className="img-bg-inner">
                      <h2 style={{ color: "#fff" }}>Advantage Austria</h2>
                      <a
                        href="https://www.advantageaustria.org"
                        style={{ color: "#fff" }}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <div className="section-title blog-header">
        <h2>Events</h2>
      </div>
      <section id="posts" class="posts">
        <div class="container" data-aos="fade-up">
          <div class="row g-5">
            <div class="col-lg-4">  
              <div class="post-entry-1 lg">
                <a href="/blog-event-1">
                  <img src="assets/img/swiss.jpeg" alt="" class="img-fluid" />
                </a>
                <div class="post-meta"></div>
                <h2>
                  <a href="/blog-event-1">Swiss Chamber of Commerce</a>
                </h2>
                <p class="mb-4 d-block">
                  The Swiss Chamber of Commerce serves as a pivotal organization
                  dedicated to fostering economic and business relations within
                  Switzerland and beyond. As a key player in the business
                  community, it aims to provide a platform for networking,
                  collaboration, and knowledge exchange among professionals,
                  companies, and stakeholders.
                </p>
              </div>
              <div class="post-entry-1 lg">
                <a href="/blog-event-8">
                  <img src="assets/img/ramona.jpeg" alt="" class="img-fluid" />
                </a>
                <div class="post-meta"></div>
                <h2>
                  <a href="/blog-event-8">Presenting Ramona Ungureanu</a>
                </h2>
              </div>
              <div class="post-entry-1 pt-5">
                <a href="/blog-event-11">
                  <img src="assets/img/events/pwn/pwn5.jpeg" alt="" class="img-fluid" />
                </a>
                <div class="post-meta"></div>
                <h2>
                  <a href="/blog-event-11">HHA proud member of Professional Women Network</a>
                </h2>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="row g-5">
                <div class="col-lg-6 border-start custom-border">
                  <div class="post-entry-1">
                    <a href="/blog-event-2">
                      <img
                        src="assets/img/nrcc.jpeg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="post-meta"></div>
                    <h2>
                      <a href="/blog-event-2">
                        Netherlands Romanian Chamber of Commerce
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="/blog-event-3">
                      <img
                        src="assets/img/brcc.jpeg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="post-meta"></div>
                    <h2>
                      <a href="/blog-event-3">
                        British Romanian Chamber of Commerce
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="/blog-event-4">
                      <img
                        src="assets/img/dwnt.jpeg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="post-meta"></div>
                    <h2>
                      <a href="/blog-event-4">
                        Deutschsprachiger Wirtschaftsklub Nord-Transilvanien
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="/blog-event-10">
                      <img
                        src="assets/img/wr2.jpeg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="post-meta"></div>
                    <h2>
                      <a href="/blog-event-10">
                      The Third Edition of WOMENRISE
                      </a>
                    </h2>
                  </div>  
                </div>
                <div class="col-lg-6 border-start custom-border">
                  <div class="post-entry-1">
                    <a href="/blog-event-5">
                      <img src="assets/img/pwn.jpeg" alt="" class="img-fluid" />
                    </a>
                    <div class="post-meta"></div>
                    <h2>
                      <a href="/blog-event-5">
                        Professional Women Network Romania
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="/blog-event-6">
                      <img
                        src="assets/img/austria.jpeg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="post-meta"></div>
                    <h2>
                      <a href="/blog-event-6">Advantage Austria</a>
                    </h2>
                  </div>
                  <div class="post-entry-1">
                    <a href="/blog-event-7">
                      <img
                        src="assets/img/diversity.jpeg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="post-meta"></div>
                    <h2>
                      <a href="/blog-event-7">
                        Romanian Diversity Chamber of Commerce
                      </a>
                    </h2>
                  </div>
                  <div class="post-entry-1 lg">
                    <a href="/blog-event-9">
                      <img
                        src="assets/img/robert-present.jpeg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <div class="post-meta"></div>
                    <h2>
                      <a href="/blog-event-9">Presenting Robert Negru</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center event-bg ">
        <div class="col-md-5 p-lg-5 mx-auto article-info">
          <h1 class="display-4 fw-normal" style={{ color: "#fff" }}>
            Loreda Dragomir & Robert Negru{" "}
          </h1>
          <p class="lead fw-normal" style={{ color: "#fff" }}>
            Bucharest Business Club & Connections by Consiliul Patronatelor ESG
            din Romania
          </p>
        </div>
      </div>

      <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div class="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden diploma"></div>
        <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden event"></div>
      </div>

      <div class="category-section my-5 py-5">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 order-md-2">
              <div class="d-lg-flex post-entry-2">
                <a class="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
                  <img
                    className="article-image"
                    src="assets/img/diploma-loreda.jpeg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
                <div className="py-5 mt-5">
                  <h1>
                    Light Into Europe Association the Community Support Award
                  </h1>
                  <p>
                    In the presence of His Majesty and the distinguished members
                    of the Light Into Europe Association, we are deeply honored
                    to be recognized for our efforts in supporting and enriching
                    the lives of those around us. This award serves as both
                    validation and inspiration, propelling us forward in our
                    mission to make a meaningful difference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center my-5">
            <div class="col-lg-6">
              <div class="border-bottom">
                <img
                  src="assets/img/diploma-sef.jpeg"
                  alt=""
                  class="img-fluid article-img"
                />
                <h5 class="my-3">
                  Honored to receive from His Majesty Mr. Giles Portman, new
                  British Ambassador and Light Into Europe Association the
                  Community Support Award
                </h5>
              </div>
            </div>
            <div class="col-lg-6">
              <div>
                <img
                  src="assets/img/diploma-group.jpeg"
                  alt=""
                  class="img-fluid article-img"
                />
                <h5 class="my-3">
                  We extend our heartfelt appreciation to His Majesty Mr. Giles
                  Portman, the British Embassy, and the Light Into Europe
                  Association for this remarkable recognition
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center">
              <img src="assets/img/breakfast.jpeg" className="img-fluid" />
            </div>
            <h3
              className="d-flex justify-content-center align-items-center pt-5"
              style={{ textAlign: "center"}}
            >
              Business Breakfast - The Right Business Choice
            </h3>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center">
              <img src="assets/img/brcc-ss.png" className="img-fluid brcc-ss" />
            </div>
            <h3
              className="d-flex justify-content-center align-items-center pt-5"
              style={{textAlign: "center"}}
            >
              As of March 2024, HHA proud member of BRCC
            </h3>
          </div>
        </div>
        <div class="row py-5 my-5 justify-content-center align-items-center">
            <div class="col-lg-6 order-md-2">
              <div class="d-lg-flex post-entry-2">

                <div className="py-5 mt-5">
                  <h3 style={{textAlign: "center"}}>
                   <a href="https://business-mark.ro/event/tomorrowwork-2024/">Tomorrow@Work Conference</a>, organized by <a href="https://www.linkedin.com/company/businessmark/">BusinessMark</a> at  <a href="https://www.linkedin.com/company/jw_marriott/">JW Marriott</a> Bucharest Grand Hotel
                  </h3>
                  <p style={{textAlign: "center"}}>
                  💡 People with the help of AI generates the success in business - not only people, not only AI.<br></br>
                  💡There is need for complex technologies, but there is also need for good people;<br></br>
                  💡In banking there are four necessary skills for success: digital skills, regulatory, data literacy, cybersecurity.<br></br>
                  💡In terms of importance programming AI will be replaced with interacting with AI<br></br>
                  </p>
                  <p style={{textAlign: "center", paddingBottom: "20px"}}>It was great to meet or to meet again, or watch their presentation people from HR community such as <a href="https://www.linkedin.com/in/ginacruceru/">Gina Cruceru</a>, <a href="https://www.linkedin.com/in/andreea-mihnea-568469/">Andreea Mihnea</a>, <a href="https://www.linkedin.com/in/danadobrescu/">Dana Dobrescu</a>, <a href="https://www.linkedin.com/in/florentinagreger/">Florentina Greger</a>, <a href="https://www.linkedin.com/in/simona-ciora/">Simona Ciora</a>, <a href="https://www.linkedin.com/in/gabriela-costache-6521a82/">Gabriela COSTACHE</a>, <a href="https://www.linkedin.com/in/andreicretu/">Andrei Cretu</a>, <a href="https://www.linkedin.com/in/timeamozgirs/">Timea Mozgirs</a>, <a href="https://www.linkedin.com/in/alina-n%C4%83stase-costea-b32abb52/">Alina (Năstase) Costea</a>, <a href="https://www.linkedin.com/in/anamariadiceanu/">Ana Maria Diceanu</a>, <a href="https://www.linkedin.com/in/leonardrizoiu/">Leonard RIZOIU</a>, <a href="https://www.linkedin.com/in/mihaizant/">Mihai ZANT</a>, <a href="https://www.linkedin.com/in/luiza-banyai-2420111/">Luiza Banyai</a>, <a href="https://www.linkedin.com/in/mihaibajan/">Mihai Bajan</a>, <a href="https://www.linkedin.com/in/filip-nemteanu/">Filip Nemteanu</a>, <a href="https://www.linkedin.com/in/silviu-dragomir-54b16810/">Silviu Dragomir</a>, <a href="https://www.linkedin.com/in/mihaela-georgiana-tomescu/">Mihaela Tomescu</a>, <a href="https://www.linkedin.com/in/alexandra-kogalniceanu-3166151b/">Alexandra Kogalniceanu</a>, <a href="https://www.linkedin.com/in/catalina-stanciu/">Catalina Stanciu</a>, <a href="https://www.linkedin.com/in/cezar-c%C3%A2rligeanu-72420733/">Cezar Cârligeanu</a>, <a href="#">Head Hunting Agency, part of IMD International Search Group, Partner Romania for Best Places to Work</a>,</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a href="#" style={{textAlign: "center"}}>#tomorrowatwork2024 #futureofwork #businessmark #headhuntingagency</a>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 order-md-2 ">
                <a>
                  <img
                    className="article-image"
                    src="assets/img/business.jpg"
                    alt=""
                    class="img-fluid business-img"
                  />
                </a>
              </div>
          </div>
        <div className="row">
        <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/gala-awards.jpeg" className="img-fluid gala-awards" />
            </div>
            <h3
              className="d-flex justify-content-center align-items-center pt-5"
              style={{textAlign: "center"}}
            >
              BRCC Gala Awards 2024
            </h3>
            <p className="d-flex justify-content-center align-items-center pt-5" style={{textAlign: "center"}}>I am thrilled to have been a part of the BRCC Gala Awards 2024, celebrating incredible success stories, excellence, commitment, innovation, sustainability, achievements.
Just discovered new things: blue mobility, and Franui.
The energy in the room was truly electric!
It was an honor to be surrounded by so many talented professionals who are making a difference in their respective fields.
Looking forward to seeing what the future holds for all of us and the impact we will continue to make.</p>
                    <div className="d-flex justify-content-center align-items-center">
                    <a href="#" style={{textAlign: "center"}}>#successStories #excellence #commitment #innovation #sustainability #achievements #blueMobility #franui #BRCC #galaAwards</a>
                    </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/events/seara.jpeg" className="img-fluid gala-awards" />
            </div>
            <h3
              className="d-flex justify-content-center align-items-center pt-5"
              style={{textAlign: "center"}}
            >
              De Ziua Femeii, From WOMEN to WOMEN
            </h3>
            <p className="d-flex justify-content-center align-items-center pt-5" style={{textAlign: "center"}}>Once in a while you need to take a break, to breath, to look inside you for all the beauty, pain, trauma, and to indulge.
Last evening was about us. Sezatoarea de Seara by SPACES</p>
          </div>
          <div className="row">
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/pwn-alumni.jpeg" className="img-fluid" />
            </div>
            <h3
              className="d-flex justify-content-center align-items-center pt-5"
              style={{textAlign: "center"}}
            >
              PWN Alumni Women on Board
            </h3>
            <p className="d-flex justify-content-center align-items-center pt-5" style={{textAlign: "center"}}>Great insights, experienced speakers, and valuable knowledge were shared today during the PWN Alumni Women on Board second edition. The event focused on supporting women in business and society, with discussions centered around gender diversity in corporate boards, board-ready women initiatives, gender mainstreaming, and gender equality in administration boards. One of the key takeaways was the importance of consolidating the application of equal remuneration for equal work among men and women via remuneration transparency. These were only a few of the many topics discussed during the event.</p>
                    <div className="d-flex justify-content-center align-items-center">
                    <a href="#" style={{textAlign: "center"}}>#WomenInBusiness #GenderDiversity #GenderEquality #PWNAlumni #BoardReadyWomen #RemunerationTransparency #pwn #romania</a>
                    </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/pwn-event.jpeg" className="img-fluid pwn-event" />
            </div>
            <h3
              className="d-flex justify-content-center align-items-center pt-5"
              style={{textAlign: "center"}}
            >
              Event by PWN cu Teodora Metiu
            </h3>
            <p className="d-flex justify-content-center align-items-center pt-5" style={{textAlign: "center"}}>For those who couldn’t join the event or don’t know her yet, Mrs. Teodora Mețiu is one of the best trainers one can have. She conquered the TV world with over 7.200 hours of live transmissions, 72.000 news presented and 300 hours of tv materials from presidential or local elections and many more.

Yesterday she showed us how to use our voice in your advantage, how to do everything with love and attention and we would like to thank her for this!</p>
          </div>
          </div>
        </div>
      </div>

      <div class="container pt-5 mt-5">
        <h3 class="text-center">
          Our Manager Partner Loreda Silvia Dragomir is Partner for Romania at{" "}
          <br />
          Best Places to Work starting February 2024
        </h3>
        <div class="row pt-5">
          <div class="col-lg-6 pb-5">
            <div class="text-center text-md-left pt-5">
              <h1>
                Would you like to get your oganization certified as a Best Place
                to Work ?
              </h1>
              <p style={{ fontSize: 25 }} className="py-5">
                Take our free HR pre-assessment today to check your ability to
                achieve the certification
              </p>
              <a
                href="https://bestplacestoworkfor.org"
                className="pt-5 my-3 best-places"
              >
                www.bestplacestoworkfor.org
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              src="assets/img/certified.jpg"
              alt="Image"
              class="img-fluid mx-auto d-block certified-img"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
