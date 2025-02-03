import React from "react";
import Footer from "../components/Footer";

function GlobalOffices() {
  return (
    <section className="p-content" data-aos="fade-up">
      <div className="ctr">
        <h1 className="global">
          Best Places to Work
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="office-p">
              Best Places to Work is the most definitive ‘Employer of Choice’ certification that organizations aspire to achieve. Every year, the program certifies and recognizes leading workplaces in many countries around the world with a rigorous assessment methodology and a framework which reflects the very latest in workplace trends focusing on 8 Workplace factors including leadership, HR & people policies, compensation, benefits, teamwork & relationships, employee engagement, workplace & procedures and corporate social responsibility.
              </p>
              <p className="office-p">
              The certification process involves a comprehensive assessment of an organization's HR practices and employee experiences. This includes evaluating factors such as leadership quality, talent focus, and workplace culture. Organizations that meet the program's standards are certified as Best Places to Work, signaling to clients, partners, investors, and employees that the company values workplace engagement and its people.
              </p>
            </div>
            <div className="col-md-4">
                <p><span style={{fontWeight:600}}>Website:</span> <a href="http://www.bestplacestoworkfor.org/">http://www.bestplacestoworkfor.org/</a></p>
                <p><span style={{fontWeight:600}}>Phone:</span> +44 208 895 6562</p>
                <p><span style={{fontWeight:600}}>Industry:</span> Human Resources Services</p>
                <p><span style={{fontWeight:600}}>Founded:</span> 2017</p>
                <p><span style={{fontWeight:600}}>Specialties:</span> Employer Branding, Employee Experience, Employee Engagement, Organizational Change, Workplace Culture, Workplace Culture, and Leadership Development</p>

              <br />

            </div>
          </div>
        </div>
        <div className="bptw-divslide">
          <div className="bptw-slide"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default GlobalOffices;
