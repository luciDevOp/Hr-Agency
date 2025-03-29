import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  Alert,
  Button,
  TextField,
  TablePagination,
  Typography,
} from "@mui/material";
import { axiosPost } from "../../utils/api";
import JobDialog from "../../components/admin/JobDialog";


const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: ""});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null); // Store selected job for editing

  const [paginationInfo, setPaginationInfo] = useState({ RowCount: 0 }); // Inițializează cu RowCount 0
  useEffect(() => {
    fetchJobs();
  }, [page, rowsPerPage, filters]);

  const showJobInfo = (job) => {
    setSelectedJob(job);
    setOpenDialog(true); 
  };

  const handleCloseDialog = () => {
    setSelectedJob(null); 
    setOpenDialog(false);
  };

  const fetchJobs = async () => {
    try {
      const formData = new FormData();
      formData.append("Filters_name", filters.name);
      formData.append("Filters_email", filters.email);
      formData.append("Filters_phone", filters.phone);
      formData.append("PaginationInfo_Page", page + 1);
      formData.append("PaginationInfo_RowsPerPage", rowsPerPage);
  
      const response = await axiosPost("/jobs/index", formData);

      setJobs(response.jobs || []);
      setPaginationInfo(response.PaginationInfo || {});
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const completeJob = async (id) => {
    try {
      const response = await axiosPost("/jobs/complete_job", { id });
  
      if (response.data?.Error) {
        // Notificare de eroare
        setSnackbar({
          open: true,
          message: response.data.MesajEroare || "A apărut o eroare.",
          severity: "error",
        });
      } else {
        // Notificare de succes
        setSnackbar({
          open: true,
          message: "Jobul a fost marcat ca finalizat.",
          severity: "success",
        });
  
        // opțional: reîncarcă lista
        fetchJobs();
      }
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Eroare la conexiunea cu serverul.",
        severity: "error",
      });
    }
  }
  
  const deleteJob = async (id) => {
    try {
      const response = await axiosPost("/jobs/delete_job", { id });
  
      if (response.data?.Error) {
        // Notificare de eroare
        setSnackbar({
          open: true,
          message: response.data.MesajEroare || "A apărut o eroare.",
          severity: "error",
        });
      } else {
        // Notificare de succes
        setSnackbar({
          open: true,
          message: "Jobul a fost șters cu succes.",
          severity: "success",
        });
  
        // opțional: reîncarcă lista
        fetchJobs();
      }
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Eroare la conexiunea cu serverul.",
        severity: "error",
      });
    }
  };
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info', // 'success' | 'error' | 'warning' | 'info'
  });
  

  return (
    
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Jobs List
        <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => showJobInfo(null)}
            sx={{ marginLeft: 2 }}
            >Add job</Button>
      </Typography>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Filter by title"
          name="title"
          value={filters.title}
          onChange={handleFilterChange}
          fullWidth
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Environment</TableCell>
              <TableCell>Type</TableCell>
              <TableCell sx={{ textAlign: "right" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.environment}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => showJobInfo(job)}
                    sx={{ marginRight: 1 }}
                  >
                    Show job info
                  </Button>
                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => completeJob(job.id)}
                    sx={{ marginRight: 1 }}
                  >
                    Complete job
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => deleteJob(job.id)}
                  >
                    Delete job
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={paginationInfo?.RowCount || 0}  // numărul total de rânduri din backend
        page={page}                           // pagina curentă
        onPageChange={handleChangePage}       // funcția pentru schimbarea paginii
        rowsPerPage={rowsPerPage}             // numărul de rânduri per pagină
        onRowsPerPageChange={handleChangeRowsPerPage}  // funcția pentru schimbarea numărului de rânduri per pagină
      />

        <JobDialog
            open={openDialog}
            onClose={handleCloseDialog}
            job={selectedJob}
        />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default JobList;