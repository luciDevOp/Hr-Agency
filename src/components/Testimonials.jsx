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
                  <h6 className="testimonial-text mb-3">Sales Account Manager at InterContinental</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is the best person to have around at the beginning of your career and not only. She is professional , understanding, she knows how to challenge you and how to make you be the best ! I have learned so many things from her and I hope someday we will have the chance to work togheter again !
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
                      src="/assets/img/testimonials/liana.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Liana Uzunov</h5>
                  <h6 className="testimonial-text mb-3">Director, Talent Acquisitions @ AbbVie</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is having an innovative approach towards a project, being open and supportive. Loreda is looking for results being a hands-on manager.
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
                      src="/assets/img/testimonials/valentina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Valentina Marinoiu</h5>
                  <h6 className="testimonial-text mb-3">Integrated Business Planning Director @ Kandia Dulce</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    
First time when I met Loreda, I had the feeling that I knew her for ages. She has that ability to make you feeling comfortable and talk like with a friend. On top of this, she is very professional, and she knows exactly where anyone fits, offering the best solution for employees and employers too.
She is very serious and dedicated to her work, but she always remembers to those she works with, that business could be more pleasant when you meet a smile on a face.
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
                      src="/assets/img/testimonials/ema.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Ema Vidican</h5>
                  <h6 className="testimonial-text mb-3">Psychotherapist | Career Counselor</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I've know Loreda since I joined Stanton Chase International. I can say that it's a true pleasure to meet her & even an greater pleasure to work with her.
She is an excellent team-player and she has exceptional ability to establish social relationship, she doesn't jump on conclusion, is full of ideas, always enthusiastic and she talks & discuss freely.
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
                      src="/assets/img/testimonials/alexandru.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alexandru Horatiu Didea</h5>
                  <h6 className="testimonial-text mb-3">Managing Partner @ WorkSpace Studio</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    In 2008 Loreda helped us find the right people for the vacant sales positions in our company. Her understanding of our needs, knowledge of the market and result oriented approach make me recommend her work to anyone that needs HR services.
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
                      src="/assets/img/testimonials/roxana.png"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Roxana Petrea</h5>
                  <h6 className="testimonial-text mb-3">Roxana Petrea @ The Care Hub</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I worked with Loreda on several top-management recruitment projects and she was the one that found the best candidates for our positions. Even if the projects were difficult, her creativity and ambition helped her in achieving great results and I recommend her for her professionalism.
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
                      src="/assets/img/testimonials/gabriela.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Gabriela Spirache</h5>
                  <h6 className="testimonial-text mb-3">Project Manager @ Teach for Romania</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Full of enthusiasm and energy, Loreda is an excellent professional in the recruitment industry. Knowledgeable and efficient, she is a person you can always rely upon to deliver results, whatever the challenge...
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
                      src="/assets/img/testimonials/florin.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Florin Petrescu</h5>
                  <h6 className="testimonial-text mb-3">Marketing Manager @ Schubert Music Publishing</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    
I had the pleasure to work with Loreda in 2008 during the recruitment process for my new job at Reader's Digest. I appreciated Loreda's professionalism during this process which was straightforward, answered my questions, included a very good briefing and left no issues unaddressed. Overall the process was very well conducted, smooth and using high standards.
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
                      src="/assets/img/testimonials/silvia.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Silvia Mihalache</h5>
                  <h6 className="testimonial-text mb-3">Business Development Specialist @ Harris Computer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I had the chance to meet and to work closely with Loreda for almost 2 years in Grafton Recruitment. Loreda is a resourceful, creative, and solution-oriented person who was frequently able to come up with new and innovative approaches in the Company.
She develops an effective scoping from detail to “big picture”.
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
                      src="/assets/img/testimonials/emanuel.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Emanuel Grigorcea</h5>
                  <h6 className="testimonial-text mb-3">Entrepreneurship @ PEP Cafe CustomShop, PEP Garage</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    When I first met Loreda I was impressed by her dynamism, energy and persuasion. With a smile on her face, she has the power to convince you that there is place out there for any initiative and for any dream you have. I'll be glad to work and do business again with Loreda.
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
                      src="/assets/img/testimonials/irina.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Irina Popovici</h5>
                  <h6 className="testimonial-text mb-3">Recruitment Consultant @ T-Mobile Czech Republic</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    The first thing that strikes you about Loreda is her approach full of energy and enthusiasm regarding people and projects and her ability to transmit to the others the desire to achieve high standard results. Loreda succeeds every time to build and keep a business and friendship relationship with both clients and candidates by showing professional approach, fast reaction and dedication.
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
                      src="/assets/img/testimonials/cristian.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Cristian Nistoreasa</h5>
                  <h6 className="testimonial-text mb-3">Certified Learning & Development Facilitator @ Wilson Learning</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is one of the more articulate people I have met who is able to easily make sense of things that are complicated. Her excellent interpersonal skills and comfort with people allow her to easily adapt to others and make them feel comfortable in their relationships with her. I have found working with Loreda a unique pleasure, as she has both the curiosity and wisdom of a well-rounded person.
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
                      src="/assets/img/testimonials/serban.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Serban Cazanisteanu</h5>
                  <h6 className="testimonial-text mb-3">General Manager @ MINDO SA</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda is one of the most dedicated persons I have been in contact with along my career. She is more than a HR professional - she is a trustworthy friend and in the same time a business partner. Loreda is unique in her ability to find the right professionals and matching them with the proper organizations. To sum up “most probably the best“ human resource that I have ever encountered.
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
                      src="/assets/img/testimonials/cara.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Cristina M. Caramizaru</h5>
                  <h6 className="testimonial-text mb-3">Senior Consultant | Career Coach</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    I have worked together with Loreda in SCI, where I have been very impressed of her drive for achieving results, targets and numbers. Loreda is a very ethical professional towards her clients, candidates and colleagues. She is completing every goal with passion and responsibility for every party involved. Loreda is a very good Project Manager especially in the services / consulting area from all points of view: client management, creative sourcing, customer servicing, etc.
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
                      src="/assets/img/testimonials/dan.jpeg"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Dan Oprescu</h5>
                  <h6 className="testimonial-text mb-3">Country Lead RO & MD @ Er-Kim Pharmaceuticals</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Loreda has a highly strategic approach with an eye for details.
She excels in creating an atmosphere of mutual trust possessing the right competencies of an experienced career coach with a wide business overview.
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
      </MDBCarousel>
    </MDBContainer>
    </section>
  );
}