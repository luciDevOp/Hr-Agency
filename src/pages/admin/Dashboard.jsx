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
import { axiosPost } from "../../utils/api"; // adjust path based on location
import CandidateModal from "../../components/admin/DialogInfoCandidat"; // adjust path based on location


const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({ name: "", email: "", phone: "" });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [paginationInfo, setPaginationInfo] = useState({ RowCount: 0 }); // Inițializează cu RowCount 0
  useEffect(() => {
    fetchCandidates();
  }, [page, rowsPerPage, filters]);

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const showCandidateInfo = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const fetchCandidates = async () => {
    try {
      const formData = new FormData();
      formData.append("Filters[name]", filters.name);
      formData.append("Filters[email]", filters.email);
      formData.append("Filters[phone]", filters.phone);
      formData.append("PaginationInfo[Page]", page + 1); // Backend-ul începe de la pagina 1
      formData.append("PaginationInfo[RowsPerPage]", rowsPerPage);
  
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      console.log(formDataObj);

      const response = await axiosPost("dashboard/index", formData);
  
      setCandidates(response.data.candidates || []);
      setPaginationInfo(response.data.PaginationInfo || {});
    } catch (error) {
      console.error("Error fetching candidates:", error);
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
  

  const previewCV = (cvUrl) => {
    window.open(cvUrl, "_blank");
  };

  const downloadCV = (cvUrl) => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = cvUrl.split("/").pop();
    link.click();
  };
  const delete_candidate = async (id) => {
    try {
      const response = await axiosPost("dashboard/delete_cv", { id });
  
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
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Filter by Name"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          fullWidth
        />
        <TextField
          label="Filter by Email"
          name="email"
          value={filters.email}
          onChange={handleFilterChange}
          fullWidth
        />
        <TextField
          label="Filter by Phone"
          name="phone"
          value={filters.phone}
          onChange={handleFilterChange}
          fullWidth
        />
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
              <TableCell sx={{ textAlign: "right" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>{candidate.lastname}</TableCell>
                <TableCell>{candidate.firstname}</TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>{candidate.phone_number}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => previewCV(candidate.cv_url)}
                    sx={{ marginRight: 1 }}
                  >
                    Preview CV
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => downloadCV(candidate.cv_url)}
                    sx={{ marginRight: 1 }}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    onClick={() => showCandidateInfo(candidate)}
                    sx={{ marginRight: 1 }}
                  >
                    Show Info
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => delete_candidate(candidate.id)}
                  >
                    Delete CV
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