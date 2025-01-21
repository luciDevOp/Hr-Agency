import { useEffect } from "react";
import React from "react";
import Footer from "../components/Footer";

function Services() {
  useEffect(() => {
    // Scroll to the service section when a service link is clicked
    const scrollToService = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute("data-target");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll only for the vertical axis
        window.scroll({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    // Attach click event listeners to each service link
    document.querySelectorAll(".service-link").forEach((link) => {
      link.addEventListener("click", scrollToService);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll(".service-link").forEach((link) => {
        link.removeEventListener("click", scrollToService);
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
    hiddenElementsLeft.forEach((el) => observer.observe(el));

    const hiddenElementsRight = document.querySelectorAll(".hidden-right");
    hiddenElementsRight.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      hiddenElementsLeft.forEach((el) => observer.unobserve(el));
      hiddenElementsRight.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            At Head Hunting Agency, we are dedicated to delivering comprehensive
            Human Resources solutions tailored to meet the unique needs of your
            business. Our services encompass a range of strategic HR offerings
            designed to optimize your workforce and enhance organizational
            performance.
          </p>
        </div>

        <div className="row">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-target-lock"></i>
              </div>
              <h4>
                <a
                  href="#headHunting"
                  className="service-link"
                  data-target="headHunting"
                >
                  Head Hunting
                </a>
              </h4>
              <p>
                Precision talent acquisition for key roles, ensuring your
                organization attracts and secures top-tier professionals.
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file"></i>
              </div>
              <h4>
                <a
                  href="#executiveSearch"
                  className="service-link"
                  data-target="executiveSearch"
                >
                  Executive Search
                </a>
              </h4>
              <p>
                Bespoke executive search solutions, identifying and placing
                leadership talent to drive your business forward.
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxs-paper-plane"></i>
              </div>
              <h4>
                <a
                  href="#recruitment"
                  className="service-link"
                  data-target="recruitment"
                >
                  Recruitment
                </a>
              </h4>
              <p>
                Efficient and tailored recruitment services, connecting your
                company with the right individuals to foster growth.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
              <img 
                      src="assets/img/bpw.png" 
                      alt="Best Places to Work" 
                      className="bpw-img"
                  />
              </div>
              <h4>
                <a
                  href="#bpw"
                  className="service-link"
                  data-target="bpw"
                >
                  Best Places to Work 
                </a>
              </h4>
              <p>
              We help organizations improve workplace culture by identifying strengths, addressing weaknesses, and offering guidance. Our global certification programs celebrate the Best Places to Work.              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-layer"></i>
              </div>
              <h4>
                <a
                  href="#careerManagement"
                  className="service-link"
                  data-target="careerManagement"
                >
                  Career Management
                </a>
              </h4>
              <p>
                Empowering individuals with personalized career management
                strategies for professional advancement and fulfillment.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-line-chart-down"></i>
              </div>
              <h4>
                <a
                  href="#humanCapitalAdvisory"
                  className="service-link"
                  data-target="humanCapitalAdvisory"
                >
                  Human Capital Advisory
                </a>
              </h4>
              <p>
                Strategic human capital guidance to optimize your workforce,
                aligning talent with organizational objectives.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-pie-chart"></i>
              </div>
              <h4>
                <a
                  href="#assessmentDevelopment"
                  className="service-link"
                  data-target="assessmentDevelopment"
                >
                  Assessment and Development Centers
                </a>
              </h4>
              <p>
                Comprehensive assessment and development centers designed to
                enhance individual and team capabilities.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-donate-heart"></i>
              </div>
              <h4>
                <a
                  href="#management"
                  className="service-link"
                  data-target="management"
                >
                  Management Consultancy
                </a>
              </h4>
              <p>
                Transformative management consultancy services, fostering
                operational excellence and strategic leadership for sustained
                business success.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxs-comment-check"></i>
              </div>
              <h4>
                <a
                  href="#esgConsultancy"
                  className="service-link"
                  data-target="esgConsultancy"
                >
                  ESG Consultancy
                </a>
              </h4>
              <p>
                Dedicated Environmental, Social, and Governance (ESG)
                consultancy, aligning your business with ethical practices and
                responsible corporate citizenship.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-5 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxs-book-reader"></i>
              </div>
              <h4>
                <a
                  href="#remuneration"
                  className="service-link"
                  data-target="remuneration"
                >
                  Remuneration Studies
                </a>
              </h4>
              <p>
              HHA conducts compensation studies to provide managers with market-based insights on salaries and benefits, considering requirements, industry, and location.              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-5 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-group"></i>
              </div>
              <h4>
                <a
                  href="#interview"
                  className="service-link"
                  data-target="interview"
                >
                  Stay Interviews
                </a>
              </h4>
              <p>
              A stay interview is a one-on-one meeting with a tenured, high-performing employee to understand what motivates them to stay.        
              
              </p>
                  </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch my-5 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-user-voice"></i>
              </div>
              <h4>
                <a
                  href="#exit"
                  className="service-link"
                  data-target="exit"
                >
                  Exit Interviews
                </a>
              </h4>
              <p>
              An exit interview is a brief conversation or survey with a departing employee, student, or member to understand their reasons for leaving.              
              </p>
                  </div>
          </div>
        </div>
      </div>
      <div className="container" id="service">
        <section id="headHunting" className="my-5 text-center hidden-left">
          <h1 className="pb-5">Head Hunting</h1>
          <p className="lead">
            Our Head Hunting service specializes in precision talent
            acquisition, identifying and securing top-tier professionals for key
            roles within your organization. We leverage our extensive network
            and industry expertise to ensure that your company attracts and
            retains the best-fit candidates, aligning seamlessly with your
            strategic objectives.
          </p>
        </section>

        <section id="executiveSearch" className="my-5 text-center hidden-right">
          <h1 className="pb-5">Executive Search</h1>
          <p className="lead">
            Elevate your leadership team with our bespoke Executive Search
            solutions. We go beyond conventional recruitment, providing tailored
            strategies to identify, evaluate, and place executives who will
            drive your business forward. Our meticulous approach ensures that
            each placement aligns with your company's vision and fosters
            sustained success.
          </p>
        </section>

        <section id="recruitment" className="my-5 text-center hidden-left">
          <h1 className="pb-5">Recruitment</h1>
          <p className="lead">
            Efficiency meets customization in our Recruitment services. We
            connect your company with the right individuals through a
            streamlined process that considers not only the skills and
            experience required but also the unique culture and values of your
            organization. Let us be your partner in fostering growth through
            strategic hires.
          </p>
        </section>

        <section id="careerManagement" className="my-5 text-center hidden-right">
          <h1 className="pb-5">Career Management</h1>
          <p className="lead">
            Empower your workforce with our personalized Career Management
            services. We provide individuals with the tools and strategies
            needed for professional advancement and fulfillment. From skill
            development to career planning, our guidance ensures that each team
            member can thrive and contribute effectively to your organization.
          </p>
        </section>

        <section id="humanCapitalAdvisory" className="my-5 text-center hidden-left">
          <h1 className="pb-5">Human Capital Advisory</h1>
          <p className="lead">
            Navigate the complexities of workforce optimization with our Human
            Capital Advisory services. We offer strategic guidance to align your
            talent with organizational objectives, enhancing productivity and
            engagement. Let us be your partner in unlocking the full potential
            of your human capital.
          </p>
        </section>

        <section
          id="assessmentDevelopment"
          className="my-5 text-center hidden-right"
        >
          <h1 className="pb-5">Assessment and Development Centers</h1>
          <p className="lead">
            Invest in the growth of your team through our Assessment and
            Development Centers. Our comprehensive programs are designed to
            identify and nurture individual and collective capabilities. By
            focusing on both assessment and development, we create pathways for
            continuous improvement and success.
          </p>
        </section>

        <section id="management" className="my-5 text-center hidden-left">
          <h1 className="pb-5">Management Consultancy</h1>
          <p className="lead">
            Transform your business with our Management Consultancy services. We
            provide transformative guidance, fostering operational excellence
            and strategic leadership. Whether you're navigating change,
            optimizing processes, or planning for the future, our consultancy
            ensures your management practices align with your business goals.
          </p>
        </section>

        <section id="esgConsultancy" className="my-5 text-center hidden-right">
          <h1 className="pb-5">ESG Consultancy</h1>
          <p className="lead">
            Dedicate your business to environmental, social, and governance
            (ESG) excellence with our specialized ESG Consultancy services. We
            guide you in adopting ethical practices and responsible corporate
            citizenship, aligning your business with sustainability goals. Let
            us help you build a purpose-driven and socially responsible
            organization.
          </p>
        </section>

        <section id="remuneration" className="my-5 text-center hidden-left">
          <h1 className="pb-5">Remuneration Studies</h1>
          <p className="lead">
          HHA conducts compensation studies that allow managers to have adequate information at the time of hiring regarding salaries, benefits in acordance with the median of the market related to requirements, industry, geographical area, etc.
          </p>
        </section>
        <section id="bpw" className="my-5 text-center hidden-right">
          <h1 className="pb-5">Best Places to Work</h1>
          <p className="lead">
          We help organizations transform the culture of their workplace by identifying strengths, uncovering weaknesses and providing advice and guidance to spark change and inspire people. We manage certification programs across Europe, LATAM, Africa, Middle East, Asia and America that are looking for remarkable organizations to celebrate as Best Places to Work.
          </p>
        </section>
        <section id="interview" className="my-5 text-center hidden-left">
          <h1 className="pb-5">Stay Interviews</h1>
          <p className="lead">
          A stay interview is a meeting used to uncover what parts of an employee’s job keeps them coming back every day. 

It is often a one-on-one conversation conducted with a tenured, high-performing employee. 

Contrary to popular belief, a stay interview isn’t a conversation where you attempt to convince a departing employee to stay. 

Rather, it is a way to gather feedback about what an employee values in their role, and what might make a great employee move on.

Stay Interviews is a great method to use for Succession Planning, Retention, Organizational Development, and Employer Branding.          </p>
        </section>
        <section id="exit" className="my-5 text-center hidden-right">
          <h1 className="pb-5">Exit Interviews</h1>
          <p className="lead">
          An exit interview is a brief conversation or survey that is conducted with an employee who is leaving an organization. Exit interviews occur most often between an employee and an organization, but they can also be between a student and an educational institution, or between a member and an association.    
     </p>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default Services;
