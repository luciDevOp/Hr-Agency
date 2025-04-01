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
import PostDialog from "../../components/admin/PostDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@mui/icons-material/Close";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState({ title: ""});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); 
  const [paginationInfo, setPaginationInfo] = useState({ RowCount: 0 }); // Inițializează cu RowCount 0
  useEffect(() => {
    fetchPosts();
  }, [page, rowsPerPage, filters]);

  const showPostInfo = (job) => {
    setSelectedPost(job);
    setOpenDialog(true); 
  };

  const handleCloseDialog = () => {
    setSelectedPost(null); 
    setOpenDialog(false);
  };

  const fetchPosts = async () => {
    try {
      const formData = new FormData();
      formData.append("Filters_title", filters.title);
      formData.append("PaginationInfo_Page", page + 1);
      formData.append("PaginationInfo_RowsPerPage", rowsPerPage);
  
      const response = await axiosPost("/posts/index", formData);

      setPosts(response.posts || []);
      setPaginationInfo(response.PaginationInfo || {});
    } catch (error) {
      console.error("Error fetching posts:", error);
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
  
  const deletePost = async (id) => {
    const confirmDelete = window.confirm("Ești sigur că vrei să ștergi aceasta postare?");
    if (!confirmDelete) return;
  
    try {
      const formData = new FormData();
      formData.append("id", id);

      const response = await axiosPost("/posts/delete_post", formData);
  
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
          message: "Postarea a fost ștersa cu succes.",
          severity: "success",
        });
        fetchPosts();
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
        Posts List
        <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => showPostInfo(null)}
            sx={{ marginLeft: 2 }}
            >Add post</Button>
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
              <TableCell>Category</TableCell>
              <TableCell>Date added</TableCell>
              <TableCell sx={{ textAlign: "right" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.created_at}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                <Tooltip title="Edit post">
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      onClick={() => showPostInfo(post)}
                      sx={{ marginRight: 1 }}
                    >
                      <EditIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete post">
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => deletePost(post.id)}
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

        <PostDialog
            open={openDialog}
            onClose={handleCloseDialog}
            post={selectedPost}
            onSaveSuccess={fetchPosts}
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

export default PostList;