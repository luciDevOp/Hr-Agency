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
  Tooltip,
  TextField,
  TablePagination,
  Typography,
} from "@mui/material";
import { axiosPost } from "../../utils/api";
import LatestToughtsDialog from "../../components/admin/LatestToughtsDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';


const LatestToughtsList = () => {
  const [latestToughts, setLatestToughts] = useState([]);
  const [filters, setFilters] = useState({ title: ""});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedLatestTought, setSelectedLatestTough] = useState(null);
  const [paginationInfo, setPaginationInfo] = useState({ RowCount: 0 }); // Inițializează cu RowCount 0
  useEffect(() => {
    fetchLatestToughts();
  }, [page, rowsPerPage, filters]);

  const showLatestToughtInfo = (latestTought) => {
    setSelectedLatestTough(latestTought);
    setOpenDialog(true); 
  };

  const handleCloseDialog = () => {
    setSelectedLatestTough(null); 
    setOpenDialog(false);
  };

  const fetchLatestToughts = async () => {
    try {
      const formData = new FormData();
      formData.append("Filters_title", filters.title);
      formData.append("PaginationInfo_Page", page + 1);
      formData.append("PaginationInfo_RowsPerPage", rowsPerPage);
  
      const response = await axiosPost("/latestToughts/index", formData);

      setLatestToughts(response.latest_toughts || []);
      setPaginationInfo(response.PaginationInfo || {});
    } catch (error) {
      console.error("Error fetching latest toughts:", error);
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

  
  const deleteLatestTought = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this latest tought?");
    if (!confirmDelete) return;
  
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await axiosPost("/latestToughts/delete_latest_tought", formData);
  
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
          message: "The latest tought was deleted successfully.",
          severity: "success",
        });
        fetchLatestToughts();
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
        Latest toughts list
        <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => showLatestToughtInfo(null)}
            sx={{ marginLeft: 2 }}
            >Add latest tought</Button>
      </Typography>

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
              <TableCell>Category</TableCell>
              <TableCell>Date added</TableCell>
              <TableCell sx={{ textAlign: "right" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {latestToughts.map((latestTought) => (
              <TableRow key={latestTought.id}>
                <TableCell>{latestTought.title}</TableCell>
                <TableCell>{latestTought.category_name}</TableCell>
                <TableCell>{dayjs(latestTought.created_at).format("DD-MM-YYYY HH:mm:ss")}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                <Tooltip title="Edit latest tought">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      onClick={() => showLatestToughtInfo(latestTought)}
                      sx={{ marginRight: 1 }}
                    >
                      <EditIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete latest tought">
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => deleteLatestTought(latestTought.id)}
                    >
                    <DeleteIcon />
                    </Button>
                  </Tooltip>
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

        <LatestToughtsDialog
          open={openDialog}
          onClose={handleCloseDialog}
          latestTought={selectedLatestTought}
          onSaveSuccess={() => {
            setOpenDialog(false);
            fetchLatestToughts();
          }}
          setSnackbar={setSnackbar}
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

export default LatestToughtsList;