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
  Button,
  TextField,
  TablePagination,
  Typography,
} from "@mui/material";
import { axiosPost } from "../../utils/api"; // adjust path based on location

const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({ name: "", email: "", phone: "" });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchCandidates();
  }, [page, rowsPerPage, filters]);

  const fetchCandidates = async () => {
    try {
      const formData = new FormData();
      // formData.append("email", filters.email);
      // formData.append("name", filters.name);
      // formData.append("phone", filters.phone);
      // formData.append("page", page + 1);
      // formData.append("rowsPerPage", rowsPerPage);

      const response = await axiosPost("dashboard/index");
      
      // setCandidates(response.data.candidates || []);
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

  const showCandidateInfo = (candidate) => {
    alert(JSON.stringify(candidate, null, 2));
  };

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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell>{candidate.lastname}</TableCell>
                <TableCell>{candidate.firstname}</TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>{candidate.phone}</TableCell>
                <TableCell>
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
                  >
                    Show Info
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
        count={candidates.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default Dashboard;