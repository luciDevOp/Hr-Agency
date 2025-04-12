import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Snackbar,
  Typography,
  Alert,
} from '@mui/material';
import { axiosPost } from "../../utils/api";
import TiptapEditor from '../../components/admin/TiptapEditor';

const dummyCategories = [
  { id: '1', name: 'Event' },
  { id: '2', name: 'Presentation' },
];
  
export default function PostDialog({ open, onClose, onSaveSuccess, post = null }) {
  const [postData, setPostData] = useState({
    id: '',
    title: '',
    description: '',
    category_id: '',
    page_content: '',
    card_photo: null,
    page_photos: []
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info', // 'success' | 'error' | 'warning' | 'info'
  });

  useEffect(() => {
    const fetchPostDetails = async (id) => {
      try {
        const formData = new FormData();
        formData.append("id", id);
        const response = await axiosPost("/posts/get_post", formData);
        const postBackend = response.post;

        setPostData((prev) => ({
          ...prev,
          id: postBackend.id,
          title: postBackend.title || '',
          description: postBackend.description || '',
          category_id: postBackend.category_id || '',
          page_content: postBackend.page_content || '',
        }));
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    if (post?.id) {
      fetchPostDetails(post.id);
    } else {
      // Reset form for new post
      setPostData({
        id: '',
        title: '',
        description: '',
        category_id: '',
        page_content: '',
        card_photo: null,
        page_photos: []
      });
    }
  }, [post]);

  const handleChange = (field, value) => {
    setPostData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e, field) => {
    const files = e.target.files;
    if (field === "page_photos") {
      handleChange(field, Array.from(files)); // multiple files
    } else {
      handleChange(field, files[0]); // single file
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      Object.entries(postData).forEach(([key, value]) => {
        if (key === 'page_photos' && Array.isArray(value)) {
          value.forEach((file, index) => {
            formData.append(`page_photos[${index}]`, file);
          });
        } else if (value !== null) {
          formData.append(key, value);
        }
      });
      const response = await axiosPost("/posts/save", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.post) {
        if (onSaveSuccess) {
          onSaveSuccess(); 
          setSnackbar({
            open: true,
            message: "Postarea a fost salvata cu succes.",
            severity: "success",
          });
        }
        onClose();
      }
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{post?.id ? "Edit Post" : "Create New Post"}</DialogTitle>
      <DialogContent dividers>
        <TextField
          margin="normal"
          fullWidth
          label="Title"
          value={postData.title}
          onChange={(e) => handleChange('title', e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          multiline
          label="Description"
          value={postData.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            value={postData.category_id}
            label="Category"
            onChange={(e) => handleChange('category_id', e.target.value)}
          >
            {dummyCategories.map((cat, index) => (
              <MenuItem key={`${cat.id}-${index}`} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Card Photo Upload */}
        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1" gutterBottom>Card Photo</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'card_photo')}
          />
        </div>

        {/* Page Photos Upload */}
        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1" gutterBottom>Page Photos</Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, 'page_photos')}
          />
        </div>

        {/* WYSIWYG Editor */}
        <div style={{ marginTop: '20px' }}>
        <Typography variant="subtitle1" style={{ marginTop: 20 }}>Page Content</Typography>
          <TiptapEditor
            value={postData.page_content}
            onChange={(val) => handleChange('page_content', val)}
          />
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          {post?.id ? "Update" : "Save"}
        </Button>
      </DialogActions>
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
    </Dialog>
  );
}
