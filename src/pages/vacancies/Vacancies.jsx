import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import { axiosPost } from "../../utils/api";
import VacanciesDialog from "./VacanciesDialog";

function Vacancies() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [openJobDialog, setOpenJobDialog] = useState(false);

  const [jobsBackend, setJobsBackend] = useState([]);
  const [filter, setFilter] = useState("open"); 
  const [filters, setFilters] = useState({ completed: 0});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [paginationInfo, setPaginationInfo] = useState({ RowCount: 0 }); // Inițializează cu RowCount 0
  
  useEffect(() => {
    fetchJobs();
  }, [page, rowsPerPage, filters]);

  useEffect(() => {
    if (jobsTopRef.current) {
      jobsTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [jobsBackend]);
  

  const fetchJobs = async () => {
    try {
      var formData = new FormData();
      formData.append("Filters_completed", filters.completed);
      formData.append("PaginationInfo_Page", page + 1);
      formData.append("PaginationInfo_RowsPerPage", rowsPerPage);

      const response = await axiosPost("/jobs/fetchAllJobs", formData);

      if (response && response.jobs) {
        setJobsBackend(response.jobs);
        setPaginationInfo(response.PaginationInfo); 
      }

    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const setOpenVacanciesModal = (job) => {
    setSelectedJob(job);
    setOpenJobDialog(true);
  };
  const closeVacanciesModal = () => {
    setSelectedJob(null);
    setOpenJobDialog(false);
  };
  const jobsTopRef = useRef(null);


  return (
    <section>
      <div className="container mt-2 pt-3 pb-5" data-aos="fade-up">
        <div ref={jobsTopRef} className="section-title mb-5">
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
              className={`btn custom-btn ${filters.completed === 0 ? "active" : ""}`}
              onClick={() => {
                setFilters({ completed: 0 });
                setPage(0);
              }}
            >
              Open Jobs
            </button>
            <button
              className={`btn custom-btn ${filters.completed === 1 ? "active" : ""}`}
              onClick={() => {
                setFilters({ completed: 1 });
                setPage(0); 
              }}
            >
              Completed Jobs
            </button>
          </div>
        </div>
          {/* backend jobs */}
        <div className="row">
          {jobsBackend.map((job, index) => (
            <div
              className={`col-lg-6 col-md-12 col-12 mt-4 pt-2 ${
                job.completed == '1' ? "opacity-50" : ""
              }`}
              key={index}
            >
              <div
                className={`card border-0 bg-light rounded shadow ${
                  job.completed == '1' ? "completed-card" : ""
                }`}
              >
                <div className="card-body p-4">
                  <span className="badge rounded-pill job-type float-md-end mb-3 mb-sm-0">
                    {job.type}/{job.environment}
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
                      onClick={() => setOpenVacanciesModal(job)}
                      disabled={job.completed == '1'}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
          className="btn btn-primary pagination-btn d-flex align-items-center gap-2"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <span>
          {page + 1} of {Math.max(1, Math.ceil(paginationInfo.RowCount / rowsPerPage))}
        </span>

        <button
          className="btn btn-primary pagination-btn d-flex align-items-center gap-2"
          onClick={() => {
            if ((page + 1) < Math.ceil(paginationInfo.RowCount / rowsPerPage)) {
              setPage((prev) => prev + 1);
            }
          }}
          disabled={(page + 1) >= Math.ceil(paginationInfo.RowCount / rowsPerPage)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>


        </div>

        <VacanciesDialog
          job={selectedJob}
          open={openJobDialog}
          onClose={closeVacanciesModal}
        />
      </div>
      <Footer />
    </section>
  );
}

export default Vacancies;
