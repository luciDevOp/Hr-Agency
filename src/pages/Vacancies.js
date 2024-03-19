import React, { useState } from "react";
import Footer from "../components/Footer";

const JobDetailsModal = ({ isOpen, onClose, jobDetails }) => {
  return (
    <div
      className={`modal ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          
          <div className="modal-header">
            <h5 className="modal-title">{jobDetails.title}</h5>
          </div>
          <div className="modal-body">

            <p className="job-title">Location: {jobDetails.location}</p>
            <p>{jobDetails.description}</p>
          
            <p className="job-title">Requirements:</p>
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
            </ul>
            {jobDetails.require && jobDetails.require.more && (
              <p className="job-title">Key Responsibilities:</p>
            )}
            {jobDetails.require && jobDetails.require.more && (
              <p>{jobDetails.secondTitle1}</p>
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
            </ul>
            {jobDetails.require && jobDetails.require.more && (
              <p>{jobDetails.secondTitle2}</p>
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
            </ul>
            {jobDetails.require && jobDetails.require.more && (
              <p>{jobDetails.secondTitle3}</p>
            )}
            <ul>
              {jobDetails.require && jobDetails.require.more4 && (
                <li>{jobDetails.require.more4}</li>
              )}
            </ul>
            {jobDetails.require && jobDetails.require.more && (
              <p>{jobDetails.secondTitle4}</p>
            )}
            <ul>
              {jobDetails.require && jobDetails.require.more5 && (
                <li>{jobDetails.require.more5}</li>
              )}
            </ul>
              {jobDetails.salariu && (
                <p className="job-title">Salariu: {jobDetails.salariu}</p>
              )}

              {jobDetails.beneficii1 && (
                <p className="job-title">Beneficii:</p>
              )}
              <ul>
              {jobDetails.beneficii1 && (
                <li>{jobDetails.beneficii1}</li>
              )}
              {jobDetails.beneficii1 && (
                <li>{jobDetails.beneficii2}</li>
              )}
              {jobDetails.beneficii1 && (
                <li>{jobDetails.beneficii3}</li>
              )}
              {jobDetails.beneficii1 && (
                <li>{jobDetails.beneficii4}</li>
              )}
              {jobDetails.beneficii1 && (
                <li>{jobDetails.beneficii5}</li>
              )}
              {jobDetails.beneficii1 && (
                <li>{jobDetails.beneficii6}</li>
              )}
              {jobDetails.beneficii1 && (
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
        "A strategic role within the Global People Leadership Team. This position is responsible for overseeing the design, development, implementation, and administration of the compensation and benefits programs, as well as managing the global people operations to ensure accurate and efficient management of people processes and data analytics. The right hand and partner to the People Leadership Team and EVP, People on all matters related to compensation, operations and compliance.",
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
    },
    {
      title: "Vertical Marketing Manager Energy / Oil & Gas Utilities",
      location: "Bucharest, Romania",
      description:
        "As the Vertical Segment Manager, the main focus will be leading the development and execution of strategic marketing initiatives for the Energy / Oil & Gas vertical.",
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
    },
    {
      title: "Vertical Marketing Manager Public Safety and Security",
      location: "Bucharest, Romania",
      description:
        "As the Vertical Segment Manager, the main focus will be leading the development and execution of strategic marketing initiatives for the Public Safety and Security vertical.",
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
      type: "Full time/Hybrid",
    },
    {
      title: "B2B Area Sales Manager in Plastic Industry",
      location: "Bucharest, Romania",
      description:
        "As a rapidly growing international company, our client works tirelessly to offer customers the best solutions, therefore looking for a B2B Sales Manager in Bucharest, Romania.",
      require: {
        one: "B2B sales experience, preferably in plastic industry related to manufacturing and construction sector, as well as FMCG and pharmaceutical",
        two: "direct selling experience.",
        three: "good presentation, communication and negotiation skills.",
        four: "english is a must.",
      },
      type: "Full time/Hybrid",
    },
    {
      title: "General Manager IFN",
      location: "Bucharest. Romania",
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
        "As the Senior Director, Information Technology and Security you will be playing a pivotal role in defining and implementing the strategic direction of our client’s rapidly growing organization.",
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
      description:
        "Community Based Program for Blind children and young people",
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
        "The successful Construction Manager will lead an established team of Section Head and Engineers all working together to secure the completion of the project within time and budget. Their responsibility includes the definition of detailed construction plans and schedule giving priorities where necessary; They will ensure the availability of technical documentation and on time request for necessary project personnel, materials and equipment.They will also be responsible for the Financial results of the Project and the proper management of resources (materials, equipment & manpower) in order to ensure financial results better than budgeted. The main focus is always customer satisfaction.",
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
    },
    {
      title: "Project Manager Construction",
      location: "Targoviste, Romania",
      description: "Urmareste realizarea proiectelor de constructii conform cerintelor clientului si conditiilor contractuale asumate.",
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
        "Cautam un Manager vanzari IKA, cu experienta de vanzare pe piata de IKA (retele internationale de magazine retail), ambitios, curajos si motivat de evolutie permanenta (personala, a vanzarilor, a celor cu care lucreaza).",
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
    },
  ];

  return (
    <section>
      <div className="container mt-2 pt-3 pb-5" data-aos="fade-up">
        <div className="section-title mb-5">
          <h2>Open positions</h2>
          <p>
            Head Hunting Agency is a premier HR business committed to the art of
            connecting exceptional talent with progressive organizations. Our
            mission is to elevate recruitment standards, ensuring our clients
            build robust, high-performing teams. As a dynamic headhunting agency
            experiencing rapid growth, we are actively seeking dedicated
            individuals to join our team and contribute to the ongoing success
            of both our clients and candidates.
          </p>
        </div>
        <div className="row">
  {jobs.map((job, index) => (
    <div className={`col-lg-6 col-md-12 col-12 mt-4 pt-2 ${job.completed ? 'opacity-50' : ''}`} key={index}>
      <div className={`card border-0 bg-light rounded shadow ${job.completed ? 'completed-card' : ''}`}>
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
