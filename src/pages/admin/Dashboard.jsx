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
  Tooltip,
  Alert,
  Button,
  TextField,
  TablePagination,
  CircularProgress,
  Typography,
  FormControl,
   FormLabel,
   FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { axiosPost } from "../../utils/api"; // adjust path based on location
import CandidateModal from "../../components/admin/DialogInfoCandidat"; // adjust path based on location
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({ name: "", current_job_title:"", email: "", phone: "", applied: false });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [paginationInfo, setPaginationInfo] = useState({ RowCount: 0 }); // Inițializează cu RowCount 0
  useEffect(() => {
    fetchCandidates();
  }, [page, rowsPerPage, filters]);

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const showCandidateInfo = (candidate) => {
    console.log(candidate);
    setSelectedCandidate(candidate);
  };

  const fetchCandidates = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("Filters_name", filters.name);
      formData.append("Filters_email", filters.email);
      formData.append("Filters_phone", filters.phone);
      formData.append("Filters_current_job_title", filters.current_job_title);
      formData.append("Filters_applied", filters.applied);
      formData.append("PaginationInfo_Page", page + 1);
      formData.append("PaginationInfo_RowsPerPage", rowsPerPage);
  
      const response = await axiosPost("/dashboard/index", formData);

      setCandidates(response.candidates || []);
      setPaginationInfo(response.PaginationInfo || {});
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }finally {
      setLoading(false); 
    }
  };
  
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: name === "applied" && value !== "" ? value === "true" : value,
    }));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  

  const previewCV = (cvUrl) => {
    window.open(cvUrl, "_blank");
  };

  const downloadCV = (cv_file) => {
    const link = document.createElement("a");
    link.href = `https://hha.ro/api/public/dashboard/download_cv/${cv_file}`;
    link.download = cv_file; // sau un nume de fișier explicit dacă îl știi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const delete_candidate = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this candidate?");
    if (!confirmDelete) return;
    try {
      const formData = new FormData();
      formData.append("id", id);
      const response = await axiosPost("dashboard/delete_cv", formData);
  
      if (response.Error) {
        // Notificare de eroare
        setSnackbar({
          open: true,
          message: response.MesajEroare || "A apărut o eroare.",
          severity: "error",
        });
      } else {
        // Notificare de succes
        setSnackbar({
          open: true,
          message: "Candidatul a fost șters cu succes.",
          severity: "success",
        });
  
        // opțional: reîncarcă lista
        fetchCandidates();
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
        Candidates Dashboard
      </Typography>

      {/* Filters */}
      <Box
  sx={{
    display: "flex",
    gap: 2,
    marginBottom: 2,
    flexWrap: "nowrap",
    alignItems: "center",
    overflowX: "auto",
  }}
>
  <TextField
    label="Filter by Name"
    name="name"
    value={filters.name}
    onChange={handleFilterChange}
    sx={{ minWidth: 100, flex: 1 }}
  />
  <TextField
    label="Filter by Email"
    name="email"
    value={filters.email}
    onChange={handleFilterChange}
    sx={{ minWidth: 100, flex: 1 }}
  />
  <TextField
    label="Filter by Phone"
    name="phone"
    value={filters.phone}
    onChange={handleFilterChange}
    sx={{ minWidth: 100, flex: 1 }}
  />
    <TextField
    label="Filter by current job title"
    name="current_job_title"
    value={filters.current_job_title}
    onChange={handleFilterChange}
    sx={{ minWidth: 100, flex: 1 }}
  />

  <FormControl component="fieldset" sx={{ minWidth: 250 }}>
    <FormLabel component="legend" sx={{ fontSize: '0.9rem', marginBottom: 1 }}>
      Job Applicants
    </FormLabel>
    <RadioGroup
      row
      name="applied"
      value={filters.applied}
      onChange={handleFilterChange}
    >
      <FormControlLabel value="true" control={<Radio />} label="Applied" />
      <FormControlLabel value="false" control={<Radio />} label="All" />
    </RadioGroup>
  </FormControl>
</Box>


      {/* Candidates Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Last Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Applied Job</TableCell>
              <TableCell sx={{ textAlign: "right" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
                    <CircularProgress />
                  </Box>
                </TableCell>
              </TableRow>
            ) : candidates.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body2" color="text.secondary">
                    Nu s-au găsit candidați.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              candidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>{candidate.lastname}</TableCell>
                  <TableCell>{candidate.firstname}</TableCell>
                  <TableCell>{candidate.email}</TableCell>
                  <TableCell>{candidate.phone_number}</TableCell>
                  <TableCell>{candidate.applied_jobs.length === 0 ? 'Not a job applicant' : candidate.applied_jobs[0]}</TableCell>
                  <TableCell sx={{ textAlign: "right" }}>
                    <Tooltip title="Preview CV">
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => previewCV(candidate.cv_url)}
                        sx={{ marginRight: 1 }}
                      >
                        <FindInPageIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Download CV">
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => downloadCV(candidate.cv_file)}
                        sx={{ marginRight: 1 }}
                      >
                        <DownloadIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title="View candidate info">
                      <Button
                        variant="contained"
                        color="info"
                        size="small"
                        onClick={() => showCandidateInfo(candidate)}
                        sx={{ marginRight: 1 }}
                      >
                        <VisibilityIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete candidate">
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => delete_candidate(candidate.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            )}
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

      <CandidateModal
        open={!!selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        candidate={selectedCandidate}
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

export default Dashboard;