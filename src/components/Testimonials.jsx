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
      <MDBCarousel showControls> 
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
                  <h6 className="testimonial-text mb-3">Vice Chair @ BKR International </h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Will you wish to cooperate with a professional in Executive Search with deep business understanding, expertise and relevant experience for several industries?
If yes, I will definitely recommend to meet Loreda Dragomir. I know Loreda for several years. She succeed to harmonize the maturity in business with enthusiasm and courage of entrepreneur. Loreda is an excellent leader, capable to add value and advice to your process and find the suitable solutions for your team.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">Head of Process Team Master Data @ Mercedes Benz AG</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have known Loreda for many years and we have been working together, discussing and debating various topics. I have always admired her pragmatic view and her goal-focus, while at the same time being transparent, integrative and consistent. I is an absolute pleasure to discuss and work with her.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                    I have been in touch with Loreda already for several years during my professional career and she demonstrated she is a great professional with excellent knowledge of executive search area and extensive job market understanding. She has an excellent knowledge of the Romanian market and with her team she has always been very efficient, reliable and organized providing excellent results and high quality candidates.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">Chief Happiness Officer Universitatea Romano Americana</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have met Loreda a few years ago and I liked her immediately. She is spontaneous, intelligent, elegant, a true professional, passionate about people and her job. She is open minded, always eager to find solutions and always with a smile. In a tough business environment she managed through hard work and dedication to make a difference. Thank you for all that, Loreda!
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">General Manager (CEO) at Humbel Produktionstechnik SRL</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the opportunity to collaborate with Loreda and I was impressed by her professionalism, communication skills, devotion and integrity which I consider important in any business segment but also in personal life. She is a true consultant, giving the advice that fits best the company’s requirements, the candidates needs, considering not only the financial side of the coin, but the human one, as well.                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">Managing Partner at Elite Searchers</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    It was a real pleasure working with Loreda at Kienbaum from 2011 till present. She is a great Manager with a very warm personality. She is also a perfect combination of a strong team leader and a warm team player. Loreda is a business oriented person, very professional, calm but full of energy. She is focused on both clients and candidates, matching them perfect                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                    Loreda Dragomir is a sound professional with demonstrated success in leading international HR & Executive Search organizations by continuously promoting high-performance standards.
Acknowledged for staffing complex organizations, Loreda established track record with emphasis on strategic planning, recruitment, performance management, workforce diversity & culture, succession planning.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">Human Resources Manager at CEMACON</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the chance to work with Loreda on various Executive Search projects from different functional areas. It was an easy task for me as Loreda always seem to have a quick though comprehensive understanding of what we are looking for, organizational context, challenges for the potential new colleague & such, while calibrating our expectations in a friendly but substantiated manner. In the end with her support we had the chance to meet great people and start new projects.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">General Manager at FWEI</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is a real pleasure to work with, and has outstanding experience in leadership, strategy, executive search, organizational search. Proactive, ambitious, dedicated and broad minded perfectionist. Thanks to interpersonal skills she has great relations with both company clients and potential customers. Whenever I had a problem, there has never been a time she has left me without a solution. Broad minded Managing Partner - her exceptional work flow, skills, imagination and understanding of change requests made the project a dream. 
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">Sr. Talent Attraction Partner Allianz Services</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the pleasure of working with Loreda for a year and a half at Kienbaum. During this period she was my direct manager , but also became in time a close friend and co-worker. I have worked several projects under her direct supervision and I have observed her dedication and involvement in any activity she delivered. She is a positive person who always has a smile on her face and brings laughter and pleasure in any daily activity.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">VP Client & Merchant Sales Enablement and Performance Pluxee</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Having known Loreda for many years in her various roles in Stanton Chase, Netherlands-Romanian Chamber of Commerce and Kienbaum I could appreciate her authenticity in providing recommendations and thought leadership. High-spirited and goal oriented, Loreda always finds the resources to make things happen in the best manner. She is a reliable and trustful business partner one can count on even for most challenging endeavors.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">Area Sales Manager, Greece & Cyprus</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the chance to work with Loreda in the past under her occupation as an Executive Search service provider.
Good listener, focused, cost efficient. Her teams are always well coordinated with constant follow up. Market knowledge is broad and deep.
She is one of the professionals that i know for long time and i trust.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">Deputy General Manager for Sales Management Garanti Bank</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the chance to meet Loreda and collaborate on one important project for me.
What I discovered working with her, was a very professional aproach, focusing on finding the right solution, with care for client’ needs and interest, open discussions, but always to the point.
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                    Loreda is an extraordinary person with an sharp mind and a desire for success that is on par with any professional I have ever met.
I have had the opportunity to work with Loreda and it was clear that her superior intellect was a rare find. Her intellect was only surpassed by the her focus to make the best out of her life and to have a positive impact on the lives and careers of others.
Loreda is a fantastic professional with unlimited potential, truly exceptional!
                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
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
                  <h6 className="testimonial-text mb-3">Senior Consultant at Remax White Portugal</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda Silvia Dragomir she is the best. Very professional and always with a smile. She is a true listener, capable of understanding needs, bringing to the table the right solutions, the right people.
She has an assertive communication, always to the point, no grey areas, no doubts, everything is black and white with her, no hidden agendas, or fees.
Her ability to persuade, to influence, convince and her passion are truly one of a kind.                    <MDBIcon fas icon="quote-left" className="pe-1 p-1" />

                  </p>
                  
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    </MDBTypography>
                </MDBCol>
                
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
    </section>
  );
}