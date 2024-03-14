import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial-text">
        <h1>Testimonials</h1>
      </div>
      <MDBContainer className="py-4 px-1">
        <MDBCarousel showControls interval={2000}>
          <MDBCarouselItem className="active">
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/iulia.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Iulia Lascau</h5>
                  <h6 className="testimonial-text mb-3">
                    Vice Chair @ BKR International{" "}
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Will you wish to cooperate with a professional in Executive
                    Search with deep business understanding, expertise and
                    relevant experience for several industries? If yes, I will
                    definitely recommend to meet Loreda Dragomir. I know Loreda
                    for several years. She succeed to harmonize the maturity in
                    business with enthusiasm and courage of entrepreneur. Loreda
                    is an excellent leader, capable to add value and advice to
                    your process and find the suitable solutions for your team.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/ioana.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Ioana Predescu</h5>
                  <h6 className="testimonial-text mb-3">
                    Head of Process Team Master Data @ Mercedes Benz AG
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have known Loreda for many years and we have been working
                    together, discussing and debating various topics. I have
                    always admired her pragmatic view and her goal-focus, while
                    at the same time being transparent, integrative and
                    consistent. I is an absolute pleasure to discuss and work
                    with her.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/doina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Doina Popescu</h5>
                  <h6 className="testimonial-text mb-3">HR Business Partner</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have been in touch with Loreda already for several years
                    during my professional career and she demonstrated she is a
                    great professional with excellent knowledge of executive
                    search area and extensive job market understanding. She has
                    an excellent knowledge of the Romanian market and with her
                    team she has always been very efficient, reliable and
                    organized providing excellent results and high quality
                    candidates.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/corina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Corina Neagu</h5>
                  <h6 className="testimonial-text mb-3">
                    Chief Happiness Officer Universitatea Romano Americana
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have met Loreda a few years ago and I liked her
                    immediately. She is spontaneous, intelligent, elegant, a
                    true professional, passionate about people and her job. She
                    is open minded, always eager to find solutions and always
                    with a smile. In a tough business environment she managed
                    through hard work and dedication to make a difference. Thank
                    you for all that, Loreda!
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/mihai.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Berzava Mihai</h5>
                  <h6 className="testimonial-text mb-3">
                    General Manager (CEO) at Humbel Produktionstechnik SRL
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the opportunity to collaborate with Loreda and I was
                    impressed by her professionalism, communication skills,
                    devotion and integrity which I consider important in any
                    business segment but also in personal life. She is a true
                    consultant, giving the advice that fits best the company’s
                    requirements, the candidates needs, considering not only the
                    financial side of the coin, but the human one, as well.{" "}
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/sorina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Sorina Faier</h5>
                  <h6 className="testimonial-text mb-3">
                    Managing Partner at Elite Searchers
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    It was a real pleasure working with Loreda at Kienbaum from
                    2011 till present. She is a great Manager with a very warm
                    personality. She is also a perfect combination of a strong
                    team leader and a warm team player. Loreda is a business
                    oriented person, very professional, calm but full of energy.
                    She is focused on both clients and candidates, matching them
                    perfect{" "}
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/carmen.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Carmen David</h5>
                  <h6 className="testimonial-text mb-3">Partner at ANAMINA</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda Dragomir is a sound professional with demonstrated
                    success in leading international HR & Executive Search
                    organizations by continuously promoting high-performance
                    standards. Acknowledged for staffing complex organizations,
                    Loreda established track record with emphasis on strategic
                    planning, recruitment, performance management, workforce
                    diversity & culture, succession planning.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/ion.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Ion Gabriel Chirvase</h5>
                  <h6 className="testimonial-text mb-3">
                    Human Resources Manager at CEMACON
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the chance to work with Loreda on various Executive
                    Search projects from different functional areas. It was an
                    easy task for me as Loreda always seem to have a quick
                    though comprehensive understanding of what we are looking
                    for, organizational context, challenges for the potential
                    new colleague & such, while calibrating our expectations in
                    a friendly but substantiated manner. In the end with her
                    support we had the chance to meet great people and start new
                    projects.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/dorel.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Dorel Radu</h5>
                  <h6 className="testimonial-text mb-3">
                    General Manager at FWEI
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is a real pleasure to work with, and has outstanding
                    experience in leadership, strategy, executive search,
                    organizational search. Proactive, ambitious, dedicated and
                    broad minded perfectionist. Thanks to interpersonal skills
                    she has great relations with both company clients and
                    potential customers. Whenever I had a problem, there has
                    never been a time she has left me without a solution. Broad
                    minded Managing Partner - her exceptional work flow, skills,
                    imagination and understanding of change requests made the
                    project a dream.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/cristina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Cristina Filip</h5>
                  <h6 className="testimonial-text mb-3">
                    Sr. Talent Attraction Partner Allianz Services
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the pleasure of working with Loreda for a year and a
                    half at Kienbaum. During this period she was my direct
                    manager , but also became in time a close friend and
                    co-worker. I have worked several projects under her direct
                    supervision and I have observed her dedication and
                    involvement in any activity she delivered. She is a positive
                    person who always has a smile on her face and brings
                    laughter and pleasure in any daily activity.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/adina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Adina Rotileanu</h5>
                  <h6 className="testimonial-text mb-3">
                    VP Client & Merchant Sales Enablement and Performance Pluxee
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Having known Loreda for many years in her various roles in
                    Stanton Chase, Netherlands-Romanian Chamber of Commerce and
                    Kienbaum I could appreciate her authenticity in providing
                    recommendations and thought leadership. High-spirited and
                    goal oriented, Loreda always finds the resources to make
                    things happen in the best manner. She is a reliable and
                    trustful business partner one can count on even for most
                    challenging endeavors.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/stavros.jpg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Stavros Mavroudis</h5>
                  <h6 className="testimonial-text mb-3">
                    Area Sales Manager, Greece & Cyprus
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the chance to work with Loreda in the past under her
                    occupation as an Executive Search service provider. Good
                    listener, focused, cost efficient. Her teams are always well
                    coordinated with constant follow up. Market knowledge is
                    broad and deep. She is one of the professionals that i know
                    for long time and i trust.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/anca.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anca Motca</h5>
                  <h6 className="testimonial-text mb-3">
                    Deputy General Manager for Sales Management Garanti Bank
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the chance to meet Loreda and collaborate on one
                    important project for me. What I discovered working with
                    her, was a very professional aproach, focusing on finding
                    the right solution, with care for client’ needs and
                    interest, open discussions, but always to the point.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/james.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">James H. Pogue, PhDd</h5>
                  <h6 className="testimonial-text mb-3">CEO @JP Entreprises</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is an extraordinary person with an sharp mind and a
                    desire for success that is on par with any professional I
                    have ever met. I have had the opportunity to work with
                    Loreda and it was clear that her superior intellect was a
                    rare find. Her intellect was only surpassed by the her focus
                    to make the best out of her life and to have a positive
                    impact on the lives and careers of others. Loreda is a
                    fantastic professional with unlimited potential, truly
                    exceptional!
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/jose.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">José Afonso</h5>
                  <h6 className="testimonial-text mb-3">
                    Senior Consultant at Remax White Portugal
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda Silvia Dragomir she is the best. Very professional
                    and always with a smile. She is a true listener, capable of
                    understanding needs, bringing to the table the right
                    solutions, the right people. She has an assertive
                    communication, always to the point, no grey areas, no
                    doubts, everything is black and white with her, no hidden
                    agendas, or fees. Her ability to persuade, to influence,
                    convince and her passion are truly one of a kind.{" "}
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>

                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/alexandra.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alexandra Negoita</h5>
                  <h6 className="testimonial-text mb-3">
                    Sales Account Manager at InterContinental
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is the best person to have around at the beginning of
                    your career and not only. She is professional ,
                    understanding, she knows how to challenge you and how to
                    make you be the best ! I have learned so many things from
                    her and I hope someday we will have the chance to work
                    togheter again !
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/liana.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Liana Uzunov</h5>
                  <h6 className="testimonial-text mb-3">
                    Director, Talent Acquisitions @ AbbVie
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is having an innovative approach towards a project,
                    being open and supportive. Loreda is looking for results
                    being a hands-on manager.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/valentina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Valentina Marinoiu</h5>
                  <h6 className="testimonial-text mb-3">
                    Integrated Business Planning Director @ Kandia Dulce
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    First time when I met Loreda, I had the feeling that I knew
                    her for ages. She has that ability to make you feeling
                    comfortable and talk like with a friend. On top of this, she
                    is very professional, and she knows exactly where anyone
                    fits, offering the best solution for employees and employers
                    too. She is very serious and dedicated to her work, but she
                    always remembers to those she works with, that business
                    could be more pleasant when you meet a smile on a face.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/ema.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Ema Vidican</h5>
                  <h6 className="testimonial-text mb-3">
                    Psychotherapist | Career Counselor
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I've know Loreda since I joined Stanton Chase International.
                    I can say that it's a true pleasure to meet her & even an
                    greater pleasure to work with her. She is an excellent
                    team-player and she has exceptional ability to establish
                    social relationship, she doesn't jump on conclusion, is full
                    of ideas, always enthusiastic and she talks & discuss
                    freely.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/alexandru.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alexandru Horatiu Didea</h5>
                  <h6 className="testimonial-text mb-3">
                    Managing Partner @ WorkSpace Studio
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    In 2008 Loreda helped us find the right people for the
                    vacant sales positions in our company. Her understanding of
                    our needs, knowledge of the market and result oriented
                    approach make me recommend her work to anyone that needs HR
                    services.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/roxana.png"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Roxana Petrea</h5>
                  <h6 className="testimonial-text mb-3">
                    Roxana Petrea @ The Care Hub
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I worked with Loreda on several top-management recruitment
                    projects and she was the one that found the best candidates
                    for our positions. Even if the projects were difficult, her
                    creativity and ambition helped her in achieving great
                    results and I recommend her for her professionalism.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/gabriela.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Gabriela Spirache</h5>
                  <h6 className="testimonial-text mb-3">
                    Project Manager @ Teach for Romania
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Full of enthusiasm and energy, Loreda is an excellent
                    professional in the recruitment industry. Knowledgeable and
                    efficient, she is a person you can always rely upon to
                    deliver results, whatever the challenge...
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/florin.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Florin Petrescu</h5>
                  <h6 className="testimonial-text mb-3">
                    Marketing Manager @ Schubert Music Publishing
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the pleasure to work with Loreda in 2008 during the
                    recruitment process for my new job at Reader's Digest. I
                    appreciated Loreda's professionalism during this process
                    which was straightforward, answered my questions, included a
                    very good briefing and left no issues unaddressed. Overall
                    the process was very well conducted, smooth and using high
                    standards.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/silvia.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Silvia Mihalache</h5>
                  <h6 className="testimonial-text mb-3">
                    Business Development Specialist @ Harris Computer
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the chance to meet and to work closely with Loreda for
                    almost 2 years in Grafton Recruitment. Loreda is a
                    resourceful, creative, and solution-oriented person who was
                    frequently able to come up with new and innovative
                    approaches in the Company. She develops an effective scoping
                    from detail to “big picture”.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/emanuel.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Emanuel Grigorcea</h5>
                  <h6 className="testimonial-text mb-3">
                    Entrepreneurship @ PEP Cafe CustomShop, PEP Garage
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    When I first met Loreda I was impressed by her dynamism,
                    energy and persuasion. With a smile on her face, she has the
                    power to convince you that there is place out there for any
                    initiative and for any dream you have. I'll be glad to work
                    and do business again with Loreda.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/irina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Irina Popovici</h5>
                  <h6 className="testimonial-text mb-3">
                    Recruitment Consultant @ T-Mobile Czech Republic
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    The first thing that strikes you about Loreda is her
                    approach full of energy and enthusiasm regarding people and
                    projects and her ability to transmit to the others the
                    desire to achieve high standard results. Loreda succeeds
                    every time to build and keep a business and friendship
                    relationship with both clients and candidates by showing
                    professional approach, fast reaction and dedication.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/cristian.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Cristian Nistoreasa</h5>
                  <h6 className="testimonial-text mb-3">
                    Certified Learning & Development Facilitator @ Wilson
                    Learning
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is one of the more articulate people I have met who
                    is able to easily make sense of things that are complicated.
                    Her excellent interpersonal skills and comfort with people
                    allow her to easily adapt to others and make them feel
                    comfortable in their relationships with her. I have found
                    working with Loreda a unique pleasure, as she has both the
                    curiosity and wisdom of a well-rounded person.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/serban.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Serban Cazanisteanu</h5>
                  <h6 className="testimonial-text mb-3">
                    General Manager @ MINDO SA
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is one of the most dedicated persons I have been in
                    contact with along my career. She is more than a HR
                    professional - she is a trustworthy friend and in the same
                    time a business partner. Loreda is unique in her ability to
                    find the right professionals and matching them with the
                    proper organizations. To sum up “most probably the best“
                    human resource that I have ever encountered.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/cara.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Cristina M. Caramizaru</h5>
                  <h6 className="testimonial-text mb-3">
                    Senior Consultant | Career Coach
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have worked together with Loreda in SCI, where I have been
                    very impressed of her drive for achieving results, targets
                    and numbers. Loreda is a very ethical professional towards
                    her clients, candidates and colleagues. She is completing
                    every goal with passion and responsibility for every party
                    involved. Loreda is a very good Project Manager especially
                    in the services / consulting area from all points of view:
                    client management, creative sourcing, customer servicing,
                    etc.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/dan.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Dan Oprescu</h5>
                  <h6 className="testimonial-text mb-3">
                    Country Lead RO & MD @ Er-Kim Pharmaceuticals
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda has a highly strategic approach with an eye for
                    details. She excels in creating an atmosphere of mutual
                    trust possessing the right competencies of an experienced
                    career coach with a wide business overview.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/misu.jpg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alexandru Mișu</h5>
                  <h6 className="testimonial-text mb-3">
                    Country Retail Manager @ DHL Express
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I highly recommend Loreda as the person to go to whenever
                    you are in a need of crafting a new path for your careers.
                    I’ve had the opportunity to be guided by her in the
                    recruitment process for a key role in DHL Express
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/baiu.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Cosmin Baiu</h5>
                  <h6 className="testimonial-text mb-3">
                    Deputy Chief Executive Officer @ Chimcomplex
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have worked with Loreda while Chimcomplex started a big
                    recruitment process for hiring middle management positions.
                    I appreciated the quality of the service provided and
                    Loreda' s professionalism and empathy. I recommend Loreda
                    for any company looking for quality HR recruitment services.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/arnold.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Arnold Lang</h5>
                  <h6 className="testimonial-text mb-3">
                    Vinci Executive Search Consultant
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is an experienced executive search consultant who
                    goes the extra mile for her clients! Highly recommended.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/radu.jpg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Radu Constantin Ungureanu</h5>
                  <h6 className="testimonial-text mb-3">
                    General Manager @ Beta Buzau
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have had the privilege of collaborating with Loreda for
                    several years. Her exceptional leadership skills and ability
                    to inspire others was evident in every project we worked on
                    together. Loreda is a natural leader with excellent
                    communication abilities and a strategic mindset. Loreda it's
                    one of the best partner to work with because she really
                    understands the customer needs and she always delivers the
                    most suitable solution for the project.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/perrin.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alina Perrin</h5>
                  <h6 className="testimonial-text mb-3">
                    Founder SERMAN Insight, Head of People AMBER
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I crossed Loreda several times in my professional path
                    during the last 15 years. Honestly, when I need an
                    information and I don't know where to find it, I turn to
                    Loreda. She always has an insightful advise or a smart idea
                    whom to contact in order to get things done. She has this
                    level of energy and kindness that inspires and that is
                    contagious. This "there are no problems, just solutions or
                    opportunities" attitude makes her a fantastic business
                    partner. She has a keen understanding of business needs when
                    it comes to head hunting the right profile
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/gavrilescu.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Gabriel Gavrilescu</h5>
                  <h6 className="testimonial-text mb-3">
                    Vinci Executive Search Consultant
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Un om extraordinar, care iti ofera cele mai bune solutii
                    cand dai de greu. Iti multumesc inca o data Loreda pentru
                    aportul adus companiei noastre. Sper sa continuam
                    colaborarea noastra si in viitor.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/dragan.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">George Dragan</h5>
                  <h6 className="testimonial-text mb-3">
                    Country Head Limagrain
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the privillege to work with Loreda and her team in
                    several recruitment projects which required versatility,
                    deep insights but human touch as well. Always showing a high
                    level of customer accountability, Loreda has delivered high
                    quality candidates and services to easy support a quick
                    integration in their new teams. Well done an looking forward
                    to continue working together!
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/eftimie.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Claudia Eftimie</h5>
                  <h6 className="testimonial-text mb-3">
                    Finance Manager @ Trumpf
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Mrs. Loreda Dragomir was the recruiter who helped me get a
                    job in a German company, one of the most beautiful where I
                    met wonderful people. She has the talent to guide a person
                    to the right job. She intuits what is good for both parties
                    through involvement and trust. She is someone I trust,
                    devoted to quality work. I highly recommend it. If you need
                    support, help in recruitment field, do not hesitate to
                    contact her.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/manuel.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Manuel Ionescu</h5>
                  <h6 className="testimonial-text mb-3">
                    Head of Real Estate Development @ Universitatea Politehnica
                    Bucuresti
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I was fortunate enough to know and work with Loreda on
                    different projects since 2001. I know that I could always
                    rely on Loreda and her methodological approach, diligence,
                    professionalism and team orientation. Loreda brought always
                    a fresh and new perspective to strategic discussions,
                    covering new aspects, and helping to move forward the teams
                    and projects towards the desired solutions. Above all, her
                    positiveness, energy and smile were always there, in bad
                    times when leadership was needed and in good times,
                    motivating and inspiring others to take on new challenges.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/leahu.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Oana Leahu</h5>
                  <h6 className="testimonial-text mb-3">
                    Executive Director @ Top Seeds
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the opportunity to meet Loreda and collaborate with
                    her on several important projects. Loreda is an excellent
                    leader, capable of adding value and advice to HR projects
                    and finding the right solutions for business partners. She
                    is one of the best HR professionals I have worked with in
                    the last 15 years. I highly recommend her to any person or
                    company that needs help in the area of human resources.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/gheorghe.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Andreea Gheorghe</h5>
                  <h6 className="testimonial-text mb-3">
                    Recruitment Specialist @ Lagardere Travel Retail
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the opportunity to work with Loreda at CNA
                    International Executive Search where I have discovered that
                    she is a strong professional in the HR industry,
                    solution-oriented person, with a positive attitude and
                    always ready to cheer you up! She is an excellent leader and
                    it will be a pleasure for me to collaborate again with her
                    in the future.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/silvana.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Dr. Silvana Vasilescu</h5>
                  <h6 className="testimonial-text mb-3">
                    Founder Petronas, CEO Trumpf
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Am colaborat încă din anul 2018, în cadrul mai multor
                    proiecte, cu doamna Dragomir. A fost întotdeauna prima
                    opțiune pe care am avut-o în vedere atunci când am avut
                    nevoie de oameni capabili la cele două companii
                    internaționale, pe care le-am condus în calitate de CEO.
                    Angajările pe care le-a intermediat au fost extrem de
                    profitabile pentru companiile mele. Pe lângă profesionalism,
                    este un om empatic și plin de resurse personale, dispus să
                    investească în oameni. Aș alege oricând să colaborez din nou
                    cu dansa, cu prima ocazie care se va ivi.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="6" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/andrea.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Andrea Colantoni</h5>
                  <h6 className="testimonial-text mb-3">
                    Chairman & CEO, CZ Loko Italia Srl
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is one of the most accomplished persons I know in her
                    field in Romania. We have cooperated more than once both in
                    Adecco and CNA International and I wouldn't hesitate again
                    to work with her if and when the need arises. She is very
                    knowledgeable about the labor market and is able to provide
                    practical solutions to complex recruitment search, and
                    talent acquisition problems. Loreda is likable, capable and
                    I recommend her warmly for any talent need you may have.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
                <MDBCol lg="6" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="/assets/img/testimonials/dinu.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Sorin Ovidiu Dinu</h5>
                  <h6 className="testimonial-text mb-3">
                    CEO Kesko Senukai Digital Lithuania
                  </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    The first project I’ve collaborated with Loreda happened in
                    2008, when I was the selected candidate for a Country
                    Manager role. I recall she really made me feel like she had
                    the best interests in mind. She made time for me, answering
                    questions, eliminating doubts, working together on
                    scenarios, business cases, business plans, discussing openly
                    the what ifs , why and why nots. The support, trust and
                    confidence I felt then are the things I still remember for
                    that recruitment process. Her involvement, her maturity and
                    business understanding are most likely the biggest
                    differentiator from most search firms and recruitment
                    agencies I’ve worked with.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  ></MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBContainer>
    </section>
  );
}
