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
import CategoryDialog from "../../components/admin/CategoryDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';


const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ name: ""});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [paginationInfo, setPaginationInfo] = useState({ RowCount: 0 }); // Inițializează cu RowCount 0
  useEffect(() => {
    fetchCategories();
  }, [page, rowsPerPage, filters]);

  const showCategoryInfo = (category) => {
    setSelectedCategory(category);
    setOpenDialog(true); 
  };

  const handleCloseDialog = () => {
    setSelectedCategory(null); 
    setOpenDialog(false);
  };

  const fetchCategories = async () => {
    try {
      const formData = new FormData();
      formData.append("Filters_name", filters.name);
      formData.append("PaginationInfo_Page", page + 1);
      formData.append("PaginationInfo_RowsPerPage", rowsPerPage);
  
      const response = await axiosPost("/categories/index", formData);

      setCategories(response.categories || []);
      setPaginationInfo(response.PaginationInfo || {});
    } catch (error) {
      console.error("Error fetching categories", error);
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

  
  const deleteCategory = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (!confirmDelete) return;
  
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await axiosPost("/categories/delete_category", formData);
  
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
          message: "The category was deleted successfully.",
          severity: "success",
        });
        fetchCategories();
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
        Categories list
        <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => showCategoryInfo(null)}
            sx={{ marginLeft: 2 }}
            >Add category</Button>
      </Typography>

      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Filter by name"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          fullWidth
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell sx={{ textAlign: "right" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.type}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                <Tooltip title="Edit category">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      onClick={() => showCategoryInfo(category)}
                      sx={{ marginRight: 1 }}
                    >
                      <EditIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete category">
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => deleteCategory(category.id)}
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

        <CategoryDialog
          open={openDialog}
          onClose={handleCloseDialog}
          category={selectedCategory}
          onSaveSuccess={() => {
            setOpenDialog(false);
            fetchCategories();
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

export default CategoriesList;