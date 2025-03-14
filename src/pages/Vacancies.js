import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

const JobDetailsModal = ({ isOpen, onClose, jobDetails }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);
  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: isOpen ? "block" : "none", backgroundColor: "rgba(0, 0, 0, 0.5)", }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          
          <div className="modal-header">
            <h5 className="modal-title">{jobDetails.title}</h5>
          </div>
          <div className="modal-body">

            <p className="job-title">Location: {jobDetails.location}</p>
            {jobDetails.description && (
            <p className="job-title" style={{marginBottom: "-10px"}}>Description:</p>
          )}
            {jobDetails.description && (
              <p>
                {jobDetails.description.split('\n').map((item, key) => (
                  <React.Fragment key={key}>
                    {item}
                    <br/>
                    {'\u00A0\u00A0'}
                  </React.Fragment>
                ))}
              </p>
            )}
            {jobDetails.tipContract && (
              <p className="job-title">Tip contract: {jobDetails.tipContract}</p>
            )}
            {jobDetails.mainpoint1 && (
              <p className="job-title">Main points of the position:</p>
            )}
            <ul>
              
              {jobDetails.require && jobDetails.require.mainpoint1 && (
                <li>{jobDetails.require.mainpoint1}</li>
              )}
              {jobDetails.require && jobDetails.require.mainpoint2 && (
                <li>{jobDetails.require.mainpoint2}</li>
              )}
              {jobDetails.require && jobDetails.require.mainpoint3 && (
                <li>{jobDetails.require.mainpoint3}</li>
              )}
              {jobDetails.require && jobDetails.require.mainpoint4 && (
                <li>{jobDetails.require.mainpoint4}</li>
              )}
              {jobDetails.require && jobDetails.require.mainpoint5 && (
                <li>{jobDetails.require.mainpoint5}</li>
              )}
              {jobDetails.require && jobDetails.require.mainpoint6 && (
                <li>{jobDetails.require.mainpoint6}</li>
              )}
              {jobDetails.require && jobDetails.require.mainpoint7 && (
                <li>{jobDetails.require.mainpoint7}</li>
              )}
              {jobDetails.require && jobDetails.require.mainpoint8 && (
                <li>{jobDetails.require.mainpoint8}</li>
              )}
              {jobDetails.require && jobDetails.require.mainpoint9 && (
                <li>{jobDetails.require.mainpoint9}</li>
              )}
              
            </ul>
          
              {jobDetails.require.one && (
                <p className="job-title">Requirements:</p>
              )}
            <ul>
              {jobDetails.require && jobDetails.require.one && (
                <li>{jobDetails.require.one}</li>
              )}
              {jobDetails.require && jobDetails.require.two && (
                <li>{jobDetails.require.two}</li>
              )}
              {jobDetails.require && jobDetails.require.three && (
                <li>{jobDetails.require.three}</li>
              )}
              {jobDetails.require && jobDetails.require.four && (
                <li>{jobDetails.require.four}</li>
              )}
              {jobDetails.require && jobDetails.require.five && (
                <li>{jobDetails.require.five}</li>
              )}
              {jobDetails.require && jobDetails.require.six && (
                <li>{jobDetails.require.six}</li>
              )}
              {jobDetails.require && jobDetails.require.seven && (
                <li>{jobDetails.require.seven}</li>
              )}
              {jobDetails.require && jobDetails.require.eight && (
                <li>{jobDetails.require.eight}</li>
              )}
              {jobDetails.require && jobDetails.require.nine && (
                <li>{jobDetails.require.nine}</li>
              )}
              {jobDetails.require && jobDetails.require.ten && (
                <li>{jobDetails.require.ten}</li>
              )}
              {jobDetails.require && jobDetails.require.eleven && (
                <li>{jobDetails.require.eleven}</li>
              )}
              {jobDetails.require && jobDetails.require.twelve && (
                <li>{jobDetails.require.twelve}</li>
              )}
              {jobDetails.require && jobDetails.require.thirteen && (
                <li>{jobDetails.require.thirteen}</li>
              )}
              {jobDetails.require && jobDetails.require.fourteen && (
                <li>{jobDetails.require.fourteen}</li>
              )}
              {jobDetails.require && jobDetails.require.fifteen && (
                <li>{jobDetails.require.fifteen}</li>
              )}
              {jobDetails.require && jobDetails.require.sixteen && (
                <li>{jobDetails.require.sixteen}</li>
              )}
              {jobDetails.require && jobDetails.require.seventeen && (
                <li>{jobDetails.require.seventeen}</li>
              )}
              {jobDetails.require && jobDetails.require.eighteen && (
                <li>{jobDetails.require.eighteen}</li>
              )}
              {jobDetails.require && jobDetails.require.nineteen && (
                <li>{jobDetails.require.nineteen}</li>
              )}

              
            </ul>
            {jobDetails.require && jobDetails.require.nice && (
                <p className="job-title">Nice to have:</p>
              )}
            <ul>
              {jobDetails.require && jobDetails.require.nice && (
                <li>{jobDetails.require.nice}</li>
              )}
              {jobDetails.require && jobDetails.require.nice1 && (
                <li>{jobDetails.require.nice1}</li>
              )}
              {jobDetails.require && jobDetails.require.nice2 && (
                <li>{jobDetails.require.nice2}</li>
              )}
              {jobDetails.require && jobDetails.require.nice3 && (
                <li>{jobDetails.require.nice3}</li>
              )}
              {jobDetails.require && jobDetails.require.nice4 && (
                <li>{jobDetails.require.nice4}</li>
              )}
              {jobDetails.require && jobDetails.require.nice5 && (
                <li>{jobDetails.require.nice5}</li>
              )}
            </ul>

            {jobDetails.require && jobDetails.require.more && (
              <p className="job-title">Key Responsibilities:</p>
            )}
            {jobDetails.require && jobDetails.require.more && (
              <p style={{fontWeight: '500'}}>{jobDetails.secondTitle1}</p>
            )}
            <ul>
              {jobDetails.require && jobDetails.require.more && (
                <li>{jobDetails.require.more}</li>
              )}
              {jobDetails.require && jobDetails.require.more0 && (
                <li>{jobDetails.require.more0}</li>
              )}
              {jobDetails.require && jobDetails.require.more01 && (
                <li>{jobDetails.require.more01}</li>
              )}
              {jobDetails.require && jobDetails.require.more02 && (
                <li>{jobDetails.require.more02}</li>
              )}
              {jobDetails.require && jobDetails.require.more03 && (
                <li>{jobDetails.require.more03}</li>
              )}
              {jobDetails.require && jobDetails.require.more04 && (
                <li>{jobDetails.require.more04}</li>
              )}
              {jobDetails.require && jobDetails.require.more05 && (
                <li>{jobDetails.require.more05}</li>
              )}
              {jobDetails.require && jobDetails.require.more06 && (
                <li>{jobDetails.require.more06}</li>
              )}
              {jobDetails.require && jobDetails.require.more07 && (
                <li>{jobDetails.require.more07}</li>
              )}
              {jobDetails.require && jobDetails.require.more08 && (
                <li>{jobDetails.require.more08}</li>
              )}
              {jobDetails.require && jobDetails.require.more09 && (
                <li>{jobDetails.require.more09}</li>
              )}
              {jobDetails.require && jobDetails.require.more10 && (
                <li>{jobDetails.require.more10}</li>
              )}
              {jobDetails.require && jobDetails.require.more11 && (
                <li>{jobDetails.require.more11}</li>
              )}
              {jobDetails.require && jobDetails.require.more12 && (
                <li>{jobDetails.require.more12}</li>
              )}
              {jobDetails.require && jobDetails.require.more13 && (
                <li>{jobDetails.require.more13}</li>
              )}
              {jobDetails.require && jobDetails.require.more14 && (
                <li>{jobDetails.require.more14}</li>
              )}
              {jobDetails.require && jobDetails.require.more15 && (
                <li>{jobDetails.require.more15}</li>
              )}
              {jobDetails.require && jobDetails.require.more16 && (
                <li>{jobDetails.require.more16}</li>
              )}
              {jobDetails.require && jobDetails.require.more17 && (
                <li>{jobDetails.require.more17}</li>
              )}
              {jobDetails.require && jobDetails.require.more18 && (
                <li>{jobDetails.require.more18}</li>
              )}
              {jobDetails.require && jobDetails.require.more19 && (
                <li>{jobDetails.require.more19}</li>
              )}
              
            </ul>
            {jobDetails.require && jobDetails.require.more && (
              <p style={{fontWeight: '500'}}>{jobDetails.secondTitle2}</p>
            )}
            <ul>
              {jobDetails.require && jobDetails.require.more1 && (
                <li>{jobDetails.require.more1}</li>
              )}
              {jobDetails.require && jobDetails.require.more2 && (
                <li>{jobDetails.require.more2}</li>
              )}
              {jobDetails.require && jobDetails.require.more3 && (
                <li>{jobDetails.require.more3}</li>
              )}
              {jobDetails.require && jobDetails.require.more31 && (
                <li>{jobDetails.require.more31}</li>
              )}
              
              
            </ul>
            {jobDetails.require && jobDetails.require.more && (
              <p style={{fontWeight: '500'}}>{jobDetails.secondTitle3}</p>
            )}
            <ul>
              {jobDetails.require && jobDetails.require.more4 && (
                <li>{jobDetails.require.more4}</li>
              )}
              {jobDetails.require && jobDetails.require.more41 && (
                <li>{jobDetails.require.more41}</li>
              )}
              {jobDetails.require && jobDetails.require.more42 && (
                <li>{jobDetails.require.more42}</li>
              )}
              {jobDetails.require && jobDetails.require.more43 && (
                <li>{jobDetails.require.more43}</li>
              )}
              {jobDetails.require && jobDetails.require.more44 && (
                <li>{jobDetails.require.more44}</li>
              )}
              {jobDetails.require && jobDetails.require.more45 && (
                <li>{jobDetails.require.more45}</li>
              )}
              {jobDetails.require && jobDetails.require.more46 && (
                <li>{jobDetails.require.more46}</li>
              )}

              
            </ul>
            {jobDetails.require && jobDetails.require.more && (
              <p style={{fontWeight: '500'}}>{jobDetails.secondTitle4}</p>
            )}
            <ul>
              {jobDetails.require && jobDetails.require.more5 && (
                <li>{jobDetails.require.more5}</li>
              )}
              {jobDetails.require && jobDetails.require.more6 && (
                <li>{jobDetails.require.more6}</li>
              )}
              {jobDetails.require && jobDetails.require.more7 && (
                <li>{jobDetails.require.more7}</li>
              )}
              {jobDetails.require && jobDetails.require.more8 && (
                <li>{jobDetails.require.more8}</li>
              )}
              {jobDetails.require && jobDetails.require.more9 && (
                <li>{jobDetails.require.more9}</li>
              )}
              {jobDetails.require && jobDetails.require.more001 && (
                <li>{jobDetails.require.more001}</li>
              )}
            </ul>
            {jobDetails.require && jobDetails.require.more && (
              <p style={{fontWeight: '500'}}>{jobDetails.secondTitle5}</p>
            )}
            <ul>
              {jobDetails.require && jobDetails.require.more51 && (
                <li>{jobDetails.require.more51}</li>
              )}
              {jobDetails.require && jobDetails.require.more52 && (
                <li>{jobDetails.require.more52}</li>
              )}
              {jobDetails.require && jobDetails.require.more53 && (
                <li>{jobDetails.require.more53}</li>
              )}
              {jobDetails.require && jobDetails.require.more54 && (
                <li>{jobDetails.require.more54}</li>
              )}
              {jobDetails.require && jobDetails.require.more55 && (
                <li>{jobDetails.require.more55}</li>
              )}
              {jobDetails.require && jobDetails.require.more56 && (
                <li>{jobDetails.require.more56}</li>
              )}
            </ul>
            
              {jobDetails.musthave1 && (
                <p className="job-title">Must have:</p>
              )}
              <ul>
              {jobDetails.musthave1 && (
                <li>{jobDetails.musthave1}</li>
              )}
              {jobDetails.musthave2 && (
                <li>{jobDetails.musthave2}</li>
              )}
              {jobDetails.musthave3 && (
                <li>{jobDetails.musthave3}</li>
              )}
              {jobDetails.musthave4 && (
                <li>{jobDetails.musthave4}</li>
              )}
              </ul>

              {jobDetails.profile1 && (
                <p className="job-title">Your profile:</p>
              )}
              <ul>
              {jobDetails.profile1 && (
                <li>{jobDetails.profile1}</li>
              )}
              {jobDetails.profile2 && (
                <li>{jobDetails.profile2}</li>
              )}
              {jobDetails.profile3 && (
                <li>{jobDetails.profile3}</li>
              )}
              {jobDetails.profile4 && (
                <li>{jobDetails.profile4}</li>
              )}
              {jobDetails.profile5 && (
                <li>{jobDetails.profile5}</li>
              )}
              {jobDetails.profile6 && (
                <li>{jobDetails.profile6}</li>
              )}
              {jobDetails.profile7 && (
                <li>{jobDetails.profile7}</li>
              )}
              {jobDetails.profile8 && (
                <li>{jobDetails.profile8}</li>
              )}
              {jobDetails.profile9 && (
                <li>{jobDetails.profile9}</li>
              )}
              {jobDetails.profile10 && (
                <li>{jobDetails.profile10}</li>
              )}
              </ul>
              {jobDetails.pref1 && (
                <p className="job-title">Preferred Experience and Education</p>
              )}
              <ul>
              {jobDetails.pref1 && (
                <li>{jobDetails.pref1}</li>
              )}
              {jobDetails.pref2 && (
                <li>{jobDetails.pref2}</li>
              )}
              {jobDetails.pref3 && (
                <li>{jobDetails.pref3}</li>
              )}
              {jobDetails.pref4 && (
                <li>{jobDetails.pref4}</li>
              )}
              {jobDetails.pref5 && (
                <li>{jobDetails.pref5}</li>
              )}
              {jobDetails.pref6 && (
                <li>{jobDetails.pref6}</li>
              )}
              </ul>

              {jobDetails.salariu && (
                <p className="job-title">Salary: {jobDetails.salariu}</p>
              )}
              {jobDetails.disclaimer && (
                <p className="job-title">Disclaimer: {jobDetails.disclaimer}</p>
              )}
              

              {jobDetails.beneficii1 && (
                <p className="job-title">Benefits:</p>
              )}
              <ul>
              {jobDetails.beneficii1 && (
                <li>{jobDetails.beneficii1}</li>
              )}
              {jobDetails.beneficii2 && (
                <li>{jobDetails.beneficii2}</li>
              )}
              {jobDetails.beneficii3 && (
                <li>{jobDetails.beneficii3}</li>
              )}
              {jobDetails.beneficii4 && (
                <li>{jobDetails.beneficii4}</li>
              )}
              {jobDetails.beneficii5 && (
                <li>{jobDetails.beneficii5}</li>
              )}
              {jobDetails.beneficii6 && (
                <li>{jobDetails.beneficii6}</li>
              )}
              {jobDetails.beneficii7 && (
                <li>{jobDetails.beneficii7}</li>
              )}
              </ul>

            <p className="job-title">Contact: office@hha.ro</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="details-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Vacancies() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("open"); // Default filter set to 'open'

  const openJobDetailsModal = (jobDetails) => {
    setSelectedJob(jobDetails);
  };

  const closeJobDetailsModal = () => {
    setSelectedJob(null);
  };

  const jobs = [
    {
      title: "Finance Director for Financial Institution",
      location: "Bucharest, Romania",
      require: {
        one: "min 5 years experience in a similar role",
        two: "people coordination ( team of 10 people)",
        three: "participation in Board",
        four: "previoulsy big4 experience",
        five: "advanced English",
      },
      type: "Full time/Hybrid",
      completed: true,
    },
    {
      title: "Plant Manager",
      location: "Târgu Mureș, Romania",
      require: {
        one: "min 5 years production management in industrial manufacturing",
        two: "engineering degree, preferabily in mechanical engineering",
        three:
          "continous Improvement, Lean, six sigma certifications and knowledge",
        four: "knowledge of German language is a plus",
        five: "advanced English",
      },
      type: "Full time/On site",
      completed: true,
    },
    {
      title: "Construction Site Manager",
      location: "Targoviste, Romania",
      require: {
        one: "absolvent facultatea de constructii -inginer constructor.",
        two: "experienta si competenta in activitatea de constructii civile/industriale - min. 5 ani.",
        three:
          "cunostinte de legislatie si normative in domeniul constructiilor.",
        four: "bune abilitati de comunicare/negociere, planificare si organizare.",
        five: "capacitate de analiza, sinteza si interpretare.",
        six: "coordonarea activitatii bazata pe MS PROJECT.",
        seven: "cunoasterea AUTOCAD.",
        eight:
          "disponibilitatea la deplasari si a lucra in diverse locatii pentru coordonarea santierelor.",
        nine: "capacitatea de a coordona mai multe santiere in acelasi timp.",
        ten: "cunoasterea limbii engleze.",
        eleven: "permis de conducere B.",
        more: "experienta extinsa in toate fazele proiectelor de constructii: planificare, urmarire lucrari, urmarire budget, urmarire comenzi materiale in santier, implementare, livrare.",
        more1: "abilitate in a lucra cu echipe diverse.",
        more2:
          "Asigurarea unei comunicari eficiente si eficace intre membri echipelor de proiect.",
        more3: "capacitatea de a gestiona situatii de criza.",
        more4:
          "identificarea si gestionarea eficienta a riscurilor proiectelor pentru a asigura respectarea termenelor si bugetelor.",
        more5:
          "utilizarea eficienta a resurselor materiale, umane si echipamente pentru a optimiza eficienta si rentabilitatea proiectului.",
      },
      secondTitle1: "Gestionarea Proiectelor",
      secondTitle2: "Coordonarea Echipelor",
      secondTitle3: "Gestionarea Riscurilor",
      secondTitle4: "Managementul Resurselor",
      type: "Full time/On site",
      completed: true,
    },
    {
      title: "Global Total Rewards Director",
      location: "Bucharest, Romania",
      description:
        "\nA strategic role within the Global People Leadership Team. This position is responsible for overseeing the design, development, implementation, and administration of the compensation and benefits programs, as well as managing the global people operations to ensure accurate and efficient management of people processes and data analytics.\n The right hand and partner to the People Leadership Team and EVP, People on all matters related to compensation, operations and compliance.",
      require: {
        one: "bachelor's degree in human resources, business administration, Economics, or a related field. A master's degree – an advantage.",
        two: "a strong background (10+ Years of experience) in developing, managing, and evaluating various components of compensation and benefits programs, data analytics, and HR system management. ",
        three:
          "demonstrated global leadership and management skills, with the ability to effectively lead a team and drive results.",
        four: "analytical mindset with the ability to leverage data to make informed decisions and develop strategies.",
        five: "excellent communication and interpersonal skills to collaborate with stakeholders at all levels.",
        six: "strong articulation, presentation and communication skills.",
        seven:
          "strong attention to detail, organizational skills, and the ability to manage multiple priorities.",
        more: "develop and implement compensation and benefits strategies and policies that align with the organization's goals and objectives.",
        more0:
          "manage all employee lifecycle information and data insights and dashboards.",
        more01:
          "lead the global HR Operations team. Oversee HR knowledge management, streamlining and documenting of HR processes",
        more1:
          "oversee the implementation and maintenance of all HR systems and data, ensuring accuracy and data integrity",
        more2:
          "manage all employee lifecycle information and data insights and dashboards.",
        more3:
          "lead the global HR Operations team. Oversee HR knowledge management, streamlining and documenting of HR processes",
        more4:
          "collaborate with other People partners, such as talent acquisition, HRBPs to ensure alignment and integration of People processes.",
      },
      secondTitle1: "C&B and Compliance:",
      secondTitle2: "People Operations:",
      secondTitle3: "Team Management and Collaboration:",
      type: "Full time/On site",
      completed: true,
    },
    {
      title: "Vertical Marketing Manager Energy / Oil & Gas Utilities",
      location: "Bucharest, Romania",
      description:
        "\nAs the Vertical Segment Manager, the main focus will be leading the development and execution of strategic marketing initiatives for the Energy / Oil & Gas vertical.",
      require: {
        one: "experience in Energy / Oil & Gas Utilities.",
        two: "bachelor’s degree in marketing, Business, or related field. MBA is a plus.",
        three:
          "proven experience in marketing, with a focus on the Energy / Oil & Gas Utilities vertical.",
        four: "in depth knowledge of Energy / Oil & Gas Utilities segment.",
        five: "english - advanced level.",
        six: "ability to work collaboratively in a cross-functional, multinational team environment.",
        more: "leading the content, events, and marketing activities on the Energy / Oil & Gas Utilities vertical.",
        more0: "related market research and analysis.",
        more01: "develop comprehensive marketing strategies.",
        more02:
          "creation and execution of targeted marketing campaigns (offline and online).",
        more03: "maximize reach, impact, performance of campaigns.",
      },
      type: "Full time/Hybrid",
      completed: true,
    },
    {
      title: "Vertical Marketing Manager Public Safety and Security",
      location: "Bucharest, Romania",
      description:
        "\nAs the Vertical Segment Manager, the main focus will be leading the development and execution of strategic marketing initiatives for the Public Safety and Security vertical.",
      require: {
        one: "experience in Public Safety and Security.",
        two: "bachelor’s degree in marketing, Business, or related field. MBA is a plus.",
        three:
          "proven experience in marketing, with a focus on the Public Safety and Security vertical.",
        four: "in depth knowledge of Public Safety and Security segment.",
        five: "english - advanced level.",
        six: "ability to work collaboratively in a cross-functional, multinational team environment.",
        more: "leading the content, events, and marketing activities on the Public Safety and Security vertical.",
        more0: "related market research and analysis.",
        more01: "develop comprehensive marketing strategies.",
        more02:
          "creation and execution of targeted marketing campaigns (offline and online).",
        more03: "maximize reach, impact, performance of campaigns.",
      },
      completed: true,
      type: "Full time/Hybrid",
    },
    {
      title: "B2B Area Sales Manager in Plastic Industry",
      location: "Bucharest, Romania",
      description:
        "\nAs a rapidly growing international company, our client works tirelessly to offer customers the best solutions, therefore looking for a B2B Sales Manager in Bucharest, Romania.",
      require: {
        one: "B2B sales experience, preferably in plastic industry related to manufacturing and construction sector, as well as FMCG and pharmaceutical",
        two: "direct selling experience.",
        three: "good presentation, communication and negotiation skills.",
        four: "english is a must.",
      },
      type: "Full time/Hybrid",
      completed: true,
    },
    {
      title: "General Manager IFN",
      location: "Bucharest. Romania",
      completed: true,
      require: {
        one: "represents the Company towards third parties, in accordance with the representation method specified in the Company's Articles of Association and in line with the current representation practices within the Company.",
        two: "ensures the leadership and management of the Company's activities to achieve the business objectives established in the Articles of Association and the goals set by the General Shareholders' Meeting for the respective financial year.",
        three:
          "provide reports to the Board of Directors of the Company periodically or upon its request, regarding the undertaken operations, financial and other indicators of the company, and any issues indicated by the Board of Directors falling within their competence to resolve.",
        four: "present to the Board of Directors/Shareholders the balance sheet, profit and loss account, financial plan reports, all information regarding the acquisition and disposal of company assets, technical projects (e.g., the launch of new solutions or technology).",
        five: "notify the Board of Directors/Shareholders when the Company is at risk of operating at a loss, and indicate and warn about market threats.",
        six: "build a positive market reputation and image for the Company.",
        seven:
          "develop business plans and strategies. Explore opportunities to develop new partnerships and secure new resources to address employees' and company’s development priorities.",
        more: "sets the company's strategy and ensures it is cascaded and operationalized.",
        more0:
          "ensures that the company's activities are carried out in accordance with legal requirements and those of the group, implementing specific policies and procedures in line with current legislation and the company's strategy.",
      },
      type: "Full time/On site",
    },
    {
      title: "Senior Director IT & Security",
      location: "Remote Global",
      description:
        "\nAs the Senior Director, Information Technology and Security you will be playing a pivotal role in defining and implementing the strategic direction of our client’s rapidly growing organization.",
      require: {
        one: "proven experience in developing IT strategy and building IT organizations in a SAAS environment.",
        two: "12+ years of progressive IT experience with 8+ years of leadership experience.",
        three:
          "strong technical expertise in IT architecture, data integration, and networking infrastructure.",
        four: "roficiency in SAAS applications, including NetSuite, OKTA, Adaptive Planning, Zendesk, and BambooHR.",
        more: "Strategic Leadership – develop and execute the strategic vision for the Information Technology and Security Department.",
        more0:
          "Governance and Metrics – develop reporting and metrics to measure IT value and ensure compliance with regulatory requirements and internal policies.",
        more01: "SAAS Application Management.",
        more02: "Security and Controls.",
        more03: "Operational Excellence.",
        more04: "Team Development.",
      },
      type: "Full time/Remote",
      completed: true,
    },
    {
      title: "Social Worker/Community Worker",
      location: "Bucharest, Romania",
      completed: true,
      description:
        "\nCommunity Based Program for Blind children and young people",
      require: {
        one: "passionate about social change and inclusion of people with disabilities to provide case management services to Blind/sight impaired children, families, and young adults.",
        two: "work within the multi-disciplinary team.",
        three:
          "to access quality education and employment and prevent marginalization and discrimination.",
        four: "may support the organizations’ beneficiaries living with sight loss to become independent in the community.",
        five: "responsible for assisting with advocacy and human rights efforts by investigating and providing support, while safeguarding their civil liberties.",
        six: "learning to determine social service needs of clients, develop appropriate solutions, and case plans, and provide ongoing case management services.",
      },
      type: "Full time/On site",
    },
    {
      title: "Maritime Construction Manager ( Caisson)",
      location: "Maroc",
      completed: true,
      type: "Full time/On site",
    },
    {
      title: "Construction Manager Oil & Gas",
      location: "Dubai Fountain St - Dubai - United Arab Emirates",
      description:
        "\nThe successful Construction Manager will lead an established team of Section Head and Engineers all working together to secure the completion of the project within time and budget. Their responsibility includes the definition of detailed construction plans and schedule giving priorities where necessary;\n They will ensure the availability of technical documentation and on time request for necessary project personnel, materials and equipment.\nThey will also be responsible for the Financial results of the Project and the proper management of resources (materials, equipment & manpower) in order to ensure financial results better than budgeted. The main focus is always customer satisfaction.",
      require: {
        one: "BSc or MSc in any relevant Engineering Discipline (ideally Civil or Mechanical)",
        two: "min. 5 years management experience in construction industry at similar level",
        three:
          "proven leadership skills",
        four: "proven analytical, planning and organizing skills",
        five: "communication and interpersonal skills",
        six: "capability to perform under stressful situations",
        seven: "result driven and decisive personality",
        eight: "basic business, legal and contractual awareness",
        nine: "fluency in the English language",
        ten: "knowledge of project management tools",
        eleven: "knowledge of basic financial concepts",
      },
      type: "Full time/On site",
      completed: true,
    },
    {
      title: "Project Manager Construction",
      completed: true,
      location: "Targoviste, Romania",
      description: "\nUrmareste realizarea proiectelor de constructii conform cerintelor clientului si conditiilor contractuale asumate.",
        require: {
          one: "absolvent facultatea de constructii -inginer constructor.",
          two: "experienta si competenta in activitatea de constructii civile/industriale - min. 10 ani in activitatea de Site Manager si/sau Project Manager",
          three: "cunostinte de legislatie si normative in domeniul constructiilor",
          four: "bune abilitati de comunicare/negociere, planificare si organizare.",
          five: "capacitate de analiza sinteza si interpretare.",
          six: "coordonarea activitatii bazata pe MS PROJECT.",
          seven:
            "cunoasterea AUTOCAD",
          eight: "certificari in managementul proiectelor ( constituie un avantaj).",
          nine: "disponibilitatea la deplasari si a lucra in diverse locatii pentru coordonarea santierelor.",
          ten: "capacitatea de a coordona mai multe santiere in acelasi timp .",
          more: "Experienta extinsa in toate fazele proiectelor de constructii :",
          more0:
            "Planificare , urmarire lucrari, urmarire budget , urmarire comenzi materiale in santier , implementare ,livrare.",
          more01:
            "Abilitate in a lucra cu echipe diverse.",
          more1:
            "Asigurarea unei comunicari eficiente si eficace intre membri echipelor de proiect.",
          more2:
            "Capacitatea de a gestiona situatii de criza",
          more3:
            "Identificarea si gestionarea eficienta a riscurilor proiectelor pentru a asigura respectarea termenelor si bugetelor .",
          more4:
            "Utilizarea eficienta a resurselor materiale , umane si echipamente pentru a optimiza eficienta si rentabilitatea proiectului.",
          more5: "Intelegere profunda a aspectelor tehncie ale constructiilor , normelor si reglementarilor din domeniul constructiilor."
        },
      secondTitle1: "Gestionarea Proiectelor",
      secondTitle2: "Coordonarea Echipelor",
      secondTitle3: "Gestionarea Riscurilor",
      secondTitle4: "Managementul Resurselor",
      type: "Full time/On site",
      salariu: "2.500-3.000 eur (NET) + bonusuri in functie de performanta"
    },
    {
      title: "National Key Account Manager",
      location: "Bucharest, Romania",
      description:
        "\nCautam un Manager vanzari IKA, cu experienta de vanzare pe piata de IKA (retele internationale de magazine retail), ambitios, curajos si motivat de evolutie permanenta (personala, a vanzarilor, a celor cu care lucreaza).",
      require: {
        one: "experienta intr-o pozitie similara, pe piata de IKA (retele international de magazine retail) de cel putin 4 ani;",
        two: "cunoasterea pietei de birotica&amp;papetarie – reprezinta un avantaj;",
        three:
          "proactivitate in gasirea de solutii si rezolvare a situatilor;",
        four: "persuasiune si consecventa;",
        five: "capacitate de analiza si sinteza;",
        six: "abilitate si experienta in managementul conflictelor;",
        seven: "Cunostinte si experienta de lucru cu bugete;",
        eight: "Cunoasterea limbii engleze cel putin de nivel mediu – reprezinta un avantaj;",
        nine: "Operare PC: Word, Excel;",
        ten: "Carnet de conducere categoria B.",
        more: "Raspunde de realizarea target de profit direct,cifra afaceri si margine pentru departamentul IKA",
        more0: "Stabileste strategia de vanzare a departamentului in conformitate cu strategia companiei",
        more01: "Stabileste termenii si conditiile de colaborare cu clientii",
        more02: "Decide si participa la negocierea directa pe conditiile de colaborare cu clientii",
        more03: "Verifica si valideaza campaniile si promotiile conform calendarului de marketing/ la nevoie",
        more1: "Propunerea si implementarea de proiecte (promotii) comune cu fiecare client IKA in parte cat si a proiectelor locale per magazin;",
        more2: "Promovarea si vanzarea produselor din portofoliu;",
        more3: "Analiza concurentei si propunerea de proiecte strategice in acord cu aceasta analiza.",
      },
      beneficii1: "un pachet motivant, format din parte fixa si parte variabila, direct proportionala cu rezultatele obtinute;",
      beneficii2: "tichete de masa;",
      beneficii3: "smartphone / laptop;",
      beneficii4: "masina (se poate folosi si masina proprie, cu decontarea cheltuielilor);",
      beneficii5: "pachet de servicii medicale;",
      beneficii6: "abonament la Bookster;",
      beneficii7: "posibilitatea de a accesa servicile 7Card;",
      type: "Full time/On site",
      completed: true,
    },
    {
      title: "Office Assistant",
      location: "Bucharest, Romania",
      description:
        "\nCandidatul ideal trebuie să cunoască limba română și limba engleză, să aibă o atitudine proactivă față de învățare și dezvoltare, să ofere sprijin colegilor și să promoveze un mediu de lucru pozitiv. \nUn bun asistent de birou trebuie să aibă abilități organizatorice excelente și un bun simț al detaliilor, astfel încât nimic să nu fie neglijat, dar trebuie să fie capabil să lucreze bine cu alte persoane și cu clienții, dacă este necesar.",
      require: {
        one: "înțelegere temeinică a procedurilor de gestionare a birourilor",
        two: "abilități excelente de organizare și de gestionare a timpului",
        three: "abilități analitice și aptitudini de rezolvare a problemelor",
        four: "abilități de comunicare scrisă și verbală",
        five: "dorința de a învăța și de a se adapta la noi responsabilități.",
        six: "cunoștințe de operare în MS Office",
        more: "organizarea biroului și asistarea colegilor în moduri care să eficientizeze procedurile",
        more0: "crearea și actualizarea înregistrărilor, asigurând acuratețea și validitatea informațiilor",
        more01: "programează și planifică întâlniri și programări",
        more02: "rezolvă defecțiunile legate de birou și răspunde la solicitări sau probleme",
        more03: "efectuați sarcini de recepționer atunci când este necesar",
      },
      type: "Full time/On site",
      completed: true,
    },
    {
      title: "Senior Attorney | Corporate & Commercial Law",
      location: "Bucharest, Romania",
      description:
        "\nSeeking a Senior Attorney for the consultancy practice| Corporate & Commercial Law. \nAre you an accomplished attorney looking for a new challenge and be part of a legal team renowned for its commitment to excellence and a client-focused approach? Do you thrive in a dynamic environment where your skills are valued and your ideas arealways heard? \nIf the answer is yes, we would love you to join our team!",
      require: {
        one: "law degree, admitted to the bar.",
        two: "at least 6 (six) years of experience practicing corporate and commercial law, having previously assisted high-profile clients and large companies.",
        three: "proficient in English language, written and spoken.",
        four: "personal and professional skills we expect.",
        five: "strong analytical, research, and writing skills.",
        six: "excellent communication and interpersonal abilities.",
        seven: "demonstrated ability to work effectively both independently and as part of a team.",
        eight: "commitment to upholding ethical standards and client confidentiality.",
        more: "drafting, reviewing, and negotiating various legal documents, including contracts, agreements, and corporate policies.",
        more0: "advising on corporate governance matters and ensuring compliance with relevant laws and regulations.",
        more01: "supporting corporate transactions, including mergers, acquisitions, and divestitures.",
        more02: "conducting legal research and providing guidance on emerging legal issues and industry trends.",
      },
      beneficii1: "competitive salary commensurate with experience and performance bonus prospects.",
      beneficii2: "opportunities for professional development and advancement.",
      beneficii3: "involvement in large-scale projects carried out at national and international level.",
      beneficii4: "supportive and friendly work environment.",
      type: "Full time/On site",
      completed: true,
    },
    {
      title: "Senior Attorney | White Collar Crime",
      location: "Bucharest, Romania",
      description:
        "\nSeeking a Senior Attorney for the consultancy practice| Corporate & Commercial Law. \nAre you an accomplished attorney looking for a new challenge and be part of a legal team renowned for its commitment to excellence and a client-focused approach? Do you thrive in a dynamic environment where your skills are valued and your ideas arealways heard? \nIf the answer is yes, we would love you to join our team!",
      require: {
        one: "law degree, admitted to the bar.",
        two: "at least 4 (four) years of experience practicing litigation law, criminal law, with a focus on criminal defense.",
        three: "proven track record of success in representing clients in court and achieving favorable outcomes.",
        four: "proficient in English language, written and spoken.",
        five: "driver’s license.",
        six: "personal and professional skills we expect.",
        seven: "strong analytical, research, and writing skills.",
        eight: "excellent communication and interpersonal abilities.",
        nine: "demonstrated ability to work effectively both independently and as part of a team.",
        ten: "commitment to upholding ethical standards and client confidentiality.",
        eleven: "ability to work effectively under pressure and manage competing priorities.",
        more: "providing strategic legal advice and representation to clients in criminal proceedings, including trials and hearings.",
        more0: "managing a diverse caseload of White Collar criminal matters, ranging from fraud and bribery to tax evasion and cybercrime.",
        more01: "conducting thorough legal research, case analysis, and preparation of defense strategies.",
        more02: "building and maintaining strong relationships with clients, investigation bodies and other legal professionals.",
      },
      beneficii1: "competitive salary commensurate with experience and performance bonus prospects.",
      beneficii2: "opportunities for professional development and advancement.",
      beneficii3: "working with high-profile clients (individuals and companies) in resonant criminal cases.",
      beneficii4: "supportive and friendly work environment.",
      type: "Full time/On site",
      completed: true,
    },
    // {
    //   title: "Business Developer | Casa Expeditii",
    //   location: "Sibiu, Romania",
    //   description:
    //     "\nCandidatul ideal trebuie să cunoască limba română și limba engleză, să aibă o atitudine proactivă față de învățare și dezvoltare, să ofere sprijin colegilor și să promoveze un mediu de lucru pozitiv. \nUn bun asistent de birou trebuie să aibă abilități organizatorice excelente și un bun simț al detaliilor, astfel încât nimic să nu fie neglijat, dar trebuie să fie capabil să lucreze bine cu alte persoane și cu clienții, dacă este necesar.",
    //     require: {
    //     one: "Experienta relevanta in domeniu, experienta vanzari case experditii este un plus",
    //     two: "Baza de date clienti constituie un avantaj",
    //     three: "Networking este foarte important",
    //     more: "Persoana aleasa trebuie sa stie foarte bine tipurile de remorci care sunt pe piata, capacitatea lor de incarcare, aranjarea marfii in interior in cazul grupajelor si amarfurilor vrac",
    //     more0: "Job-ul va fi sa caute marfuri care se vor incarca in camioanele partenerilor externi sau camioane proprii disponibile",
    //     more01: "Daca nu sunt camioane proprii disponibile, are responsabilitaea sa gaseasca camioane la furrnizorii agreati",
    //     more02: "De asemenea are responsabilitatea sa caute marfa care sa se adapteze disponibilitatilor",
    //     more03: "Va face comenzile de transport",
    //     more04: "Trebuie sa urmareasca marfurile/camioanele zilnic, daca sunt particularitati si de 2 ori/zi, pentru a nu se depasi timpii de tranzit",
    //     more05: "La finalul cursei va trebui sa dea spre facturare la contabilitate, date care vor fi transmise DOAR prin mail",
    //   },
    //   type: "Full time/Hybrid",
    //   salariu: "Salariu motivant + comision la incasare, acest comision se va stabili de comun acord la inceputul perioadei de proba + Beneficii!!"
    // },
    {
      title: "Key Account Manager",
      location: "Bucharest, Romania",
      completed: true,
      description:
        "\nKey Account Manager-ul va raporta CEO/ Deputy CEO, se va ocupa de relatia cu clientii / consumatorii finali de energie electrica, va administra un portofoliu de clienti finali si va dezvolta acest portofoliu.",
        require: {
        one: "Studii superioare in domeniul economic sau electrotehnic",
        two: "Experienta in domeniu de minim 5 ani",
        three: "Experienta in vanzari sau KAM de minim 5 ani",
        four: 'Abilitati de comunicare, prezentare, negociere',
        five: 'Limba Engleza- obligatoriu',
        six: 'Permis de conducere categoria A',
        more: "Identificarea potențialilor clienți pentru a stabili relații și a identifica oportunități de vânzare;",
        more0: "Prezentarea detaliata a produselor și/sau serviciilor companiei, evidențiind beneficiile și caracteristicile cheie pentru a satisface nevoile clienților;",
        more01: "Negocierea termenilor și condițiilor de vânzare cât și prețurilor pentru a obține acordul clienților, gestionând eventualele obiecții și negociind în mod proactiv;",
        more02: "Dezvoltarea și prezentarea ofertelor personalizate, adaptate nevoilor și bugetelor clienților;",
        more03: "Monitorizarea și gestionarea întregului proces de vânzare, de la identificarea oportunităților până la încheierea tranzacției;",
        more04: "Menținerea relațiilor cu clienții existenți, oferind suport post-vânzare și asigurându-se că sunt îndeplinite așteptările acestora;",
        more05: "Identificarea direcţiilor de dezvoltare şi propunerea promovarii de produse/soluţii noi;",
        more06: "Asigurarea calitatatii serviciilor pre-vânzare;",
        more07: 'Elaborarea/implementarea programelor de măsurare a satisfacţiei clienţilor, propunerea măsurilor de îmbunătăţire;',
        more08: 'Urmărirea respectarii obligaţiilor contractuale către clienţi;',
        more09: 'Asigurarea rezolvarii cerinţelor clienţilor, concomitent cu susţinerea intereselor firmei;',
        more10: 'Determinarea liniei comerciale de dezvoltare a societăţii pe zona de furnizare;',
        more11: 'Întocmirea rapoartelor şi situațiilor ce reflectă activitatea comercială;',
        more12: 'Cunoaşterea: acte legislative în domeniul comercial; condițiile pieței și perspectivele de dezvoltare a acestora; principiile organizării societăţii; procedura de bugetare; sistemul de instrumente comerciale; formulare de raportare;',
        more13: 'Dezvoltarea măsurilor pentru reducerea impactului factorilor care conduc la creșterea prețurilor;',
        more14: 'Răspunderea stabilirii corecte a documentelor care se întocmesc în domeniul comercial şi de circuitul lor în cadrul societăţii;',
        more15: 'Consultanta către conducerea societăţii în probleme care sunt de competenţa serviciului;',
        more16: 'Reprezentarea societatii în cazurile încredinţate prin delegare;',
        more17: 'Răspunde de eficienţa şi calitatea lucrărilor executate în cadrul serviciului la termenele stabilite prin reglementări interne sau prin alte acte normative;',
        more18: 'Răspunde de respectarea programului de lucru şi a disciplinei muncii în cadrul serviciului pe care îl coordonează;',
        more19: 'Răspunde de îndeplinirea oricăror altor sarcini atribuite de superiorul ierarhic, de regulamentul de aplicare a acesteia, precum şi de celelalte reglementări legale în vigoare, pe linie comercială;',
      },
      salariu: 'Se ofera salariul atractiv, bonus anual, masina de serviciu.',
      type: "Full time/On site",
      beneficii1: 'Exista posibilitate de dezvoltare, se ofera cursuri, training-uri.',
    },
    {
      title: "Chief HR Officer",
      location: "Global",
      description:"\nAs a key member of our client’s team, an international software creator for gaming industry, with presence in more than 25 countries, the CHRO will play a crucial role in attracting, retaining, motivating and developing the international teams.",
      require: {
        one: "Proven experience as a CHRO, or in a similar senior strategic leadership role in a fast-paced, technology-driven organization (minimum 10 years)",
        two: "Demonstrated success in developing and implementing strategic HR initiatives that drive business outcomes and high performance at regional or global level.",
        three: "Data-driven mindset with the ability to leverage HR analytics and metrics for decision-making.",
        more: "Global Employer Branding",
        more0: "HR Operations and Performance Management",
        more01: "Culture and Employee Experience",
        more02: "Global Talent Acquisition and Leadership and Talent Development",
      },
      type: "Full time/Remote",
      completed: true,
    },
    {
      title: "Senior Accountant",
      location: "Bucharest, Romania",
      description:"\nFor our client,  a global family of 30,000 professionals across 260 independent firms working in more than 100 countries, we are looking for a Senior Accountant, based in Bucharest.      ",
      require: {
        one: "More than 3-4 years of experience in accounting;",
        two: "Experience in consulting company -advantage;",
        three: "Well organized and communicative;",
        four: 'Good command of English;',
        five: 'Excellent computer knowledge:',
        more: "Responsible for the review/preparation of all primary accounting documents according to the local compliance regulations;",
        more0: "Responsible for the monthly bookkeeping, registration of primary documents (invoices, bank statements, advance payment reports);",
        more01: "Responsible for the accurate preparation of balance sheet and income statements and various other accounting statements and reports required by the client;",
        more02: "Review and check the accuracy of payroll records, sales, purchase ledgers etc.;",
        more03: 'Prepare the monthly tax returns, by indicated deadlines;',
        more04: 'Identify particular risks related to the client transaction',
        more05: 'Reconciliation of the accounts from the balance sheet;',
        more06: 'Document storage after closing procedures;',
        more07: 'Coordinate the juniors.',
      },
      type: "Full time/On site",
      salariu: 'Competitive;',
      beneficii1: 'Clear career growth with bi-annual performance assessment;',
      beneficii2: 'ACCA full support (covered fees and study materials, paid study leaves);',
      beneficii3: 'International business exposure;',
      beneficii4: 'Morning flexible hours;',
      beneficii5: 'Friendly leadership ;',
      beneficii6: 'Modern office;',
      completed: true,
    },
    {
      title: "Internal Auditor",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nFor our client,  a global family of 30,000 professionals across 260 independent firms working in more than 100 countries, we are looking for a Internal Auditor, based in Bucharest.\nWe are looking for enthusiastic team members, who are proactive, passionate, self-driven and who are willing to learn and build a promising career in a dynamic and friendly environment.      ",
      require: {
        one: "Degree in economical area or are at the final stage of completion;",
        two: "Experience in audit or other financial sector -advantage;",
        three: "Good knowledge of accounting principles and usual accounting notes;",
        four: 'Willingness to work within a dynamic team;',
        five: 'Good command of English;',
        six: 'Thirsty for new challenges and strong analytical skills;',
        more: "Inventory on the client companies’ status",
        more0: "Creating and maintaining audit files",
        more01: "Preparing summary documents and reports",
        more02: "Testing controls and identifying risks",
        more03: 'Validating important financial data and records',
      },
      type: "Full time/On site",
      beneficii1: 'Clear career growth with bi-annual performance assessment;',
      beneficii2: 'ACCA full support (covered fees and study materials, paid study leaves);',
      beneficii3: 'International business exposure;',
      beneficii4: 'Morning flexible hours;',
      beneficii5: 'Friendly leadership ;',
      beneficii6: 'Modern office;',
    },
    {
      title: "Digital Marketing Manager",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nOur client is looking for a person willing to join our team, with special skills in the field of digital marketing, branding & communication in Social Media. ",
      require: {
        one: "University Degree, preferably in Marketing and Communication or Public Relations;",
        two: "1-2 years of experience in brand marketing and communication, respectively online promotion strategies",
        three: "Advanced skills in working with Instagram, Facebook, Linkedin and other digital promotion platforms; therefore Social Media Skills;",
        four: 'Positive & assertive communication skills in conversations with internal and external stakeholders;',
        five: 'Attention to details, very good planning and organization skills;',
        six: 'Positive, proactive and last but not least creative attitude in identifying solutions to various situations;',
        seven: 'Assuming responsibility for the assigned tasks, respectively for the results obtained;',
        more: "Creating digital content for Social Media, planned and/or in real time;",
        more0: "Conception and proposal of a digital marketing strategy for the brands of the company/Group of companies;",
        more01: "Development of digital promotion campaigns, according to the Strategic Plan",
        more02: "Coordination of the digital marketing calendar & social media promotions;",
        more03: 'Collaboration with the team to implement new tactics and tools aimed at improving business results and improving partnerships at a general level;',
        more04: 'Contributes to the development of a brand strategy.',
      },
      type: "Full time/Hybrid",
    },
    {
      title: "Energy Sales Support Specialist",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nThe Energy Sales Support Specialist will play a critical role in supporting the sales team by managing administrative tasks, coordinating with various departments, and ensuring a seamless sales process. \nThis position requires excellent organizational skills, attention to detail, and the ability to handle multiple tasks simultaneously.\nThe successful candidate will be a proactive problem solver with strong communication skills and a customer-focused mindset.",
      require: {
        one: "Bachelor’s degree in business administration, marketing, or a related field;",
        two: "Minimum of 2 years of experience in a sales support or administrative role, preferably in the energy sector.",
        three: "Proficiency in CRM software (e.g., Salesforce) and Microsoft Office Suite (Word, Excel, PowerPoint).",
        four: 'Excellent organizational and multitasking skills.',
        five: 'Strong communication and interpersonal skills.',
        six: 'Ability to work independently and as part of a team.',
        seven: 'High level of attention to detail and accuracy.',
        eight: "Customer-oriented attitude with a commitment to providing exceptional service.",
        more: "Assist sales representatives or KAM with preparing proposals, presentations, and contracts.",
        more0: "Coordinate with internal departments (e.g., marketing, operations) to ensure timely delivery of sales materials and resources.        ",
        more01: "Maintain accurate and up-to-date records of customer interactions and transactions in the CRM system.",
        more02: "Respond to customer inquiries and provide information about our products and services.",
        more03: 'Resolve customer issues in a timely and efficient manner, escalating to the appropriate team members as needed.',
        more04: 'Follow up with customers to ensure satisfaction and address any ongoing needs or concerns.',
        more05: "Manage the sales team's calendar, schedule appointments, and organize meetings.",
        more06: "Prepare and distribute regular sales reports and performance metrics.",
        more07: "Assist with the onboarding of new sales team members, including training on sales processes and tools.",
        more08: "Identify opportunities to streamline sales processes and improve efficiency.",
        more09: "Implement best practices for data management and customer relationship management.",
        more10: "Provide feedback to the sales manager on ways to enhance the sales support function.",
      },
      type: "Full time/On site",
    },
    {
      title: "Office Manager",
      completed:true,
      location: "Bucharest, Romania",
      description:"\nOur client is a Romanian company, with more than 10 years’ experience in the field of energy.\nThey are currently looking for an OFFICE MANAGER to help with organizing daily activities of their office, situated in the Northern part of the city.\nWe are searching for a candidate knowing well Romanian language, as well as English, with a positive, proactive attitude, willing to learn and develop, helping others, and assisting colleagues.\nThe OFFICE MANAGER must have great planning and organizing abilities, attention to detail, and good customer service and team work.",
      require: {
        one: "Excellent organizational and time management skills;",
        two: "Analytical and problem-solving skills;",
        three: "Written and verbal communication skills;        ",
        four: 'Willingness to learn and adapt to new responsibilities;        ',
        five: 'Working knowledge of MS Office.',
        more: "Welcoming visitors (clients, collaborators, suppliers, etc.) and inviting them to meeting rooms;",
        more0: "Managing CEO’s agenda;",
        more01: "Managing  ordering and distribution of office supplies;",
        more02: "Managing relationship with travel agencies for tickets, hotel reservations, etc. ",
        more03: 'Sending/receiving correspondence /  parcels.',
      },
      type: "Full time/On site",
    },
    {
      title: "Country Manager",
      location: "Global",
      description:"\nWe are looking for a Country Manager Italy to join us in shaping the future of our company presence in this dynamic market. As our Country Manager, you'll drive growth, foster relationships, and embody our values. You will start from scratch our Italy operations, crafting strategies, building partnerships, and igniting success. If you're passionate about making an impact, fluent in Italian and English, and ready to join us on an exciting journey revolutionizing market research, this role is your opportunity to thrive.",
      require: {
        one: "You bring a Degree in Business Administration, Marketing, or related field; MBA preferred",
        two: "Minimum 10 years of working experience in sales, business development, and marketing, preferably in Market Research.",
        three: "You bring extensive experience in strategic leadership roles, with a proven track record of developing and executing business strategies that drive growth and profitability.",
        four: 'You demonstrated experience in managing and leading cross-functional teams, with a focus on fostering collaboration, innovation, and high performance',
        five: "You have an extensive experience working in Italy and know the market's challenges and opportunities in depth",
        six: "You have exceptional organizational and process skills; you are comfortable building something from scratch without an established infrastructure within the market",
        seven: "You distinguish yourself as a strong sales leader with expertise across all funnel stages",
        eight: "You have experience working in market research with an understanding of the competitive landscape, stakeholders, and buying centers at fast-growing companies and multinational organizations",
        nine: "You have the drive to scale a high-potential company and revolutionize an entire industry",
        ten: "You are proficient in Italian and English",
        more: "Build an organizational structure and develop a go-to-market strategy and product positioning for our Italy business; determining product-market fit, defining the GTM strategy and positioning, and scaling the organization to meet business objectives",
        more0: "Build and Manage a team of research, sales managers; tap into your network to scale the team quickly and recruit, train, and develop a high-performing and highly engaged team",
        more01: "Lead the planning and execution of sales, pre-sales, and market research strategies based on market needs as well as marketing and customer success projects in cooperation with the respective department managers",
        more02: "Develop operational procedures, including communication workflows and establish sales training, enablement, and operations to ensure a comprehensive understanding of industry dynamics and trends, potential target customers, and lead generation opportunities and multipliers",
        more03: 'Represent our company in Italy, embodying our brand and values to customers, partners, and stakeholders',
        more04: "Work closely with the executive team to align business strategies, goals, and objectives with company-wide initiatives",
      },
      type: "Full time/Remote",
      beneficii1: 'Unlimited or Flexible PTO, Computer Provided',
      beneficii2: 'Flexibility Policy',
      beneficii3: "All the hardware you need and your own MacBook",
      beneficii4: "In case you're located in Germany or Spain, you will have access to a Subsidised Urban Sports Club membership",
      benficii5: "In case you're located in one of the cities where most of our fellow Appinioneers are (Hamburg, Berlin, Munich, London, Madrid, Barcelona, or New York), you can get access to our Co-working spaces",
      completed: true,
    },
    {
      title: "Senior Environment Expert",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nIndustry: Renewable Energy Projects\nThe Senior Environmental Expert must have relevant experience in Romanian/EU environmental permitting process, environmental and social impact assessments, environmental risks’ evaluation, mitigation and management, in establishment of project programs for the monitoring and management of environmental aspects, compliance and objectives’ achievement, including in regard with the integration of international regulations.",
      require: {
        one: "Bachelor’s or Master’s degree in Environmental Science, Environmental Engineering, or a related field.",
        two: "Experience of 7-10 years (or more) in environmental management, preferably in the energy sector with a focus on wind energy project development.",
        three: "In-depth knowledge of environmental regulations, standards, and best practices.",
        four: 'Proven track record in developing and implementing EMS.',
        five: 'Excellent communication and interpersonal skills.',
        six: 'Ability to work independently and as part of a team.',
        seven: 'Proficiency in using environmental management software and tools.',
        more: "Experience in Resource Efficiency and Pollution Prevention",
        more0: "Experience in Review of Land Acquisition and Involuntary Resettlement Processes",
        more01: "Experience in Biodiversity Conservation and Sustainable Management of Living Natural Resources",
        more02: "Experience in Cultural Heritage",
        more03: 'Experience in Post-Construction Fatality Monitoring',
      },
      type: "Full time/On site",
    },
    {
      title: "Senior M&A and Real Estate Lawyer",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nFor our client, a well-known international Law Firm, we are looking for a Senior M&A and Real Estate Lawyer to join the team in Bucharest.\nThe job will involve client interaction, as well as project management, multitasking and team coordination and responsibilities for multiple projects at any given time. ",
      require: {
        one: "Has at least 5 years of practical experience in Real Estate /M&A, in mergers and acquisitions, private equity, joint ventures, corporate structures, real estate – with particular focus on transactional work, team and work management and organizational skills;",
        two: "Public M&A, capital markets, financial regulatory expertise will be beneficial.",
        three: "Ability to work on complex transactions for international clients and global law firms;",
        four: 'Attention to detail, teamwork and great communication skills',
        five: 'Ambitious, driven, high standards of quality',
        six: 'Full professional proficiency in English.',
      },
      type: "Full time/On site",
      beneficii1: 'Professional development and training in a leading CEE law firm',
      beneficii2: 'Modern office in the center of Bucharest',
      beneficii3: 'Interesting work for reputable local and international clients',
      beneficii4: 'Pleasant work environment;',
      beneficii5: 'Competitive compensation including future salary growth and annual performance bonus;',
      beneficii6: 'Many other benefits',
    },
    {
      title: "Junior Real Estate Lawyer",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nFor our client, an international Law Firm, we are seeking a Junior Lawyer to join their dynamic team in Bucharest.\nThis full-time position is ideal for someone with real estate law experience and specialization. \nThe successful candidate will provide legal advice, handle cases, and manage client relationships to support our client’s objectives.",
      require: {
        one: "Law degree from a recognized university.",
        two: "Licensed to practice law in Romania.",
        three: "Minimum of  1 year of professional experience in real estate law.",
        four: 'Strong understanding of Romanian legal procedures and regulations.',
        five: 'Excellent analytical, problem-solving, and organizational skills.',
        six: 'Fluent in Romanian and English;',
        seven: 'Proven ability to handle multiple cases with attention to detail and accuracy.',
        eight: 'Excellent communication skills, both written and verbal.',
        nine: 'Ability to work independently and as part of a team.',
        more: "Advise and represent clients in matters related to real estate law.",
        more0: "Prepare and review legal documents, including contracts, leases and deeds.",
        more01: "Navigate complex legal frameworks and ensure compliance with Romanian law.",
        more02: "Represent clients in negotiations and dispute resolutions.",
        more03: 'Stay updated with changes in law and advise clients on potential impacts.',
        more04: 'Liaise with local authorities and other legal professionals to effectively manage client cases.',
        more05: 'Conduct legal research and provide actionable insights.',
        more06: 'Maintain client confidentiality and manage sensitive information with discretion.',
      },
      type: "Full time/On site",
      beneficii1: 'Competitive salary package.',
      beneficii2: 'Opportunities for professional development and training.',
      beneficii3: 'Dynamic and supportive work environment',
    },
    {
      title: "Analist Tranzactionare Energie Electrica",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nAnalist Tranzacționare Energie Electrică pe Piața Intrazilnică \nSuntem în căutarea unui Analist Tranzacționare Energie Electrică pe Piața Intrazilnică dedicat și dornic să evolueze pentru a se alătura echipei noastre. \nAceastă poziție implică activități precum: analiză de piață și strategii de tranzacționare în vederea dezvoltării liniei de bussines pentru a maximiza profitabilitatea, a minimiza costurile de echilibrare și a gestiona eficient riscul în cadrul piețelor de energie electrică.",
      require: {
        one: "Disponibilitate pentru program de lucru în ture, inclusiv ture de noapte.",
        two: "Abilitatea de a acționa rapid și eficient, intr-un timp foarte scurt.",
        three: "Gândire proactivă și capacitatea de a propune și implementa îmbunătățiri.",
        four: 'Abilitatea de a dezvolta strategii de tranzacționare și de a le implementa.',
        five: 'Cunoștințe tehnice pentru a lucra cu instrumente analitice și platforme de tranzacționare.',
        six: 'Abilitatea de a lucra în echipa și a colabora eficient și operativ cu celelalte departamente din cadrul companiei.',
        seven: 'Cunostinte Pachet Microsoft Office.',
        more: "Efectuarea analizelor pe piețele de energie electrică pentru a sprijini strategiile de tranzacționare. Aceasta implică monitorizarea tendințelor, identificarea oportunităților și evaluarea riscurilor.",
        more0: "Contribuirea la înțelegerea tendințelor pieței și la identificarea oportunităților de valoare prin analize cantitative și calitative.",
        more01: "Dezvoltarea și implementarea strategiei de tranzacționare pe Piața Intrazilnică. Acest lucru include luarea deciziilor pentru tranzacționarea energiei electrice din portofoliul propriu și gestionarea riscului.",
        more02: "Tranzacționarea instrumentelor dedicate Pieței Intrazilnice.",
        more03: 'Optimizarea portofoliului de energie pentru diminuarea costurilor din Piața de Echilibrare.',
        more04: 'Automatizarea proceselor pentru eficientizarea metodelor de lucru.',
        more05: 'Dezvoltarea și menținerea relațiilor cu Operatorul comercial de energie electrică (OPCOM) și Partea Responsabilă cu Echilibrarea (PRE). Cooperarea strânsă cu membrii echipei și schimbul activ de informații și analize de piață.',
      },
      type: "Full time/On site",
      beneficii1: 'Salariu motivant și spor de ture;',
      beneficii2: 'Bonusuri în funcție de performanță (KPI);',
      beneficii3: 'Asigurare medicală;',
      beneficii4: 'Mediu de lucru prietenos, posibilitate de dezvoltare și activități extracurriculare care au ca scop întărirea relațiilor interumane;',
      beneficii5: 'Evenimente/petreceri de companie.', 
    },
    {
      title: "Corporate Commercial Litigation Lawyer",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nOur client  is a law firm based in Bucharest, Romania, committed to delivering high-quality legal solutions tailored to meet their clients' needs both nationally and internationally.\nThis is a full-time on-site role for a Corporate Commercial Litigation Lawyer.\nThe Lawyer will be responsible for handling a variety of legal tasks and providing legal advice to clients.",
      require: {
        one: "At least 1 year experience in related field",
        two: "Strong knowledge of commercial and business law",
        three: "Experience in handling legal matters related to commercial and corporate law",
        four: 'Excellent research and analytical skills',
        five: 'Strong verbal and written communication skills',
        six: 'Ability to work independently and as part of a team',
        seven: 'Attention to detail and strong organizational skills',
        eight: 'Law degree from an accredited university',
        nine: 'Fluency in English and Romanian',
        ten: 'Experience in a law firm or corporate legal department is a plus',
        more: "Conducting legal research",
        more01: "Drafting legal documents",
        more02: "Representing clients in court",
        more03: 'Negotiating contracts',
      },
      type: "Full time/On site",
    }, 
    {
      title: "Retail Manager",
      location: "Arad, Bacau, Bucuresti, Brasov, Constanta, Craiova, Cluj- Napoca, Iasi, Oradea, Ploiesti, Pitesti, Sibiu, Suceava, Targu Mures, Timisoara",
      description: "\nThe Retail Manager is responsible for overseeing and organizing the daily operations of allocated departments, ensuring maximum performance and adherence to company policies. This role includes direct client interaction, staff supervision, and budget management to maintain economic and financial performance.",
      require: {
        one: "Relevant experience in retail - A minimum of 2 years of experience.",
        two: "Relevant experience working directly with clients.",
        three: "Organizing store operations or allocated departments.",
        four: "Supervising, guiding and motivating staff towards best performance.",
        five: "Preparing and controlling budget for allocated departments.",
        more5: "Leadership.",
        more6: "Proactivity.",
        more7: "Adaptability.",
        more8: "Decision-making capacity.",
        more9: "Dynamism.",
        more001: "Ethical.",
        more: "Department management.",
        more01: "People management.",
        more02: "Economic and financial performance.",
        more03: "Trusted partner of the store’s management team.",
        more04: "Compliance with safety and health rules at work."
      },
      secondTitle4: 'Must have:',
      type: "Full time/On site"
    }, 
    {
      title: "Solutions Architect - Capital Markets",
      location: "Fully remote",
      completed:true,
      type: "Full time, contractors welcome",
      description: "\nOur client is an international network of developers building hybrid smart contracts that combine on-chain code with an extensive collection of secure off-chain services. \nThe Solution Architect - Capital Markets is a strategic role responsible for driving the adoption of our client’s products within the capital markets industry. This role entails collaborating with Sales and Marketing teams to promote our client’s technology, working closely with major institutions to gather requirements and deliver innovative solutions, and contributing significantly to the development of our client’s capital markets product strategy.",
      require: {
        one: "Technical pre/post-sales technology experience, working with major institutions in the capital markets and/or broader financial industry.",
        two: "Strong knowledge of blockchain technology.",
        three: "Hands-on experience with middleware, integration architecture patterns, web services technologies, and APIs.",
        four: "Proven experience in building and delivering Proofs of Concept (PoCs) and responding to functional and technical elements of proposals independently.",
        five: "Excellent English - both verbal and written.",
        six: "Good presentation and communication skills.",
        seven: "Experience in any of the following programming languages: Solidity, Golang, Rust, JS, Java, Python, C/C++.",
        eight: "Familiarity with networking protocols, private IP environments, cloud infrastructure, and the implementation of SSL/TLS security measures.",
        nine: "Knowledge of capital markets concepts, financial instruments, and trading processes as well as understanding of financial regulations and compliance standards (e.g., MiFID II, Dodd-Frank).",
        ten: "Experience with private/permissioned blockchain technologies such as Hyperledger Fabric and R3 Corda as well as with trading platforms, order management systems, payment systems, and related protocols (e.g., FIX, Swift).",
        more: "Drive the successful adoption of our clients’ products in the capital markets industry by establishing strong relationships with key stakeholders, including major financial institutions, and providing technical expertise and guidance throughout the sales and implementation process.",
        more01: "Lead and actively participate in gathering requirements, scoping projects, and designing innovative solutions that leverage our client’s products to address specific use cases and challenges within the capital markets industry.",
        more02: "Contribute significantly to the development of our client’s capital markets product strategy by providing valuable insights, market feedback, and technical expertise, thereby influencing the direction and roadmap of the product.",
        more03: "Collaborate closely with internal technical teams, including developers and engineers, to provide feedback and guidance on product enhancements, bug fixes, and new feature development, ensuring that the capital markets requirements are effectively addressed.",
        more04: "Develop and maintain a comprehensive understanding of the capital markets industry, including market trends, challenges, and emerging technologies, to effectively position and promote our client’s products."
      }
    },    
    {
      title: "Global Senior CRM Manager",
      completed: true,
      location: "Fully remote",
      description: "\nOur client is an international verification platform securing the whole user journey, offering customizable KYC, KYB, transaction monitoring, and fraud prevention solutions. This allows customers to orchestrate their verification process, welcome more customers worldwide, meet compliance requirements, reduce costs, and protect people and businesses.",
      require: {
        one: "Degree in Marketing, Business Administration, or related fields.",
        two: "Proven track record of success as a CRM Manager, preferably with global or multi-market experience.",
        three: "In-depth knowledge of CRM software, data analysis tools, and customer engagement platforms.",
        four: "A strong leader with exceptional analytical, strategic, and interpersonal skills.",
        five: "Excellent command of English, with additional languages considered a plus.",
        more: "Global experience in developing and executing comprehensive CRM strategies to enhance customer engagement, loyalty, and retention.",
        more01: "Collaborating closely with the marketing, sales, and product teams to ensure CRM strategies align with business goals.",
        more02: "Analyzing customer data and feedback to tailor CRM initiatives and personalize customer communication.",
        more03: "Leveraging state-of-the-art CRM technologies and data analytics tools to drive insights and optimize campaigns.",
        more04: "Leading and mentoring a global CRM team.",
        more05: "Managing key stakeholder relationships within the company to advocate for customer-centric strategies."
      },
      type: "Full time/Remote",
    },       
     {
      title: "IT Coordinator",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nThe IT Coordinator will work with the IT ServiceDesk team to manage their daily tasks. The IT Coordinator will also provide technical support and guidance to staff and clients, fix issues, and implement IT policies and procedures.",
      require: {
        one: "Experience in an IT technical client–facing role.",
        two: "Knowledge of PC hardware set-up and configuration (including printers and wireless devices).",
        three: "Knowledge of Microsoft based operating systems and tools (Windows 10, Group Policies and Active Directory) with emphasis on troubleshooting MS Office 365 based services (Outlook, Word, Excel, PowerPoint, Teams, SharePoint, OneDrive).",
        four: 'Passion for Apple iOS, iPadOS and MacOS products and services.',
        five: 'Experience in using ticketing system would be beneficial (e.g. Jira, ServiceNow, BMC, …).',
        six: 'Previous experience in dealing with vendors and IT procurement.',
        seven: 'Ability to write and update VB/PowerShell scripts would be beneficial.',
        eight: 'Ability to document IT processes and procedures would be beneficial.',
        nine: 'Experience working in an ITIL driven environment is welcomed.',
        more: "Written and verbal communication skills.",
        more01: "A team player with the focus on quality, accuracy and positive internal client experience.",
        more02: "English CEFR B2 (Confident English speaker, able to understand technical manuals, able to fluently communicate with European management as well as Europe and Global Level 2 and Level 3 support teams.)",
        more03: 'Able to communicate in non-technical terms with his internal clients. ',
        more04: 'Problem diagnosis and analytical skills. ',
        more05: 'Can adapt to differing demands, prioritizing tasks, where appropriate.',
        more06: 'Able to make decisions and remain calm while under pressure.',
        more07: 'Proactive with a "can-do" attitude in all areas, with a strong sense of self-motivation.',
      },
      secondTitle1: 'Personal Skills and Attributes:',
      type: "Full time/On site",
    },
    
    {
      title: "Sales Engineer – Defense – EMEA",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nResponsible for representing our client’s  technology portfolio in the EMEA region, including our command center technologies for both public-safety and government customers.\nThe Sales Engineer will work in a team with another Account Executive based out of EMEA.\nCandidate may reside in any major European country and have a valid current passport.",
      require: {
        one: "BS or MS degree in Computer Science, related technical discipline, or equivalent combination of education and work experience.",
        two: "Strong technical background with 5+ years technical pre-sales experience in computer software, digital video, surveillance, data link, or computer networking.",
        three: "Experience in the Defense or ISR industries.",
        four: 'Familiarity with NATO STANAG Standards and/or Military Standards (MIL-STD) for video with multiplexed metadata.',
        five: 'Understanding of surveillance workflows, with knowledge of data-link (Radio/Microwave/SATCOM).',
        six: 'Good communication and presentation skills with the ability to articulate the advantages of our client’s products to business and technical decision makers, as well as senior executives.',
        seven: 'Self-motivated, with a proven ability to work on own initiative.',
        eight: 'Good Customer relationship and management.',
        nine: 'Good problem solving skills and the ability to think “outside of the box.”',
        ten: 'Ability to work with a wide variety of individuals onsite and remote, from senior executives to technical decision makers.',
        eleven: 'Fluent with spoken and written English with the ability to clearly communicate and document complex technical issues.',
        twelve: 'Conversant in multiple languages relevant to the region ( EMEA).',
        more: "Propose to partners and customers our client’s technical design solutions.",
        more01: "Demonstrate and explain our client’s products to potential clients.",
        more02: "Assist sales managers with overall account management within assigned accounts.",
        more03: 'Assist sales account managers with project management for complex presales engagements.',
        more04: 'Complete technical sections for RFP/RFI/RFQ responses for assigned accounts.',
        more05: 'Provide pre-sales technical/architectural support to partners and customers.',
        more06: 'Stay tuned with industry trends and technical developments that effect target markets.',
        more07: 'Run market and competitive researchers.',
        more08: 'Establish long-term relationships with resellers & integrators.',
        more09: 'Attend and assist with the setup and operation of technical systems at regional trainings.',
        more10: 'Participate in specialized events, conferences and tradeshows.',
        more11: 'Provide support on-site and remote post-sale support when necessary.',
        more12: 'Develop and maintain relationships with key partners within the region',
        more13: 'Work with the company’s expert overlays  to identify and close operations centers.',
        more14: 'Travel  intensively throughout allocated area without restriction.',
      },
      type: "Full time/On site",
    },
    {
      title: "Business Development Manager",
      location: "Bucharest, Romania",
      description:"\nThe company specializes in partial and full cargo transportation to/from the Balkan countries to/from the Baltic countries, Poland and Scandinavian countries.\nWe are looking for a positive person who is not afraid of challenges and has experience working in the transportation industry to join our team, complement it and become an important part of it.",
      require: {
        one: "Work experience in the field of Transport at least 5 years.",
        two: "Excellent knowledge of the Romanian (Native) and English language. Knowledge of other languages is an advantage",
        three: "Experience in the Defense or ISR industries.",
        four: 'Positive attitude, desire to grow together with the company and improve;',
        five: 'Logical thinking, prudence and quick orientation;',
        six: 'Good communication and negotiation skills;',
        seven: 'Ability to improvise, creativity',
        eight: 'Ability to motivate and unite people for a common goal',
        nine: 'Interest in logistics innovations, market trends',
        ten: 'Activity and initiative',
        more: "Work with clients, Negotiations, Conclusion of contracts",
        more01: "New Client search, cold calling, visiting clients, networking",
        more02: "Cooperation with other team members about transport",
        more03: 'Transportation process control',
        more04: 'Solving problems with clients',
        more05: 'Developing sales department',
        more06: 'Motivation and training of employees',
        more07: 'Development and implementation of branch activity strategy',
      },
      type: "Full time/On site",
    },
    {
      title: "Senior Generic Recruiter",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nGeneric Recruiter for an international Recruitment company",
      require: {
        one: "University Degree",
        two: "5 years’ experience in HR consultancy, generic recruitment being a plus",
        three: "Native Romanian",
        four: 'English advanced',
        five: 'Driver licence',
        six: 'Self-motivated, independent, can-do attitude',
        seven: 'Client centric',
        eight: 'Project management',
        nine: 'Good presentation and communication skills',
        ten: 'Both people and results orientation',
        more: "Managing full life-cycle recruitment process for entry - middle level profiles across multiple industries.",
        more01: "Establishing the recruitment details and strategy for each project in close cooperation with the client.",
        more02: "Advertising job openings using different channels - specialized sites and social media (Facebook, OLX, E-jobs, Bestjobs, Glassdoor, Hipo, Jooble, etc.)",
        more03: 'Screening, sourcing and filtering CVs, candidates, applicants.',
        more04: 'Performing interviews (face-to-face, video, phone) with candidates in order to assess qualifications, skills and previous employment to enable the best job matching.',
        more05: 'Scheduling final interviews with the clients.',
        more06: 'Providing feedback to each candidate according to the client’s decision and assisting in the offering process of the selected candidate.',
        more07: 'Representing DAS WORK in career fairs and recruitment events.',
        more08: 'Providing consultancy to the clients regarding salary ranges, comp. & ben structure and the availability of the requested profiles on the market.',
        more09: 'Establishing and maintaining a professional working relationship with clients.',
        more10: 'On boarding new employees to client by creating offer letters, employment contracts and new starter packs.',
        more11: 'Preparing and drafting employment documents (individual labor contracts / temporary work contracts, job descriptions, addendums, personal data sheets, decisions, work certificates).',
        more12: 'Preparing monthly table sheets, processing timesheets and facilitating salary calculations.',
        more13: 'Managing the employee’s account expenses (travel & other job-related);',
        more14: 'Overseeing employee benefits (such as meal vouchers and/or gift vouchers);',
        more15: 'Keeping in touch with the external services suppliers (meal ticket provider, banks, labor medicine clinics).',
        more16: 'Managing the database of employees by operating at the correct time entries and exits.',
        more17: 'Registering the clients and temporary employees’ requests and operating all the necessary activities.',
        more18: 'Scheduling and attending periodical meetings with the clients and employees in order to fully understand their needs and solve any inquiries, requests, incidents.',
        more19: 'Continuously updating the database in regard to employee’s specific information.',
      },
      type: "Full time/Hybrid",
    },
    {
      title: "Estimator Preturi",
      completed: true,
      location: "Craiova, Romania On site sau Remote Bucuresti",
      description:"\nEstimatorul Preturi (Senior Estimator) este responsabil pentru evaluarea si calcularea costurilor asociate cu proiectele de constructii.\n Acest rol crucial implica analiza detaliata a planurilor de constructie, a specificatiilor tehnice si a altor documente relevante pentru a estima costurile materialelor, manoperei si echipamentelor necesare pentru finalizarea proiectului.",
      require: {
        one: "Studii superioare(cu sau fara master) in domeniul tehnic (TCM, Mecanica, AR, etc).",
        two: "Cunostinte de limba engleza nivel avansat.",
        three: "Cunostinte programe de operare OFFICE (Excel, Word, PP) – nivel avansat.",
        four: 'Sa fie o persoana dinamica, comunicativa si adaptabila cu o atitudine pozitiva.',
        five: 'Cunostinte de desen tehnic reprezinta un avantaj.',
        six: 'Minim 7 ani experienta customer support, inginerie',
        more: "Analizarea planurilor de constructie si a documentelor tehnice pentru a identifica cerintele proiectului;",
        more01: "Va asigurati că toate proiectele sunt furnizate la prețul corect, in colaborare cu parteneri internationali (clienti, architecti);",
        more02: "Lucrați îndeaproape cu managerii de cont și calculați oferte pentru diferite proiecte din întreaga lume, folosind specificațiile, desenele tehnice/modelele 3D ale arhitectului și informații suplimentare furnizate de partenerul nostru;",
        more03: 'Odată ce proiectul este confirmat, asigurați procesarea comenzii și un bun transfer de informatii;',
        more04: 'Identificati oportunitățile de îmbunătățire continua in procesele si proiectele in care sunteti implicat;',
        more05: 'Ridicați întrebări tehnico-comerciale adecvate, participați la întâlniri de clarificare a ofertelor;',
        more06: 'Calculați și optimizați orele de manopera in functie de proiect si volume in colaborare cu departamentele operationale echipele de operațiuni / inginerie cu privire la aspectele de execuție. Pregătiți documentele tehnice și planurile și obțineți aprobări formale pentru depunerea ofertelor;',
        more07: 'Colaborati cu funcțiile Financiar, Vanzari și PMO pentru cerințele și aprobările proiectelor;',
        more08: 'Estimați costurile detaliate și colaborați cu managementul intern pe aspecte cheie, inclusiv strategia de prețuri;',
        more09: 'Înțelegeți temeinic și respectați codul de conduită organizațional și practicile de afaceri',
        more10: 'Linia de raportare este directa catre Managerul de department din Olanda si indirecta raportare in Romania.',
      },
      type: "Full time/On site",
    },
    {
      title: "Area Sales Manager",
      location: "Bucharest, Romania",
      description:"\nThe Area Sales Manager is responsible for overseeing sales operations in a specific geographic area. This role involves developing sales strategies, managing a team of sales representatives, and ensuring the company meets its sales targets.\n The Area Sales Manager will work closely with the sales team, marketing department, and senior management to drive sales growth and expand the company’s customer base.",
      require: {
        one: "Bachelor’s degree in Business, Marketing, or a related field.",
        three: "At lest 3 years of experience in sales management, preferably in a similar industry.",
        four: 'Proven track record of achieving sales targets and managing a high-performing sales team.',
        five: 'Strong leadership and communication skills.',
        six: 'Ability to analyze data, develop insights, and make data-driven decisions.',
        seven: 'Knowledge of CRM software and sales analytics tools.',
        eight: 'Ability to travel within the assigned area.',
        nine: 'Excellent negotiation and presentation skills.',
        more: "Develop and implement sales strategies to achieve targets in the assigned area.",
        more01: "Analyze sales trends, identify opportunities for growth, and propose action plans to  meet objectives",
        more02: "Monitor competitor activities and market trends to stay ahead of the competition.",
        more03: 'Lead, motivate, and manage a team of sales representatives.',
        more04: 'Set performance goals for the team and ensure they are met through regular coaching,  mentoring, and performance reviews',
        more05: 'Recruit, train, and onboard new sales representatives.',
        more06: 'Build and maintain strong relationships with key customers and stakeholders. ',
        more07: 'Address customer concerns, provide solutions, and ensure high levels of customer  satisfaction.',
        more08: 'Visit clients regularly and gather feedback to improve product offerings and service  levels',
        more09: 'Track and report on sales metrics, including revenue, market share, and customer  acquisition rates.',
        more10: 'Provide weekly/monthly sales forecasts and reports to upper management. ',
        more11: 'Ensure timely collection of outstanding payments from customers. ',
        more12: 'Identify and expand business opportunities in the assigned area. ',
        more13: 'Optimize coverage of the region by analyzing customer needs and adjusting territories as  necessary.',
        more14: 'Organize and manage promotional events, product launches, and other sales campaigns.',
        more15: 'Work closely with marketing, product development, and logistics teams to ensure  smooth operations and the successful launch of new products.',
        more16: 'Share feedback with internal teams to drive improvements in products and services.',
      },
      type: "Full time/On site",
    },
    {
      title: "National Sales Manager",
      location: "Bucharest, Romania",
      description:"\nThe National Sales Manager is responsible for overseeing and driving the sales performance across all regions within the country. This role involves developing strategic sales plans, managing the national sales team, and ensuring the company meets or exceeds its sales goals.\n The individual will work closely with marketing, product development, and regional managers to ensure a unified and effective sales strategy.",      require: {
        one: "Bachelor's degree in Business Administration, Marketing, or related field (MBA preferred).",
        two: "Minimum 7 years of experience in sales, with at least 2-3 years in a leadership or management role.",
        three: "Proven track record of meeting or exceeding sales targets in a national or large regional capacity.",
        four: 'Experience in HVAC is a plus.',
        five: 'Strong leadership and team management skills.',
        six: 'Excellent communication, negotiation, and presentation skills.',
        seven: 'Analytical mindset with proficiency in CRM systems and sales analytics tools.',
        eight: 'Ability to travel nationally as required.',
        nine: 'Results orientation',
        ten: 'Costumers focus',
        eleven: 'Adaptability and openness to change in dynamic market conditions.',
        twelve: 'Strategic thinking and problem-solving.',
        thirteen: 'High level of initiative and drive to succeed.',
        fourteen: 'Ability to work under pressure and meet tight deadlines.',
        more: "Develop and implement comprehensive national sales strategies to achieve company sales targets and profitability.",
        more01: "Identify new business opportunities, target markets, and sales growth areas.",
        more02: "Monitor market trends, competitor activities, and customer feedback to fine-tune sales strategies.",
        more03: 'Lead, manage, and mentor the national sales team, including regional sales managers and representatives.',
        more04: 'Set sales performance goals and KPIs for the sales team.',
        more05: 'Conduct regular performance reviews, provide feedback, and ensure the team is adequately trained and motivated.',
        more06: 'Build and maintain strong relationships with key customers and partners.',
        more07: 'Oversee national key account management and ensure high levels of customer satisfaction.',
        more08: 'Attend major sales meetings with clients and negotiate contracts when necessary.',
        more09: 'Prepare and manage the national sales budget, forecasting sales figures, and ensuring cost-effective practices.',
        more10: 'Monitor sales performance against targets and analyze financial reports to drive profitability.',
        more11: 'Work closely with finance teams to ensure accurate sales reporting and financial health.',
        more12: 'Collaborate with marketing to ensure sales campaigns and promotional activities align with sales strategies.',
        more13: 'Provide feedback to product development teams based on customer needs and market trends.',
        more14: 'Participate in the development and launch of new products and services.',
        more15: 'Prepare regular sales reports, including detailed performance analysis of sales regions and product lines.',
        more16: 'Present sales updates, forecasts, and progress reports to the senior leadership team.',
        more17: 'Use data-driven insights to recommend adjustments to sales strategies.',
        more18: 'Ensure that the sales processes align with the company’s policies, legal requirements, and industry standards.',
        more19: 'Implement and enforce ethical sales practices and promote a customer-centric culture within the sales team.',
      },
      type: "Full time/On site or Remote",
      beneficii1: 'Competitive salary with performance-based incentives.',
      beneficii2: 'Benefits package including health, dental, and retirement plans.',
      beneficii3: 'Opportunities for professional growth and development.',    },
    {
      title: "Cloud Platform Operations Team Lead",
      completed: true,
      location: "Brasov, Romania",
      description:"\nOur IT Infrastructure department is continuing to grow. As a result, we are looking for a Cloud Platform Operations Team Lead with strategic responsibility.\n The role of the Cloud Platform Operations Team Lead is part of Brasov Management Team. From this role, you will lead the unit by enabling the employees to work efficient and develop in their career, derives the unit goals from department goals and will be responsible for the unit budget.\n Managing the complete Cloud Platform Operations unit, you will work closely with the Director Software Technology BV Plant in order to achieve the business goals.",
      require: {
        one: "Bachelor or Master (preferable) degree in Computer Science, Electronic/Electrical Engineering or a related field",
        two: "A former Cloud Platform Operations engineer with strong, successful and proved technical and people lead experience",
        three: "Strong leadership, professional attitude – leading by example",
        four: 'Proactive and highly organized, with strong time management and planning skills',
        five: 'Ability to articulate and gain engagement for own ideas to both technical and non-technical audiences',
        six: 'Ability to motivate in a team-oriented, collaborative environment',
        seven: 'Strategic planning for achieving business results',
        eight: 'Strong agile mindset aligned with business values',
        nine: 'Experience of advising key stakeholders at senior and board level',
        ten: 'Excellent written and oral communication skills',
        eleven: 'Excellent spoken and written English, knowledge of the German language is an advantage',
        twelve: 'Technical experience in Hyperscaler Platform, IdP & Infrastructure offerings',
        thirteen: 'Knowledge of automation processes and tools (e.g. DevSecOps) in the Cloud Platform environment',
        fourteen: 'Management experience in the Cloud Platform Operations field more than 2 years',
        more: "Define together with the Director Software Technology BV the strategy and goals of the unit; plan and monitor the successful implementation of this strategy",
        more01: "Establish clear organizational structures and succession plans aligned with appropriate responsibilities, accountabilities and personal development for all staff of the Unit, in line with any anticipated growth",
        more02: "Prioritize, budget and allocate projects and resources in line with business priorities for the development unit",
        more03: 'Ensure that technology standards and best practices are maintained across the organization',
        more04: 'Implement consistent standards and approaches throughout the Cloud Platform Operation teams',
        more05: 'Responsible for his/her own work planning in line with the objectives set together with the Director',
        more06: 'Ensure effective internal communications both within the Cloud Platform Operations team and across the organization',
        more07: 'Ensure that the skills and experience of the Cloud Platform Operations team are consistent with its scientific, technological and business needs in order to provide quality for the present and future services',
        more08: 'Responsible for the quality and technical approach taken by team members, ensuring it is in-line with the company strategy – and that projects are delivered on time and on budget',
        more09: 'Facilitate the decision making throughout the team regarding technology and methodology, including standardization of system architecture, reusable code base development, versions of software tools, best practice, source control and deployment processes',
        more10: 'Responsible for technical recruitment, appraisals, one to one meetings, identifying training needs and motivating the team',
        more11: 'Driver of innovation and improvement projects',
        more12: 'Ensure participation of the unit in academic and external events',
      },
      musthave1: 'Strong technical experience in Microsoft Azure Service offerings',
      musthave2: 'Strong technical experience in other Hyperscaler (e.g. AWS, Google) Service offerings',
      musthave3: 'Widespread knowledge of Infrastructure as Code methodologies',
      musthave4: 'Technical experience in OnPrem infrastructure services like Active Directory and Virtualization',
      profile1: 'Highly self-motivated and driven',
      profile2: 'Reliable, flexible and cooperative',
      profile3: 'Positive attitude towards working in team in an international environment, with a self-starter attitude and eagerness to tackle unknowns',
      profile4: 'Interest in keeping up with current and upcoming developments and technologies in the field of software engineering',
      profile5: 'Willingness for business travels to the German HQ and relating plants and subsidiaries',
      beneficii1: 'Great career opportunity in an innovative and dynamic working environment',
      beneficii2: 'Competitive salary package & benefits, according to performance and professional experience',
      beneficii3: 'Modern facilities located in Braşov',
      beneficii4: 'Achievement Bonuses & Rewards',
      beneficii5: 'Flexible working program (Flexible hours, Work from home)',
      beneficii6: 'Canteen discount, outdoor terrace and coffee corner on site',
      beneficii7: 'Medical services on site and private health and life insurance',
      type: "Full time/Hybrid",
    },
    {
      title: "Performance Marketing Manager",
      completed: true,
      location: "Global",
      description:"\nOur client is specialized in app purchases, online transactions and payments. \nOur client's global team consists of more than 50 product-driven people. \nThe Performance Marketing Manager will play a crucial role in our client's digital marketing efforts, creating a strategy for paid ads across different regions.",
      require: {
        one: "At least 3 years of experience in digital marketing, ideally within a B2B software company.",
        two: "Hands-on experience with Google ads, Facebook ads, LinkedIn ads, YouTube, etc.",
        three: "Very good English, preferably NATIVE English. (English writing must be as good as speaking English)",
        four: 'Data and insight orientation is a key strength. ',
        five: 'Combining this analytical approach with client experience.',
        six: 'Results driven',
        seven: 'Independence',
        eight: 'Leadership',
        more: "Manage all demand generation channels including LinkedIn, Facebook, Google, and others.",
        more01: "Conduct ad hoc research and analysis, market researches in order to create the right strategy and support business objectives.",
        more02: "Create a strategy and implement it.",
        more03: 'Measure and track the performance of digital marketing efforts.',
        more04: 'Identify new channels, tactics, run experiments, introduce new products and services in accordance with needs and requests.',
        more05: 'Collaborate with marketing colleagues and cross-functional teams to improve conversion rates.',
        more06: 'Prepare analysis and reports for management, recommend areas for improvement, as well as solutions for challenges and issues.',
        more07: 'Manage freelancers and agencies.',
        more08: 'in time, develop own team.',
      },
      type: "Full time/Remote",
    },
    {
      title: "B2B Sales Representative West Romania",
      completed: true,
      location: "Romania",
      description:"\nFor our Client, a Polish company operating in the construction materials ( fastening systems and various technological solutions for constructions) we are lookinf for a B2B Sales Representative in the West part of Romania.",
      require: {
        one: "University degree - Bachelor’s degree in business or related fields",
        two: "English and Romanian -  conversational level",
        three: "Any other languages is a plus",
        four: 'Driver licence',
        five: 'Strong interpersonal and communication skills as well as presentation and negotiation',
        more: "Manage all demand generation channels including LinkedIn, Facebook, Google, and others.",
        more01: "Communicating the benefits of a company’s products in order to drive sales. ",
        more02: "Main point of contact between a business and its prospects or clients.",
        more03: 'Identifying and educating prospective customers while supporting existing clients with information and assistance that relates to products and services.',
        more04: 'Selling products and services using solid arguments to prospective customers',
        more05: 'Performing cost-­benefit analyses of existing and potential customers',
        more06: 'Maintaining positive business relationships to ensure future sales',
      },
      type: "Full time/Hybrid",
    },
    {
      title: "Community Manager - Clinica Dentară",
      completed: true,
      location: "Bucuresti, Romania",
      tipContract: 'Colaborare PFA/SRL',
      description:"\nClinica stomatologică din București, cu o echipă de medici specialiști, caută un Community Manager pentru a gestiona și dezvolta rețelele sociale și campaniile de marketing digital.",
      require: {
        one: "Experiență anterioară în marketing digital și gestionarea rețelelor sociale, preferabil în domeniul sănătății sau al serviciilor.",
        two: "Cunoștințe avansate de utilizare a platformelor de social media (Facebook, Instagram, TikTok, YouTube) și a instrumentelor de analiză a performanței.",
        three: "Abilități excelente de comunicare scrisă și verbală.",
        four: 'Creativitate și capacitatea de a genera idei inovatoare pentru campanii de marketing.',
        five: 'Capacitatea de a lucra atât independent, cât și în echipă, într-un mediu dinamic.',
        more: "Dezvoltarea și Implementarea Strategiilor de Marketing: Crearea și gestionarea strategiilor de marketing digital pentru a promova serviciile clinicii dentare, cu scopul de a atrage noi pacienți și de a crește gradul de conștientizare a brandului.",
        more01: "Gestionarea Rețelelor Sociale: Administrarea conturilor de social media ale clinicii (Facebook, Instagram, TikTok, YouTube), inclusiv crearea de conținut atractiv, programarea postărilor și interacțiunea cu comunitatea online.",
        more02: "Analiza Performanței: Monitorizarea și analizarea rezultatelor campaniilor de marketing și a activităților de pe rețelele sociale, utilizând metrici relevante pentru a evalua impactul și a propune îmbunătățiri.",
        more03: 'Crearea de Conținut: Generarea de conținut original și captivant, inclusiv articole, postări, imagini și videoclipuri, care să reflecte valorile clinicii și să informeze pacienții despre serviciile oferite.',
        more04: 'Colaborarea cu Echipa: Lucrul îndeaproape cu echipa de marketing și cu personalul clinicii pentru a asigura coerența mesajelor și a campaniilor, respectând cerințele fișei de post.',
        more05: 'Gestionarea Relațiilor cu Pacienții: Răspunsul la întrebările și comentariile pacienților pe platformele de social media, menținând un ton profesionist și prietenos.',
      },
      beneficii1: 'Oportunitatea de a lucra într-un mediu profesionist și stimulativ.',
      beneficii2: 'Flexibilitate în programul de lucru, cu opțiunea de a lucra hibrid.',
      beneficii3: 'Posibilitatea de a contribui la creșterea și dezvoltarea unei clinici dentare de top.',
      type: "Full time/Hybrid",
    },
    {
      title: "Marketing Content Writer",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nOur firm is the leading solutions provider of end-to-end wireless connectivity. We help network operators, service providers, and private networks worldwide increase operational efficiency and enhance end customers’ quality of experience with innovative wireless transport solutions.\n Company's employee community spans multiple countries, is highly diverse regionally and culturally, yet connected and cohesive.\nWe are looking for a dedicated, passionate, and experienced Content Writer to join our marketing team! If English is your mother tongue, you love writing, are excited by the opportunity of working on a variety of content types ranging from blogs, to case studies, to white papers, are detail-oriented, and have a strategic mind - this could be the perfect career opportunity for you!",
      require: {
        one: "English as native language",
        two: "High-level writing, editing, and proofreading skills",
        three: "Experience in writing content marketing - preference for B2B experience",
        nice: 'Ability to work independently',
        nice1: 'Openness to feedback, edits, and revisions.',
        nice2: 'Ability to comfortably switch between various assignments',
        nice3: 'Capacity to create copy within tight deadlines while maintaining high-quality standards',
        nice4: 'A very organized, detail-oriented approach',
        nice5: 'Familiarity with multiple AI tools for use in assisting in the research and writing process',
        more: "Deliver high-quality writing for various types of content including, case studies, blogs, landing pages, press releases, white papers, and video scripts, as well as social media posts and support material",
        more01: "Turn complex technical concepts into compelling and engaging stories",
        more02: "Optimizing content for search engines and lead generation.",
        more03: 'Tailor content for specific audiences at various stages in the customer journey and sales funnel',
        more04: 'Create persuasive and engaging copy for online social posts, advertising ads, banners, and campaigns relevant to our target audiences',
        more05: 'Implement brand voice and tone in all channels to maintain a coherent and consistent brand identity',
        more06: 'Continuously optimize and develop ways to improve content performance',
        more07: 'Work closely with the Ceragon creative studio to ensure that content translates into innovative, persuasive, and visually effective final assets',
        more08: 'Collaborate with many stakeholders across the Marketing team and greater organization - including salespeople, product and marketing managers',
      },
      type: "Full time/On site",
    },
    {
      title: "Senior Auditor",
      completed: true,
      location: "Bucharest, Romania",
      description:"\nFor our client, one of the top ten  financial consultancy firms, we are looking for a Senior Auditor in Bucharest. \nThe main responsibilities of the job include leading audit engagements, oversee audit teams, and ensure compliance with professional standards.\nThere will be also full responsibilities for planning audits, reviewing the work of junior auditors, and delivering reliable results to management.\n Please be aware that some traveling may be involved.",
      require: {
        one: "Bachelor’s degree in accounting or related field",
        two: "Professional certification (ASPAAS, CAFR, ACCA, etc.) preferred",
        three: "Proven experience in auditing roles",
        four: 'Strong analytical and problem-solving skills',
        five: 'Detailed - oriented',
        six: 'Ability to communicate effectively with clients',
        seven: 'Focus on continuous improvement',
        more: "Participate in lcient meetings and presentation",
        more01: "Assist in the preparation of audit planning documentation.",
        more02: "Communicate the audit plan, responsibilities, and objectives to audit assistants.",
        more03: 'Lead the audit team by assigning tasks, providing instructions, coaching, evaluating, motivating, etc.',
        more04: 'Conduct engagement administration reviews to ensure audits are conducted properly and audit reports are presented on time.',
        more05: 'Collaborate with managers to deliver reliable outputs that are ready for manager or partner review.',
        more06: 'Ensure the audit team adheres to professional quality standards under your supervision.',
        more07: 'Oversee the timely completion of assigned engagements, maintaining continuous communication with the client, manager, and audit team.',
        more08: 'Identify client or potential client needs to support the delivery of additional services by our firm.',
        more09: 'Build strong working relationships with clients to meet engagement goals and assess their needs.',
      },
      beneficii1: 'There is an interesting financial pakage, as well as benefits plan associated with this job.',
      type: "Full time/On site",
    },
    {
      title: "Agent Vânzări HORECA",
      completed: true,
      location: "Depinde de aria de acoperire, posibil implicare în mai multe zone geografice",
      description:"\nAgentul de vânzări HORECA este responsabil pentru promovarea și vânzarea produselor companiei către clienții din sectorul HORECA (Hoteluri, Restaurante, Catering). \nAcesta dezvoltă relații de lungă durată cu clienții, asigură suport în vânzări și contribuie la creșterea cifrei de afaceri în segmentul HORECA.\nAcest post este esențial pentru dezvoltarea afacerii în sectorul HORECA, necesitând o persoană dinamică, organizată și motivată să aducă valoare adăugată companiei și clienților săi.",
      require: {
        one: "Experiență anterioară în vânzări, preferabil în sectorul HORECA.",
        two: "Capacitate excelentă de comunicare și negociere.",
        three: "Abilități dovedite în atingerea și depășirea obiectivelor de vânzări.",
        four: 'Cunoștințe solide despre piața HORECA și tendințele curente.',
        five: 'Disponibilitate pentru deplasări frecvente.',
        six: 'Categoria B, obligatoriu.',
        seven: 'Studii medii finalizate.',
        more: "Identificarea și atragerea de noi clienți în segmentul HORECA.",
        more01: "Menținerea și consolidarea relațiilor cu clienții existenți.",
        more02: "Negocierea prețurilor, termenelor de plată și condițiilor de livrare.",
        more03: 'Încheierea și gestionarea contractelor comerciale.',
        more04: 'Prezentarea gamelor de produse și consilierea clienților în alegerea soluțiilor optime.',
        more05: 'Realizarea de prezentări și degustări pentru clienții din sectorul HORECA.',
        more06: 'Colectarea și analiza informațiilor de piață, a nevoilor și a tendințelor din industria HORECA.',
        more07: 'Monitorizarea concurenței și propunerea de strategii pentru creșterea competitivității.',
        more08: 'Gestionarea comenzilor clienților și asigurarea respectării termenelor de livrare.',
        more09: 'Urmărirea feedback-ului post-vânzare și soluționarea eventualelor probleme.',
        more10: 'Realizarea targeturilor lunare și anuale stabilite de companie.',
        more11: 'Elaborarea rapoartelor periodice de activitate și vânzări.',
      },
      musthave1: 'Persoană orientată spre client și soluții.',
      musthave2: 'Capacitate de a construi și menține relații pe termen lung.',
      musthave3: 'Spirit de inițiativă și proactivitate.',
      musthave4: 'Flexibilitate și adaptabilitate la schimbările din piață.',
      beneficii1: 'Pachet salarial competitiv, cu bonusuri de performanță.',
      beneficii2: 'Mașină de serviciu, telefon mobil, laptop.',
      beneficii3: 'Oportunități de dezvoltare profesională în cadrul companiei.',
      type: "Full time/On site",
    },
    {
      title: "Payroll Specialist",
      location: "Bucharest, Romania",
      description:"\nWe are looking for a payroll specialist to join our team on site, in Bucharest. If you are working well in a team, but also thriving individually, we have just the job for you!",
      require: {
        one: "Bachelor’s degree in Human Resources",
        two: "Proven experience of at least 2-3 years as a payroll specialist in a private corporate  environment",
        three: "Thorough knowledge of payroll procedures, international ones as well;",
        four: 'Experience with payroll calculations and verification for international and European  countries',
        five: 'Good knowledge of Labor Romanian legislation',
        six: 'Proficient in Microsoft Office;',
        seven: 'Strong English language knowledge, professional working proficiency.',
        eight: 'Knowledge of the Italian language is a plus;',
        nine: 'Good communication skills and team spirit;',
        ten: 'Positive approach and strong work ethic;',
        eleven: "Highly detail-oriented and organized person;",
        twelve: "Ability to meet a constant stream of deadlines.",
        thirteen: "Willingness to work on site is a requirement.",
        more: "Calculates employee salaries",
        more01: "Manages databases and staff files ",
        more02: "Oversees job descriptions, certificates, evaluation sheets, internal regulations, disciplinary  investigations and payslips ",
        more03: 'Processing payroll calculations and verification for international and European countries  accurately and on time',
        more04: 'Ensuring compliance with tax laws',
        more05: 'Collects the data, prepares and verifies the monthly payroll for salaries',
        more06: 'Prepares the files, reports and payment documents when needed for management or  different institutions',
        more07: 'Carries out internal communication',
        more08: 'Permanently monitors legislative changes in the field of labor relations and taxes. ',
      },
      beneficii1: 'Attractive financial package;',
      beneficii2: 'Meal tickets;',
      beneficii3: 'Professional environment in our office situated in a central area.',
      type: "Full time/On site",
    },
    {
      title: "Key Account Manager",
      location: "Bucharest, Romania",
      require: {
        one: "Experiență relevantă (min. 5 ani) într-o poziție similară în sectorul bunurilor de larg consum (în special carne sau preparate din carne) in Modern Trade (Kaufland, Lidl, Carrefour, Selgros, Metro, Profi, Penny, Auchan etc.)",
        two: "Studii superioare (economie, finanțe, comerț, marketing, industria alimentară / inginerie, matematică)",
        three: "Cunoștințe de limbi străine",
        four: 'Engleză - nivel avansat;',
        five: 'Germană - nivel avansat (avantaj). ',
        six: 'Cunoștințe avansate de Microsoft Word, Excel, Outlook, sistem ERP.',
        seven: 'Abilități de adaptare la specificul organizației,  comunicare, sociale și de negociere;',
        eight: 'Spirit de inițiativă, perseverent, analitic, cu accent pe rezultate.',
        more: "Organizează, coordonează și verifică funcționarea sistemelor de vânzare, respectiv de promovare a produselor comercializate către clienții atribuiți.",
        more01: "Elaborează planul de vânzări și profit și monitorizează realizarea acestuia pentru clienții atribuiți postului, apoi împreună cu Customer Relationship Manager și Marketing Manager elaborează planul de vânzări și profit, consolidat pe companie.",
        more02: "Menține relațiile cu clienții din portofoliu (Modern Trade), recrutează noi clienți, evaluează anual portofoliul de clienți din punct de vedere al profitabilității și adecvării la modelul de business al companiei. ",
        more03: 'Identifică direcțiile de dezvoltare și propune promovarea de noi produse/soluții noi.',
        more04: 'Negocierea și încheierea contractelor comerciale asigurând buna derulare a acestora și asigurarea vânzării optime a stocurilor din punct de vedere al profitului și al satisfacției clienților.',
        more05: 'Colaborează cu ceilalți manageri din cadrul companiei în vederea atingerii obiectivelor.',
        more06: 'Conduce și organizează activitatea personalului din subordine.',
      },
      type: "Full time/Hybrid",
    },
    {
      title: "Medic",
      completed: true,
      location: "Bucharest, Romania",
      tipContract: 'Full Time angajat, Part Time sau colaborator',
      description:"\nIn cateva cuvinte, suntem clinica de top din Romania, cu specializare in implantul parului la barbati si femei, implant de sprancene si implant de barba.\nIn urma tragediei de la Club Colectiv, Clinica s-a specializat si in implantul de par pe grefe de piele, fiind singura Clinica din lume care efectueaza astfel de interventii.",
      require: {
        one: "⁠Chirurgie plastica / dermatologie / specializari chirurgicale",
        two: "Persoana responsabila, prompta in indeplinirea sarcinilor",
        three: "Persoana orientata spre nevoile pacientului",
        four: 'Persoana rabdatoare, organizata si capabila de munca in echipa',
        five: 'Abilitati bune de comunicare, discretie si seriozitate',
        more: "Consultaţii de chirurgie plastică generală, dermatologie",
        more01: "Interventii de chirurgie plastica, reconstructie capilara",
      },
      beneficii1: 'Salariu oferit intre 3000 si 5000 eur/luna',
      type: "Full time/On site",
    },
    {
      title: "Public Procurement Lawyer",
      completed: true,
      location: "Bucharest, Romania",
      require: {
        one: "2-3 years experience as lawyer",
        two: 'Law school degree',
        three: "Proven experience in concessions",
        four: 'Results oriented with pragmatic approach to problem solving',
        five: 'Excellent communication and presentation skills',
        six: "Proven experience in Public Procurement transactions, preferably in well known law firms",
        seven: '2-3 years experience in dealing with Public Procurement matters',
        eight: 'Capability to work, prioritize and make decisions',
        nine: 'Excellent English and professional legal writing skills',
      },
      beneficii1: 'Growing opportunities in a leading law firm',
      beneficii2: 'Competitive reward system',
      type: "Full time/On site",
    },
    {
      title: "Talent Acquisition Sourcing Partner",
      location: "Globally Remote",
      completed: true,
      description: '\nOn behalf of our client, a well known College in USA, we are seeking for a  Talent Acquisition Sourcing Partner. \nThe Talent Acquisition Sourcing Partner plays a critical role in the day-to-day candidate sourcing activities within the Talent Acquisition team. \nThis role is responsible for identifying, attracting and nurturing candidates to fill current or future vacancies.  A key element of this role is the ability to attract highly-skilled and best-fit candidates by sourcing through multiple recruiting channels. \nThis position requires a self-starter who is comfortable talking to and engaging with people. The ability to think critically and work independently is essential for success in this role.',
      require: {
        one: "High School Diploma or GED (required)",
        two: 'Experience using various applicant tracking systems, sourcing software, and human resources information systems (preferred)',
        three: "Minimum of three (3) years experience as a talent sourcing, recruiter or similar role",
        four: 'Corporate, sales, skilled trade, healthcare, and/or higher education recruiting experience',
        five: 'Project management experience',
        six: "Possess excellent listening, interpersonal, sales, and influencing skills, with the ability to present ideas clearly and compellingly, both verbally and in writing",
        seven: "Actively assist with candidate's needs and foster long-term relationships with stakeholders.",
        eight: 'Ability to use good judgment, problem-solving, and decision-making skills.',
        nine: 'Understand the implications of new information for both current and future problem-solving and decision-making.',
        ten: 'Ability to use good judgment, problem-solving, and decision-making skills.',
        eleven: 'High degree of integrity and confidentiality.',
        twelve: 'Ability to maintain confidentiality and manage sensitive information with discretion.',
        thirteen: 'Drive, and be accountable for, results in a fast-paced environment.',
        fourteen: 'Strong attention to detail with the ability to work in a fast-paced environment.',
        fifteen: 'Basic to intermediate level proficiency with productivity software (MS Office), ATS (iCIMS), social media platforms (Indeed, Instagram, Threads, Twitter, LinkedIn, etc.), and other enterprise-level software (Adobe DC, SharePoint, etc.).',
        sixteen: 'Project coordination, data reporting, and analytics expertise',
        seventeen: 'Ability to work independently; adjust to changes, solve problems, manage work schedule, and stay on track without direct, continuous supervision.',
        eighteen: 'Demonstrate and utilize active listening, inductive reasoning, information ordering, and category flexibility.',
        nineteen: 'Ability to work in a fast-paced environment where deadlines are essential and multiple projects are worked simultaneously.',
        more: 'Attract and identify candidates for current and future vacancies; ',
        more01: 'Establish a qualified candidate pool for current or future vacancies;',
        more02: 'Leverage multiple communication channels (email, phone, text, various groups, social media, etc.) to engage passive applicants;',
        more03: 'Create and maintain job postings sourcing campaigns, employee referral campaigns, and internal/external candidate communication templates that are compelling and engaging that clearly define the role and company values for various recruitment and sourcing channels;',
        more04: 'Create meaningful online events, hiring days ad recruiting campaigns for increasing visibility;',
        more1: 'Develop and maintain strong working relationships with leaders, vendors, community organizations and other team members to create partnerships that yield successful recruiting outcomes, predictable results and credibility;',
        more2: 'Select internal ambassadors and influencers;',
        more3: 'Collaborate with stakeholders and participate in employer branding initiatives, recruiting events, and community/industry networking events;',
        more4: 'Research industry and market trends, sourcing software, job boards, social media, industry events, and other networking opportunities to maximize lead generation;',
        more41: 'Use of technology to maximize lead generation;',
        more42: 'Provide recommendations or solutions based on data analysis;',
        more43: 'Maintain the candidate database and ensure accurate documentation for sourcing activities;',
        more5: 'Define and report on metrics (applicant flow, conversion rates, retention rates, time to fill, etc.);',
        more6: 'Assist with recruiting processes including background checks and onboarding.',
      },
      disclaimer: 'Our client is an Equal Opportunity Employer and do not discriminate against applicants or employees due to race, color, religion, sex (including pregnancy, gender identity and sexual orientation), national origin, age, disability, genetic information or any other federal, state or local protected class.',
      beneficii1: 'Growing opportunities in a leading law firm',
      beneficii2: 'Competitive reward system',
      secondTitle1: "Candidate Sourcing and Engagement",
      secondTitle2: "Relationship Building",
      secondTitle3: "Market Research, Trend Analysis and Database and Documentation Management",
      secondTitle4: "Metrics, Reporting and Process Support",
      type: "Full time/Remote",
    },
    {
      title: "Manager Locatie Catering",
      completed: true,
      location: "Bucharest (Pipera), Romania",
      description: '\nProgramul de lucru va fi 12/24, astfel incat sa aiba 2 weekend uri libere , adica Vineri, Sambata, Duminica. \nOra incepere program 4:30-5:00-17:00.',
      require: {
        one: "Experienta de lucru in HoReCa;",
        two: 'Cunostinte PC : Excel, Word;',
        three: "Lucru in echipa;",
        four: 'Abilitatea de a coordona echipa;',
        five: 'Abilitatea de a comunica cu spitalele;',
      },
      type: "Full time/On site",
    },
    {
      title: "Operator Calculator",
      completed:true,
      location: "Bucharest (Pipera), Romania",
      description: '\nProgramul de lucru va fi 12/24, astfel incat 2 zile lucreaza, 2 zile libere. \nOra incepere program 4:30-5:00-17:00.',
      require: {
        two: 'Cunostinte PC : Word, Excel;',
        three: "Lucru in echipa;",
      },
      type: "Full time/On site",
    },
    {
      title: "SAP Accountant",
      location: "Bucharest, Romania",
      require: {
        one: "Good knowledge in Accounting;",
        two: "Good Knowledge in accounting software - SAP",
        three: "Must be proficient with MS Office, advance skills in MS Excel are a plus",
        four: 'Exceptional attention to details and can do attitude, proactive in communication.',
        five: 'Working well under pressure with minimum supervision.',
        six: 'Willingness to learn, explore and suggest on how to improve the process',
        seven: 'Experience working in SAP',
        eight: 'Education: BS Accountancy graduate /  Economics',
        nine: 'Experience: 3 to 5 years accounting experience, preferably in construction',
        ten: 'Fluent English speaker, Italian language is a plus',
        more: "Oversee and manage the general accounting functions, including, but not limited to: accounts payable, accounts receivable, general ledger, and taxes.",
        more01: "Managing book keeping; office inventory, petty cash and ensure proper closing on a daily basis.",
        more02: "Assist with month end closing and financial reports preparation.",
        more03: 'Prepare, review, and analyze financial statements to ensure accuracy and completeness.',
        more04: 'Prepare VAT return and ensure that VAT is filed timely;',
        more05: 'Ensure compliance with the Romanian law.',
        more06: 'Issue invoices to customers.',
        more07: 'Reconcile bank transactions.',
        more08: 'Other tasks as assigned.',
      },
      type: "Full time/On site",
    },
    {
      title: "Executive Director",
      location: "Bucharest, Romania",
      description: '\nOur company is dedicated to fostering an inclusive business environment that supports diversity in all its forms. Our mission is to empower diverse businesses, promote equitable economic growth, and advocate for policies that benefit our members.',
      require: {
        one: "Bachelor's degree in Business Administration, Public Administration, or a related field. Advanced degree preferred.",
        two: 'Minimum of 5 years of experience in a leadership role, preferably within a nonprofit, chamber of commerce, or similar organization.',
        three: "Proven experience in strategic planning, organizational management, and advocacy.",
        four: 'Strong understanding of diversity, equity, and inclusion principles and practices.',
        five: 'Excellent leadership and interpersonal skills with the ability to inspire and motivate others.',
        six: "Effective communication skills, both written and verbal, with the ability to engage diverse audiences.",
        seven: "Strong financial acumen and experience in budgeting and financial management.",
        eight: 'Demonstrated ability to build and maintain strategic partnerships.',
        nine: 'Proficiency in Microsoft Office Suite and familiarity with CRM systems.',
        ten: 'Passionate about diversity, equity, and inclusion.',
        eleven: 'Innovative and strategic thinker.',
        twelve: 'Collaborative and team-oriented.',
        thirteen: 'Highly organized and detail-oriented.',
        fourteen: 'Resilient and adaptable to change.',
        more: "Develop and implement the Chamber's strategic plan in alignment with its mission and goals",
        more01: 'Identify opportunities for growth and expansion of Chamber initiatives.',
        more02: 'Foster strong relationships with members, partners, and stakeholders.',
        more1: 'Oversee the daily operations of the Chamber, ensuring efficiency and effectiveness.',
        more2: 'Manage the Chamber’s budget, financial planning, and reporting.',
        more3: 'Supervise and mentor the junior assistant, providing guidance and development opportunities.',
        more31: 'Delegate appropriate tasks to the junior assistant, including event planning, research, presentations, and administrative support.',
        more4: 'Drive membership growth and retention through targeted outreach and engagement strategies.',
        more41: 'Organize and lead events, workshops, and seminars that promote diversity and inclusion in business.',
        more42: 'Serve as the primary spokesperson for the Chamber, representing it at public events, meetings, and in the media.',
        more5: 'Advocate for policies and practices that support diverse businesses and equitable economic opportunities.',
        more6: 'Collaborate with government agencies, industry groups, and other organizations to influence policy and legislative changes.',
        more7: "Stay informed on issues affecting diverse businesses and communicate relevant information to members.",
        more51: 'Identify and pursue funding opportunities, including grants, sponsorships, and partnerships.',
        more52: 'Develop and maintain relationships with potential and existing donors and sponsors.',
        more53: 'Ensure sustainable financial support for the Chamber’s programs and initiatives.',
      },
      secondTitle1: "Strategic Leadership",
      secondTitle2: "Operational Management",
      secondTitle3: "Membership and Community Engagement",
      secondTitle4: "Advocacy and Policy Development",
      secondTitle5: 'Fundraising and Resource Development',
      type: "Full time/On site",
    },
    {
      title: "Program and Development Manager",
      location: "Bucharest, Romania",
      require: {
        one: "Experience in program management and fundraising.",
        two: "Knowledge of diversity and inclusion best practices.",
        three: "Strong project management skills.",
        four: 'Excellent writing and communication skills.',
        five: 'Ability to build and maintain relationships.',
        six: 'Proficiency in Romanian and English.',
        more: "Develop and manage diversity and inclusion programs.",
        more01: "Coordinate events, workshops, and training sessions.",
        more02: "Monitor and evaluate program effectiveness.",
        more03: 'Lead fundraising initiatives and secure sponsorships.',
        more04: 'Write grant proposals.',
        more05: 'Build relationships with donors and partners.',
      },
      beneficii1: 'Competitive salary.',
      beneficii2: '22 days of paid vacation leave per year and public holidays.',
      beneficii3: 'Professional development opportunities.',
      beneficii4: 'Participation at events',
      beneficii5: 'Remote work options.',

      type: "Full time/On site",
    },
    {
      title: "Communications, Outreach, and Operations Manager",
      location: "Bucharest, Romania",
      require: {
        one: "Experience in public relations, communications, or marketing.",
        two: "Strong writing and editing skills.",
        three: "Proficiency with digital communication tools.",
        four: 'Experience in community outreach or engagement.',
        five: 'Strong interpersonal and communication skills.',
        six: 'Experience in office administration and financial management.',
        seven: 'Strong organizational and analytical skills.',
        eight: "Proficiency with office and financial software and tools.",
        nine: "Proficiency in Romanian and English.",
        more: "Develop and implement communication strategies.",
        more01: "Manage media relations and social media presence.",
        more02: "Create content for newsletters, press releases, and our website.",
        more03: 'Engage with community members and stakeholders.',
        more04: 'Organize outreach events and activities.',
        more05: 'Manage office operations and administrative tasks.',
        more06: 'Support staff with scheduling, correspondence, and office supplies.',
        more07: 'Manage financial records and budgets.',
        more08: 'Prepare financial reports and audits.',
      },
      beneficii1: 'Competitive salary.',
      beneficii2: '22 days of paid vacation leave per year and public holidays.',
      beneficii3: 'Professional development opportunities.',
      beneficii4: 'Participation at events',
      beneficii5: 'Remote work options.',

      type: "Full time/On site",
    },
    {
      title: "Junior Assistant",
      location: "Bucharest, Romania",
      require: {
        one: "Strong organizational and multitasking abilities.",
        two: "Good communication and interpersonal skills.",
        three: "Proficiency with office software (e.g., Microsoft Office Suite).",
        four: 'Attention to detail and accuracy.',
        five: 'Previous administrative experience is a plus but not required.',
        six: 'Proficiency in Romanian and English.',
        more: "Assist with administrative tasks and office management.",
        more01: "Support the Communications, Outreach, and Operations Manager with scheduling and correspondence.",
        more02: "Help organize events, workshops, and meetings.",
        more03: 'Maintain office supplies and inventory.',
        more04: 'Perform data entry and basic record-keeping tasks.',
      },
      beneficii1: 'Competitive salary.',
      beneficii2: '22 days of paid vacation leave per year and public holidays.',
      beneficii3: 'Professional development opportunities.',
      beneficii4: 'Participation at events',
      beneficii5: 'Remote work options.',

      type: "Part time/On site",
    },
    {
      title: "Office & Marketing Assistant - Entry level",
      location: "Bucharest, Romania",
      description: '\nLooking for motivated people who understand the concept of international standards of Diversity; Inclusion and Sustainability, customer service, office management, research, etc. \nWe need a junior person who is not afraid to take initiative, and who likes new challenges, has a sharp intellect and is open-minded!',
      require: {
        one: "Native Romanian speaker with very good level of English",
        two: "Acts proactively and without much supervision, good organization skils",
        three: "Good familiarity with basic office software (MS Office) and apps",
        four: 'Strong communication skills',
        more: "Event planning and management",
        more01: "Research and presentations",
        more02: "Administrative and office support",
      },
      profile1: 'Walks into a room and can’t leave without making a few friends',
      profile2: 'Is thoughtful when interacting with online communities and building relationships',
      profile3: 'Has the ability to prioritize and manage multiple projects simultaneously',
      profile4: 'Is an effective contributor with the ability to work well with others in a global, team-oriented environment',
      profile5: 'Has big-picture vision and the drive to make that vision a reality',
      profile6: 'Is self-motivated with positive attitude',
      type: "Full time/Hybrid",
    },
    {
      title: "Expert Financial Controlling",
      location: "Bucharest, Romania",
      description: '\n For our client, a holding currently developing projects in the field of renewable energy, we are looking for a passionate professionals ready to contribute to projects that shape the energy future of Romania.\nPurpose of position:\nTo oversee and coordinate the financial management, cash management and reporting processes for all group companies.\nThis role ensures accurate and timely management reporting, implements effective internal controls, and provides strategic financial insights to support decision-making.',
      require: {
        one: "Educational Background: Bachelor’s degree in Controlling, Accounting, Finance or a related field.",
        two: 'Experience: Five years of experience in controlling, accounting or finance.',
        three: "Financial Reporting: Good knowledge of planning and economics, controlling, finance, and financial management (e.g., net present value). Strong ability to prepare and present accurate and timely financial reports, including actual vs budget analysis, forecasts, budgets, cash flow.",
        four: 'MS Office Proficiency: Advanced proficiency in Microsoft Excel, including the ability to create complex financial models, use pivot tables, and perform data analysis. Good knowledge of other MS Office applications, including Word, Power Point, Outlook, Teams, etc.',
        five: 'Collaboration: Excellent interpersonal and communication skills to effectively collaborate with business colleagues across various departments.',
        six: "Independent and Team Work: Demonstrates the ability to work effectively both individually and as part of a team. This includes taking initiative and managing tasks autonomously, while also collaborating seamlessly with colleagues to achieve common goals.",
        seven: "Analytical Skills: Strong analytical and problem-solving skills to interpret financial data, identify trends, and provide actionable insights.",
        eight: 'Internal Controls: Experience in developing and maintaining robust internal control systems to ensure financial integrity and compliance.',
        nine: 'Innovative Problem Solving: Ability to innovate by suggesting improvements to activities, participating in the development of solutions for complex problems, and actively identifying opportunities for improvement.',
        ten: 'Flexibility and Adaptability: Ability to adjust to new requirements and to changes in the work environment or job tasks efficiently, demonstrating flexibility in thinking and behavior.',
        eleven: 'Time Management: Ability to manage multiple priorities and meet tight deadlines, ensuring timely and accurate financial reporting.',
        twelve: 'Advanced English Language Skills: Proficiency in English, both written and spoken, is required.',
        more: "Annual Business Plan preparation: Develop the company’s annual business plan and budget (P&L, KPI, CAPEX, cash flow for all Group companies) by collaborating with other departments to gather necessary data and ensure alignment with strategic goals.",
        more01: 'Capital Expenditure: Monitor the capital expenditures budget, ensuring that investments align with the company’s approved budgets.',
        more02: 'Financial Forecasting: Create monthly/quarterly financial forecasts for future revenues, expenses, and cash flows at company level. This involves analyzing historical data and other available information to make informed projections.',
        more03: 'Stakeholder Communication: Present budget and forecast reports to senior management and stakeholders, providing clear explanations of assumptions, methodologies, and key findings.',
        more04: 'Continuous Improvement: Continuously refine budgeting and forecasting processes to enhance accuracy, efficiency, and relevance. Incorporate feedback and lessons learned from previous cycles.',
        more05: 'Financial Modeling: Create financial models to simulate different scenarios and predict future financial outcomes. These models are essential for strategic planning, budgeting, and forecasting',
        more1: 'Monthly closing activities: Timely execution of monthly, quarterly, and annual closing activities, including verification of estimates and cost allocations per project.',
        more2: 'Variance Analysis: Monitor and analyze variances between actual financial results and budgeted figures. Identify the reasons for discrepancies and recommend corrective actions.',
        more3: 'Ad-hoc operational analyses: Prepare various ad-hoc operational analyses for a comprehensive understanding of operational results (e.g., trend and variance analyses, comparability analyses).',
        more31: 'Projects: Participate and contribute expertise to relevant projects. Prepare and consolidate various scenarios and strategic project reports.',
        more4: 'Policy Development: Develop and implement financial policies and procedures to improve operational efficiency and effectiveness. Establish and document internal control policies and procedures to ensure financial integrity and compliance with regulations.',
        more41: 'Risk Assessment: Identify and assess financial risks, implementing controls to mitigate these risks effectively.',
        more42: 'Control Activities: Design and implement control activities such as reconciliations, approvals, and reviews to safeguard assets and ensure accurate financial reporting. Ensure proper segregation of duties within the controlling, accounting and finance functions to prevent fraud and errors.',
        more43: 'Monitoring: Continuously monitor and evaluate the effectiveness of internal controls, making adjustments as necessary to address any weaknesses. Implement measures to improve the standardization, optimization, and automation of financial processes.',
        more44: 'Training and Awareness: Provide training and resources to staff to promote awareness and understanding of internal control policies and procedures.',
        more45: 'Documentation: Maintain comprehensive documentation of all internal control processes and procedures for transparency and audit purposes.',
        more46: ' Reporting: Regularly report on the status of internal controls to senior management and the board of directors, highlighting any significant issues or improvements.',
        more5: 'Cash Flow Monitoring: Regularly monitor the company’s cash flow to ensure there are sufficient funds to meet operational needs and financial obligations.',
        more6: 'Cash Flow Forecasting: Prepare accurate cash flow projections to anticipate future cash needs and identify potential shortfalls or surpluses.',
        more7: "Liquidity Management: Participate in the process of maintaining optimal liquidity levels by and ensuring funds are available for immediate and short-term needs.",
        more8: 'Reporting: Prepare and present regular cash management reports to senior management, providing insights into cash positions, forecasts, and any potential issues.',
        more51: 'Continuous improvement: Dedication to continuously improving technical skills and gaining knowledge from more experienced colleagues.',
        more52: 'Proactive attitude: Maintain a proactive approach by actively addressing and communicating important issues, opportunities, and improvements to superiors. Prompt and proactive communication to superiors of any errors or issues.',
        more53: 'Effective Stakeholder Communication: Maintain effective communication with all involved parties and providie clear and quick responses to requests.',
        more54: 'Proficiency in Controlling Software: Demonstrate experience in using controlling-specific software.',
        more55: 'Active Involvement: Participate in all activities and projects required by the CFO, ensuring comprehensive support and contribution to the department’s objectives.',
        more56: 'HSE Responsibilities: Comply with legislation and internal health, safety, security, and environmental protection standards, fire prevention, and civil protection at the workplace; use equipment properly according to technical instructions; do not affect the proper functioning, alter, change, or arbitrarily modify security systems in the building where you work; immediately report to the employer or responsible persons any situation where there are potential dangers to employee safety and health, or any malfunction in the protection system; inform the direct manager or employer about any accidents suffered; cooperate with the employer or responsible persons to enable the implementation of any legal measures or requirements from authorities; cooperate with the employer and authorities for the proper conduct of safety and health in the work environment; provide information in the event of or discovery of an imminent fire hazard or any other emergency to the responsible persons according to workplace procedures; participate in health examinations at the workplace as scheduled by a doctor and with the employer’s consent.',
        mainpoint1: 'Strategic Impact: Play a crucial role in shaping the company’s financial strategy and ensuring alignment with long-term goals.',
        mainpoint2: 'Comprehensive Financial Management: Oversee budgeting, forecasting, and financial modeling, providing a holistic view of the company’s financial health.',
        mainpoint3: 'Insightful Reporting: Generate detailed management reports that offer valuable insights into financial performance, aiding strategic decision-making.',
        mainpoint4: 'Robust Internal Controls: Establish and maintain strong internal control systems to safeguard company assets and ensure financial integrity.',
        mainpoint5: 'Dynamic Cash Management: Manage cash flow effectively, ensuring liquidity and financial stability.',
        mainpoint6: 'Collaborative Environment: Work closely with senior management and various departments, fostering a collaborative and supportive work culture.',
        mainpoint7: 'Continuous Improvement: Drive continuous improvement initiatives, enhancing financial processes and systems. Key contributor to initiatives in the area of financial and controlling process optimization, automation and standardization.',
        mainpoint8: 'Professional Development: Opportunities for ongoing professional growth and development in a dynamic and challenging environment.',
        mainpoint9: 'Expert Financial and Controlling Support: Provide financial and controlling expertise for a variety of complex tasks, as well as independently solving problems for group companies.',

      },
      secondTitle1: "Budgeting and Forecasting: Develop and manage the Business Plan, the annual budget and quarterly financial forecasts, ensuring alignment with the company’s strategic goals:",
      secondTitle2: "Reporting: Generate monthly/quarterly detailed management reports that provide insights into financial performance, trends, and forecasts to support strategic decision-making:",
      secondTitle3: "Internal Controls: Establish and maintain robust internal control systems to safeguard company assets and ensure financial integrity. Ensure that all activities are completed in accordance with internal procedures and are recorded and reported:",
      secondTitle4: "Cash Management: Oversee cash flow management, including the monitoring of cash balances and forecasting future cash needs:",
      secondTitle5: 'Strategic Planning: Collaborate with senior management to develop and execute financial strategies that support the company’s long-term objectives:',
      type: "Full time/On site",
    },
    {
      title: "Business Development Manager",
      location: "Romania",
      description: '\nOur client  is a growth-oriented organization specializing in manufacturing and distribution of interior design products.\nOn behalf of our client, we are looking to hire a Business Development Manager with the skills to spearhead growth initiatives and identify new opportunities for our organization. \nThe ideal candidate will be responsible for developing a robust pipeline, building strategic partnerships, and driving revenue growth through innovative solutions.\n This role is perfect for an individual with a passion for strategic planning, excellent communication skills, and a proven ability to exceed business targets.',
      require: {
        more: "Identify and generate new business opportunities by researching and analyzing market trends, competitor activity, and client needs.",
        more02: "Develop and execute comprehensive business development strategies to drive company growth and profitability.",
        more03: 'Build and maintain strong relationships with key stakeholders, potential clients, and industry partners.',
        more04: 'Lead the end-to-end sales process, including prospecting, pitching, negotiation, and closing deals.',
        more05: 'Collaborate with internal teams (e.g., marketing, product development, operations) to create tailored solutions for potential clients.',
        more06: 'Prepare and present business proposals, participate in tenders and presentations to senior leadership and client decision-makers.',
        more07: 'Monitor industry developments and emerging trends to identify opportunities for growth and innovation.',
        more08: "Develop and maintain a robust sales pipeline using own company's CRM tool to track progress and performance metrics.",
        more09: 'Represent the company at industry events, conferences, and networking opportunities to build brand awareness and establish connections.',
      },
      profile1: 'Strong ability to identify and capitalize on business opportunities through strategic thinking and market analysis.',
      profile2: 'Exceptional communication and negotiation skills, with the ability to influence decision-making at all levels.',
      profile3: 'Proven expertise in developing and executing successful sales and business development strategies.',
      profile4: 'Adept at building relationships with senior executives, stakeholders, and industry leaders.',
      profile5: 'Solid understanding of business dynamics, sales cycles, and consultative selling techniques.',
      profile6: 'Analytical mindset to assess market trends and performance data to inform strategic decisions.',
      profile7: 'Self-motivated and results-driven attitude, with a demonstrated ability to meet and exceed revenue goals.',
      profile8: 'Ability to thrive in a fast-paced, entrepreneurial environment, with excellent problem-solving skills.',
      profile9: 'High attention to detail and organizational skills for managing complex deals and long-term partnerships.',
      profile10: 'Good people management skills, with the ability to drive and lead the business development team.',
      pref1: 'Proven track record in business development, sales, or a related role, with measurable achievements in revenue generation.',
      pref2: 'Bachelor’s degree in Business Administration, Marketing, Economics, or a related field (MBA is a plus).',
      pref3: 'Industry-specific experience (e.g., technology, professional services, or B2B sales) is highly desirable.',
      pref4: 'Experience managing high-value accounts and long-term business partnerships.',
      pref5: 'English language is a must',
      pref6: 'German language is an advantage',
      type: "Full time/Hybrid",
    },
    {
      title: "Procurement Manager",
      location: "Bucharest, Romania",
      description: "\nFor our client, specialized in complete solutions of laboratory and testing, we are looking for a Procurement Manager to oversee purchasing activities and ensure that purchased items are both cost-efficient and of high quality.\n The Procurement Manager's responsibilities include maintaining positive supplier relations, evaluating supply options, approving purchases, and maintaining accurate records.",
      require: {
        one: "Degree in accounting, business management or a similar field preferred.",
        two: "3-5 years of experience as a Procurement Manager or in a similar position.",
        three: "Proficiency in Microsoft Office and purchasing software.",
        four: 'Strong communication and negotiation skills.',
        five: 'Good analytical and strategic thinking skills.',
        six: 'Supervisory and management experience.',
        seven: 'Attention to detail.',
        eight: 'Analytical mind',
        nine: 'Compliance with company standards.',
        ten: 'Advance English language',
        eleven: 'German language is an advantage',
        more: "Preparing plans for the purchase of equipment, services, and supplies.",
        more01: "Following and enforcing the company's procurement policies and procedures.",
        more02: "Managing inventories and maintaining accurate purchase and pricing records.",
        more03: 'Maintaining and updating supplier information such as qualifications, delivery times, product ranges, etc.',
        more04: 'Maintaining good supplier relations and negotiating contracts.',
        more05: 'Researching and evaluating prospective suppliers.',
        more06: 'Preparing budgets, cost analyses, and reports.'
      },

      type: "Full Time/On site",
    },
    {
      title: "Sales Engineer",
      location: "Bucharest, Romania",
      description: "\nFor our client, specialized in complete solutions of laboratory and testing, we are looking for a Sales Engineer based in Bucharest. \nThe Sales Engineer is a key position in the organization as they are the point of contact for clients, answering queries, providing technical advice and demonstrating how to use new products, offering services and solutions.",
      require: {
        one: "Strong technical skills",
        two: "Research and analytical skills",
        three: "Organizational skills",
        four: 'Communication skills, including the ability to explain clearly, listen to the feedback of clients – and relay this to colleagues',
        five: 'The ability to negotiate with and influence others',
        six: 'Teamworking skills',
        seven: 'Sales skills',
        eight: 'Commercial awareness.',
        nine: 'Driving license',
        ten: 'English language',
        more: "Identifying and establishing new business",
        more01: "Organizing sales visits",
        more02: "Giving demonstrations, training and presentations to help clients discover and understand products/services",
        more03: 'Liaising with existing clients',
        more04: 'Preparing tenders, proposals and quotations',
        more05: 'Providing pre-sales and post-sales support',
        more06: 'Negotiating contracts, terms and conditions',
        more07: 'Reviewing cost and sales performance',
        more08: 'Writing reports and sales literature',
        more09: 'Supporting other members of the sales team by training them in the uses of products/services',
        more10: 'Attending trade exhibitions, conferences and meetings',
        more11: 'Ensuring that sales targets are met.',
      },

      type: "Full Time/On site",
    },
    {
      title: "Sales Engineer",
      location: "Cluj Napoca / Oradea / Baia Mare, Romania",
      description: "\nFor our client, specialized in complete solutions of laboratory and testing, we are looking for a Sales Engineer based in Cluj Napoca / Oradea / Baia Mare.\nThe Sales Engineer is a key position in the organization as they are the point of contact for clients, answering queries, providing technical advice and demonstrating how to use new products, offering services and solutions.",
      require: {
        one: "Strong technical skills",
        two: "Research and analytical skills",
        three: "Organizational skills",
        four: 'Communication skills, including the ability to explain clearly, listen to the feedback of clients – and relay this to colleagues',
        five: 'The ability to negotiate with and influence others',
        six: 'Teamworking skills',
        seven: 'Sales skills',
        eight: 'Commercial awareness.',
        nine: 'Driving license',
        ten: 'English language',
        more: "Identifying and establishing new business",
        more01: "Organizing sales visits",
        more02: "Giving demonstrations, training and presentations to help clients discover and understand products/services",
        more03: 'Liaising with existing clients',
        more04: 'Preparing tenders, proposals and quotations',
        more05: 'Providing pre-sales and post-sales support',
        more06: 'Negotiating contracts, terms and conditions',
        more07: 'Reviewing cost and sales performance',
        more08: 'Writing reports and sales literature',
        more09: 'Supporting other members of the sales team by training them in the uses of products/services',
        more10: 'Attending trade exhibitions, conferences and meetings',
        more11: 'Ensuring that sales targets are met.',
      },

      type: "Full Time/On site",
    },
    {
      title: "Sales Engineer",
      location: "Iasi, Romania",
      description: "\nFor our client, specialized in complete solutions of laboratory and testing, we are looking for a Sales Engineer based in Iasi.\nThe Sales Engineer is a key position in the organization as they are the point of contact for clients, answering queries, providing technical advice and demonstrating how to use new products, offering services and solutions.",
      require: {
        one: "Strong technical skills",
        two: "Research and analytical skills",
        three: "Organizational skills",
        four: 'Communication skills, including the ability to explain clearly, listen to the feedback of clients – and relay this to colleagues',
        five: 'The ability to negotiate with and influence others',
        six: 'Teamworking skills',
        seven: 'Sales skills',
        eight: 'Commercial awareness.',
        nine: 'Driving license',
        ten: 'English language',
        more: "Identifying and establishing new business",
        more01: "Organizing sales visits",
        more02: "Giving demonstrations, training and presentations to help clients discover and understand products/services",
        more03: 'Liaising with existing clients',
        more04: 'Preparing tenders, proposals and quotations',
        more05: 'Providing pre-sales and post-sales support',
        more06: 'Negotiating contracts, terms and conditions',
        more07: 'Reviewing cost and sales performance',
        more08: 'Writing reports and sales literature',
        more09: 'Supporting other members of the sales team by training them in the uses of products/services',
        more10: 'Attending trade exhibitions, conferences and meetings',
        more11: 'Ensuring that sales targets are met.',
      },

      type: "Full Time/On site",
    },
    {
      title: "Sales Engineer",
      location: "Brasov / Sibiu, Romania",
      description: "\nFor our client, specialized in complete solutions of laboratory and testing, we are looking for a Sales Engineer based in Brasov / Sibiu.\nThe Sales Engineer is a key position in the organization as they are the point of contact for clients, answering queries, providing technical advice and demonstrating how to use new products, offering services and solutions.",
      require: {
        one: "Strong technical skills",
        two: "Research and analytical skills",
        three: "Organizational skills",
        four: 'Communication skills, including the ability to explain clearly, listen to the feedback of clients – and relay this to colleagues',
        five: 'The ability to negotiate with and influence others',
        six: 'Teamworking skills',
        seven: 'Sales skills',
        eight: 'Commercial awareness.',
        nine: 'Driving license',
        ten: 'English language',
        more: "Identifying and establishing new business",
        more01: "Organizing sales visits",
        more02: "Giving demonstrations, training and presentations to help clients discover and understand products/services",
        more03: 'Liaising with existing clients',
        more04: 'Preparing tenders, proposals and quotations',
        more05: 'Providing pre-sales and post-sales support',
        more06: 'Negotiating contracts, terms and conditions',
        more07: 'Reviewing cost and sales performance',
        more08: 'Writing reports and sales literature',
        more09: 'Supporting other members of the sales team by training them in the uses of products/services',
        more10: 'Attending trade exhibitions, conferences and meetings',
        more11: 'Ensuring that sales targets are met.',
      },

      type: "Full Time/On site",
    },
    {
      title: "VP Risk Management",
      location: "Remote from anywhere",
      description: "\nLevel of Seniority: Senior Level Manager (Director, Dept Head, VP, General Manager,C-level)\nWe are looking for an experienced Vice President (VP) of Risk Management, capable of leading the development, implementation, and maintenance of robust risk management frameworks to protect our client and its customers. \nThe ideal candidate will have a proactive approach to identifying, assessing, and mitigating risks across operational, financial, regulatory, and reputational domains, ensuring compliance with all relevant regulations.",
      require: {
        one: "Bachelor’s degree in Risk Management, Finance, Business, or related field (MBA or advanced degree preferred).",
        two: "7+ years of proven experience in an executive risk management role, fraud, KYC, payments within FinTech or a related field, with a successful track record in team leadership and mentorship.",
        three: "A strong financial risk background.",
        four: 'Strong written and verbal communication skills in English, to effectively interact with both internal teams and external stakeholders.',
        five: 'Robust analytical capabilities and a proactive approach to problem-solving within a dynamic, fast-paced environment.',
        six: 'Deep understanding of regulatory requirements and industry standards in financial services, with the ability to maintain compliance.',
        seven: 'Thrives in an evolving, fast-paced environment, showing resilience and flexibility in response to changes and challenges.',
        eight: 'Practical understanding and working knowledge of AML regulatory requirements relating to KYC / Financial Crime.',
        nine: 'An understanding of the mechanics of BTC and the related challenges of wallets, flows and regulations in the Crypto landscape.  Exposure to regulations pertaining to a Bank and a VASP would be useful.',
        more: "Collaborate with the Executive Leadership team to align risk management priorities, budgets, and objectives, ensuring these meet our client’s strategic goals and vision.",
        more01: "Develop and implement risk management strategies, policies, and procedures that support our client’s objectives, regulatory standards, and commitment to trustworthiness, security, and innovation in digital banking.",
        more02: "Lead and mentor a high-performing team of risk professionals, fostering a culture of collaboration, integrity, and growth that reflects our clients’ values.",
        more03: 'Identify, assess, and prioritize potential risks across operational, financial, regulatory, and reputational areas to safeguard our client’s interests and uphold its ethical standards.',
        more04: 'Design and implement effective risk mitigation strategies and controls to maintain a secure, resilient, and compliant environment.',
        more05: 'Oversee key risk indicators (KRIs) and metrics, using these insights to assess risk exposure, detect emerging risks, and support informed, data-driven decisions.',
        more06: 'Ensure adherence to regulatory requirements, industry standards, and policies, maintaining open channels with regulatory authorities as part of our clients’ commitment to transparency.',
        more07: 'Build and maintain relationships with stakeholders, partners, regulators, and industry leaders, staying abreast of trends and changes impacting digital banking and crypto-regulations.',
        more08: 'Act as a trusted advisor to senior leadership, providing clear, actionable insights and recommendations on risk-related matters that drive our client’s mission forward.',
        more09: 'Drive a culture of risk awareness, resilience, and regulatory alignment with the institution’s strategic objectives.',
        more10: 'Collaborate closely with teams across the organization to identify and address suspicious activities that could impact our secure financial environment.',
      },

      type: "Full Time/Remote",
    },
    
    
    
    
    
  ];
  const filteredJobs = jobs.filter((job) =>
    filter === "completed" ? job.completed : !job.completed
  );

  return (
    <section>
      <div className="container mt-2 pt-3 pb-5" data-aos="fade-up">
        <div className="section-title mb-5">
          <h2>Open positions</h2>
          <p>
            Head Hunting Agency is a premier HR business committed to the art of
            connecting exceptional talent with progressive organizations. Our
            mission is to elevate recruitment standards, ensuring our clients
            build robust, high-performing teams.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="text-center mb-4">
          <div className="btn-group custom-btn-group" role="group">
            <button
              className={`btn custom-btn ${filter === "open" ? "active" : ""}`}
              onClick={() => setFilter("open")}
            >
              Open Jobs
            </button>
            <button
              className={`btn custom-btn ${filter === "completed" ? "active" : ""}`}
              onClick={() => setFilter("completed")}
            >
              Completed Jobs
            </button>
          </div>
        </div>

        <div className="row">
          {filteredJobs.map((job, index) => (
            <div
              className={`col-lg-6 col-md-12 col-12 mt-4 pt-2 ${
                job.completed ? "opacity-50" : ""
              }`}
              key={index}
            >
              <div
                className={`card border-0 bg-light rounded shadow ${
                  job.completed ? "completed-card" : ""
                }`}
              >
                <div className="card-body p-4">
                  <span className="badge rounded-pill job-type float-md-end mb-3 mb-sm-0">
                    {job.type}
                  </span>
                  <h5>{job.title}</h5>
                  <div className="mt-3">
                    <span className="text-muted d-block">
                      <i className="fa-solid fa-location-dot"></i> {job.location}
                    </span>
                  </div>
                  <div className="mt-3">
                    <button
                      className="details-button"
                      onClick={() => openJobDetailsModal(job)}
                      disabled={job.completed}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedJob && (
          <JobDetailsModal
            isOpen={!!selectedJob}
            onClose={closeJobDetailsModal}
            jobDetails={selectedJob}
          />
        )}
      </div>
      <Footer />
    </section>
  );
}

export default Vacancies;
