import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import MyPDFViewer from "../pdf/pdf";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
// zip -r 1.zip .
function Blog() {
  return (
    <div data-aos="fade-up">
      <div className="section-title blog-header" data-aos="fade-up">
        <h2>People for People</h2>
      </div>
      <section id="hero-slider" className="hero-slider">
        <div className="container-md" data-aos="fade-in">
          <div className="row">
            <div className="col-12">
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
      <section id="posts" className="posts">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-4">  
              <div className="post-entry-1 lg">
                <a href="/blog/swiss-chamber-of-commerce">
                  <img src="assets/img/swiss.jpeg" alt="" className="img-fluid" />
                </a>
                <div className="post-meta"></div>
                <h2>
                  <a href="/blog/swiss-chamber-of-commerce">Swiss Chamber of Commerce</a>
                </h2>
                <p className="mb-4 d-block">
                  The Swiss Chamber of Commerce serves as a pivotal organization
                  dedicated to fostering economic and business relations within
                  Switzerland and beyond. As a key player in the business
                  community, it aims to provide a platform for networking,
                  collaboration, and knowledge exchange among professionals,
                  companies, and stakeholders.
                </p>
              </div>
              <div className="post-entry-1 lg">
                <a href="/blog/ramona-ungureanu">
                  <img src="assets/img/ramona.jpeg" alt="" className="img-fluid" />
                </a>
                <div className="post-meta"></div>
                <h2>
                  <a href="/blog/ramona-ungureanu">Presenting Ramona Ungureanu</a>
                </h2>
              </div>
              <div className="post-entry-1 pt-5">
                <a href="/blog/member-professional-women-network">
                  <img src="assets/img/events/pwn/pwn5.jpeg" alt="" className="img-fluid" />
                </a>
                <div className="post-meta"></div>
                <h2>
                  <a href="/blog/member-professional-women-network">HHA proud member of Professional Women Network</a>
                </h2>
              </div>
              <div className="post-entry-1 pt-5">
                <a href="/blog/ana-slatineanu">
                  <img src="assets/img/ana.jpeg" alt="" className="img-fluid" style={{borderRadius: 190}}/>
                </a>
                <div className="post-meta"></div>
                <h2 style={{fontSize: 25}}>
                  <a href="/blog/ana-slatineanu">Presenting Ana Slatineanu</a>
                </h2>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row g-5">
                <div className="col-lg-6 border-start custom-border">
                  <div className="post-entry-1">
                    <a href="/blog/NRCC">
                      <img
                        src="assets/img/nrcc.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/NRCC">
                        Netherlands Romanian Chamber of Commerce
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href="/blog/BRCC">
                      <img
                        src="assets/img/brcc.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/BRCC">
                        British Romanian Chamber of Commerce
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href="/blog/DWNT">
                      <img
                        src="assets/img/dwnt.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/DWNT">
                        Deutschsprachiger Wirtschaftsklub Nord-Transilvanien
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href="/blog/womenrise">
                      <img
                        src="assets/img/wr2.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/womenrise">
                      The Third Edition of WOMENRISE
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href="/blog/networking-breakfast">
                      <img
                        src="assets/img/network.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/networking-breakfast">
                      Networking Breakfast
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href="/blog/valentina-calin">
                      <img
                        src="assets/img/valentina.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/valentina-calin">
                      Presenting Valentina Călin
                      </a>
                    </h2>
                  </div>  
                  <div className="post-entry-1 pt-5" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <a href="/blog/mihaela-marin">
                      <img src="assets/img/mihaela.jpeg" alt="" className="img-fluid " style={{height: 350}}/>
                    </a>
                    <div className="post-meta"></div>
                    <h2 style={{fontSize: 25}}>
                      <a href="/blog/mihaela-marin">Presenting Mihaela Marin</a>
                    </h2>
                  </div> 
                </div>
                <div className="col-lg-6 border-start custom-border">
                  <div className="post-entry-1">
                    <a href="/blog/professional-women-network">
                      <img src="assets/img/pwn.jpeg" alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/professional-women-network">
                        Professional Women Network Romania
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href="/blog/advantage-austria">
                      <img
                        src="assets/img/austria.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/advantage-austria">Advantage Austria</a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href="/blog-RDCC">
                      <img
                        src="assets/img/diversity.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/RDCC">
                        Romanian Diversity Chamber of Commerce
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1 lg">
                    <a href="/blog/robert-negru">
                      <img
                        src="assets/img/robert-present.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/robert-negru">Presenting Robert Negru</a>
                    </h2>
                  </div>
                  <div className="post-entry-1 ">
                    <a href="/blog/a_best-ac_texas">
                      <img
                        src="assets/img/best.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/a_best-ac_texas">Launching of Strategic Partnership between<br></br>Centrul de Limbi Straine A_BEST & <br></br>AC Language School Texas, USA</a>
                    </h2>
                  </div>
                  <div className="post-entry-1 ">
                    <a href="/blog/IMD-international-london">
                      <img
                        src="assets/img/londra.jpeg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <div className="post-meta"></div>
                    <h2>
                      <a href="/blog/IMD-international-london">Annual General Meeting <br/>IMD International London</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center event-bg ">
        <div className="col-md-5 p-lg-5 mx-auto article-info">
          <h1 className="display-4 fw-normal" style={{ color: "#fff" }}>
            Loreda Dragomir & Robert Negru{" "}
          </h1>
          <p className="lead fw-normal" style={{ color: "#fff" }}>
            Bucharest Business Club & Connections by Consiliul Patronatelor ESG
            din Romania
          </p>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden diploma"></div>
        <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden event"></div>
      </div>

      <div className="category-section my-5 py-5">
      <div className="container" data-aos="fade-up">
      <div className="row justify-content-center my-5">
            <div className="col-lg-6">
              <div className="border-bottom">
                <img
                  src="assets/img/pozahr.jpeg"
                  alt=""
                  className="img-fluid article-img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src="assets/img/dog.jpeg"
                  alt=""
                  className="img-fluid article-img"
                />
                <h5 className="my-4">
                We were pleased and honored to participate to Guide Dog Open Day by Light into Europe Charity<br/>
                Thank you Alexandru Stingu Dragomir for you implication and support!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category-section my-5 py-5">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 order-md-2">
              <div className="d-lg-flex post-entry-2">
                <div className="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
                  <img
                    className="article-image img-fluid"
                    src="assets/img/diploma-loreda.jpeg"
                    alt="Diploma Loreda Dragomir"
                  />
                </div>
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

          <div className="row justify-content-center my-5">
            <div className="col-lg-6">
              <div className="border-bottom">
                <img
                  src="assets/img/diploma-sef.jpeg"
                  alt=""
                  className="img-fluid article-img"
                />
                <h5 className="my-3">
                  Honored to receive from His Majesty Mr. Giles Portman, new
                  British Ambassador and Light Into Europe Association the
                  Community Support Award
                </h5>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src="assets/img/diploma-group.jpeg"
                  alt=""
                  className="img-fluid article-img"
                />
                <h5 className="my-3">
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
              <img src="assets/img/breakfast.jpeg" className="img-fluid" alt=""/>
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
              <img src="assets/img/brcc-ss.png" className="img-fluid brcc-ss" alt=""/>
            </div>
            <h3
              className="d-flex justify-content-center align-items-center pt-5"
              style={{textAlign: "center"}}
            >
              As of March 2024, HHA proud member of BRCC
            </h3>
          </div>
        </div>
        <div className="row py-5 my-5 justify-content-center align-items-center">
            <div className="col-lg-6 order-md-2">
              <div className="d-lg-flex post-entry-2">

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
                  <p style={{textAlign: "center", paddingBottom: "20px"}}>It was great to meet or to meet again, or watch their presentation people from HR community such as <a href="https://www.linkedin.com/in/ginacruceru/">Gina Cruceru</a>, <a href="https://www.linkedin.com/in/andreea-mihnea-568469/">Andreea Mihnea</a>, <a href="https://www.linkedin.com/in/danadobrescu/">Dana Dobrescu</a>, <a href="https://www.linkedin.com/in/florentinagreger/">Florentina Greger</a>, <a href="https://www.linkedin.com/in/simona-ciora/">Simona Ciora</a>, <a href="https://www.linkedin.com/in/gabriela-costache-6521a82/">Gabriela COSTACHE</a>, <a href="https://www.linkedin.com/in/andreicretu/">Andrei Cretu</a>, <a href="https://www.linkedin.com/in/timeamozgirs/">Timea Mozgirs</a>, <a href="https://www.linkedin.com/in/alina-n%C4%83stase-costea-b32abb52/">Alina (Năstase) Costea</a>, <a href="https://www.linkedin.com/in/anamariadiceanu/">Ana Maria Diceanu</a>, <a href="https://www.linkedin.com/in/leonardrizoiu/">Leonard RIZOIU</a>, <a href="https://www.linkedin.com/in/mihaizant/">Mihai ZANT</a>, <a href="https://www.linkedin.com/in/luiza-banyai-2420111/">Luiza Banyai</a>, <a href="https://www.linkedin.com/in/mihaibajan/">Mihai Bajan</a>, <a href="https://www.linkedin.com/in/filip-nemteanu/">Filip Nemteanu</a>, <a href="https://www.linkedin.com/in/silviu-dragomir-54b16810/">Silviu Dragomir</a>, <a href="https://www.linkedin.com/in/mihaela-georgiana-tomescu/">Mihaela Tomescu</a>, <a href="https://www.linkedin.com/in/alexandra-kogalniceanu-3166151b/">Alexandra Kogalniceanu</a>, <a href="https://www.linkedin.com/in/catalina-stanciu/">Catalina Stanciu</a>, <a href="https://www.linkedin.com/in/cezar-c%C3%A2rligeanu-72420733/">Cezar Cârligeanu</a>, <a href="https://hha.ro/">Head Hunting Agency, part of IMD International Search Group, Partner Romania for Best Places to Work</a>,</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a href="https://hha.ro/" style={{textAlign: "center"}}>#tomorrowatwork2024 #futureofwork #businessmark #headhuntingagency</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-md-2 ">
                <div>
                  <img
                    className="article-image img-fluid business-img"
                    src="assets/img/business.jpg"
                    alt=""
                  />
                </div>
              </div>
          </div>
        <div className="row">
        <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/gala-awards.jpeg" className="img-fluid gala-awards" alt=""/>
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
                    <a href="https://hha.ro/" style={{textAlign: "center"}}>#successStories #excellence #commitment #innovation #sustainability #achievements #blueMobility #franui #BRCC #galaAwards</a>
                    </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/events/seara.jpeg" className="img-fluid gala-awards" alt=""/>
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
              <img src="assets/img/pwn-alumni.jpeg" className="img-fluid" alt=""/>
            </div>
            <h3
              className="d-flex justify-content-center align-items-center pt-5"
              style={{textAlign: "center"}}
            >
              PWN Alumni Women on Board
            </h3>
            <p className="d-flex justify-content-center align-items-center pt-5" style={{textAlign: "center"}}>Great insights, experienced speakers, and valuable knowledge were shared today during the PWN Alumni Women on Board second edition. The event focused on supporting women in business and society, with discussions centered around gender diversity in corporate boards, board-ready women initiatives, gender mainstreaming, and gender equality in administration boards. One of the key takeaways was the importance of consolidating the application of equal remuneration for equal work among men and women via remuneration transparency. These were only a few of the many topics discussed during the event.</p>
                    <div className="d-flex justify-content-center align-items-center">
                    <a href="https://hha.ro/"  style={{textAlign: "center"}}>#WomenInBusiness #GenderDiversity #GenderEquality #PWNAlumni #BoardReadyWomen #RemunerationTransparency #pwn #romania</a>
                    </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/pwn-event.jpeg" className="img-fluid pwn-event" alt=''/>
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
      <div className='container'>
      <div className="row">
        <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/events/magnetico/magnetico2.jpeg" className="img-fluid " alt=""/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/events/magnetico/magnetico1.jpeg" className="img-fluid " alt=""/>
            </div>

          </div>
          <h3 className="text-center pt-3">
              Magnetico
            </h3>
            <h5 className="d-flex justify-content-center align-items-center pt-5">
              How to attract and retain talents improving the employer branding and creating meaningful HR practices.
            </h5>
        </div>
        <div className="row">
        <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5">
              <img src="assets/img/events/rsm/rsm2.jpeg" className="img-fluid " alt=""/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center align-items-center pt-5 mt-4">
              <img src="assets/img/events/rsm/rsm1.jpeg" className="img-fluid " alt=""/>
            </div>

          </div>
          <h3 className="text-center pt-5">
          RSM Romania & BRCC 
            </h3>
            <h5 className="d-flex justify-content-center align-items-center pt-3">
            New Trends in International Taxation and Transfer Pricing.
            </h5>
        </div>
      </div>

      <div className="container pt-5 mt-5">
        <h3 className="text-center">
          Our Manager Partner Loreda Silvia Dragomir is Partner for Romania at{" "}
          <br />
          Best Places to Work starting February 2024
        </h3>
        <div className="row pt-5">
          <div className="col-lg-6 pb-5">
            <div className="text-center text-md-left pt-5">
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
          <div className="col-lg-6">
            <img
              src="assets/img/certified.jpg"
              alt=""
              className="img-fluid mx-auto d-block certified-img"
            />
          </div>
        </div>
        <div className="row pt-5 justify-content-center">
          <p className="lead pb-5" style={{textAlign: "center"}}>Despite the global challenges in terms of employees turnover and declining engagement level, the average level of engagement of the top performing companies in Romania is 82% and this is something to be proud of.

This is an elite group of employers in Romania making sure that their employees are engaged, motivated, appreciated, respected and enjoy coming to work.

Research from this year has shown more than 85% of employees in the top workplaces list believe their company delivers on its promises it makes to staff, with 80% saying their leaders communicate and explain the vision of the company and pay close attention to their employees’ performance as well as wellbeing. The following companies  are able to align them with the company’s goals.:</p>
            <div className="d-flex justify-content-center align-items-center">
              <p style={{textAlign: "center"}} className="pb-5">⭐<a href="https://www.linkedin.com/company/mcdonald%27s-corporation/">McDonald's</a> 🤝<a href="https://www.linkedin.com/company/therebeldot/">RebelDot</a> ✨<a href="https://www.linkedin.com/company/pluxeegroup/">Pluxee</a> ⭐<a href="https://www.linkedin.com/company/msd-romania/">MSD Romania</a> 💡<a href="https://www.linkedin.com/company/arctic-sa/">Arctic</a> 🌟 <a href="https://www.linkedin.com/company/faptic-technology/">Faptic Technology</a></p>
            </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src="assets/img/mec.jpg"
              alt=""
              className="img-fluid certified-img"
            />
          </div>
          <h5 style={{textAlign: "center"}}>Starting with March 2024 we are proudly Best Places to Work Romania<br></br> in partnership with Head Hunting Agency is a proud member of HR Club Association.<br></br></h5>
          <a style={{textAlign: "center"}} className="pt-2 pb-5" href="https://hr-club.ro/ro">https://hr-club.ro/ro</a>
        </div>
        <div className="row pt-5">
          <div className="col-lg-6">
            <img
              src="assets/img/brcc-img.jpg"
              alt=""
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div className="col-lg-6 pb-5">
            <div className="text-center text-md-right">
              <h5 className="pt-4">
              Today our Managing Partner, Loreda Silvia Dragomir was one of the speakers of The Imperatives for the next decades event, organized by British Romanian Chamber of Commerce.
              </h5>
              <p className="lead">There were two main themes being discussed ESG Standards in 2024 and Sustainable Actions in Public and Private Sectors.</p>
              <p className="py-1">
Topics presented included:<br></br>
✨ The impact of sustainability and climate on businesses<br></br>
✨The role of the Boards in addressing sustainability and climate resilience<br></br>
✨Investor Perspectives on ESG<br></br>
✨Exploration of challenges and opportunities for companies in meeting ESG criteria<br></br>
✨Insights into successful sustainability initiatives from government bodies and public sector organizations<br></br>
✨Showcase of sustainable practices and initiatives undertaken by private enterprises: Community Engagement and Social Impact<br></br>
              </p>
            </div>
          </div>
          <div className="row">
            <p style={{textAlign: "center"}}  className="lead">
              Thank you <a href="https://www.linkedin.com/in/ileana-botez-mba-6284069/">Ileana Botez</a>, <a href="https://www.linkedin.com/in/alina-prahoveanu-6a9b0017/">Alina Prahoveanu</a> <a href="https://www.linkedin.com/in/simona-f%C4%83tu-7925781a/">Simona Fătu</a> <a href="https://www.linkedin.com/in/ramona-moldovan-1197786/">Ramona Moldovan</a> <a href="https://www.linkedin.com/in/ionut-nache-67559010/">Ionut NACHE</a> <a href="https://www.linkedin.com/in/mathieu-gregori/">Mathieu Gregori</a> <a href="https://www.linkedin.com/in/raulpop/">Raul Pop</a> <a href="https://www.linkedin.com/in/cipriandsandu/">Ciprian Sandu</a> <br></br>for sharing their time, experience and inputs.<br></br>
              Thank you <a href="https://www.linkedin.com/in/madalinaciinaru/">Madalina Ciinaru</a>, <a href="https://www.linkedin.com/in/anna-n%C4%83stase-anamaria-n%C4%83stase-77b536142/">Anna Năstase</a> <a href="https://linkedin.com/in/cevasea/">Cristiana Elisabeta Vasea</a> for well done organization.<br></br>
              Thank you <a href='https://www.linkedin.com/in/bogdan-pletea/'>Bogdan Pletea CMIRM®</a> for doing an extraordinary job at moderating the event!<br></br></p>
          </div>
        </div>
      </div>
      <MyPDFViewer />
      <Footer />
    </div>
  );
}

export default Blog;
