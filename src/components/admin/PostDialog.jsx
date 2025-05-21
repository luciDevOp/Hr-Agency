import React, { useEffect, useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem, FormControl, InputLabel, Select, Typography, IconButton,
} from '@mui/material';
import { axiosPost } from "../../utils/api";
import TiptapEditor from '../../components/admin/TiptapEditor';
import ImageCropper from '../../components/admin/ImageCropper';
import DeleteIcon from '@mui/icons-material/Delete';


export default function PostDialog({ open, onClose, onSaveSuccess, setSnackbar, post = null }) {
  const [postData, setPostData] = useState({
    id: '',
    title: '',
    description: '',
    category_id: '',
    page_content: '',
    card_photo: null,
    card_photo_url: '',
    page_photos: [], // holds both {id, url, file_name} and {file, previewUrl}
  });
  const [showCropper, setShowCropper] = useState(false);
  const [rawImage, setRawImage] = useState(null);
  const [categories, setCategories] = useState([]);
  

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const formData = new FormData();
          formData.append("type", "posts");
          const response = await axiosPost("/posts/fetchCategories", formData);
          setCategories(response.categories || []);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchCategories();
    }, []);

    useEffect(() => {
      const fetchPostDetails = async (id) => {
        try {
          const formData = new FormData();
          formData.append("id", id);
          const response = await axiosPost("/posts/get_post", formData);
          const postBackend = response.post;
    
          setPostData({
            id: postBackend.id,
            title: postBackend.title || '',
            description: postBackend.description || '',
            category_id: postBackend.category_id || '',
            page_content: postBackend.page_content || '',
            card_photo: null,
            card_photo_url: postBackend.card_photo_url || '',
            page_photos: postBackend.page_photos || [],
          });
        } catch (error) {
          console.error("Error fetching post data:", error);
        }
      };
    
      if (open) {
        if (post?.id) {
          fetchPostDetails(post.id);
        } else {
          // reset for new post
          setPostData({
            id: '',
            title: '',
            description: '',
            category_id: '',
            page_content: '',
            card_photo: null,
            card_photo_url: '',
            page_photos: [],
          });
        }
      }
    }, [post, open]); // ← Add `open` to dependencies
    

  const handleChange = (field, value) => {
    setPostData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e, field) => {
    const files = Array.from(e.target.files);
    if (field === "card_photo" && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setRawImage(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(files[0]);
    } else if (field === "page_photos") {
      const newPhotos = files.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
      }));
      handleChange('page_photos', [...postData.page_photos, ...newPhotos]);
    }
  };

  const handleCropComplete = (croppedBlob) => {
    const croppedFile = new File([croppedBlob], "cropped_image.jpg", { type: "image/jpeg" });
    const previewUrl = URL.createObjectURL(croppedFile);
    handleChange('card_photo', croppedFile);
    handleChange('card_photo_url', previewUrl);  // <--- Add this line

    setShowCropper(false);
    setRawImage(null);
  };

  const handleCropCancel = () => {
    setShowCropper(false);
    setRawImage(null);
  };

  const handleDeletePhoto = async (photo, type = 'page') => {
    if (type === 'card') {
      if (postData.card_photo) {
        // If there's a local file, just clear it
        setPostData((prev) => ({
          ...prev,
          card_photo: null,
          card_photo_url: '',
        }));
      } else if (postData.id) {
        try {
          const formData = new FormData();
          formData.append("post_id", postData.id);
          const response = await axiosPost("/posts/delete_card_photo", formData);
          if (response.Error) {
            setSnackbar({ open: true, message: "Error deleting card photo.", severity: "error" });
          } else {
            setSnackbar({ open: true, message: "Card photo deleted successfully.", severity: "success" });
            setPostData((prev) => ({
              ...prev,
              card_photo_url: '',
              card_photo: null,
            }));
          }
        } catch (error) {
          console.error("Error deleting card photo:", error);
        }
      }
    } else {
      // page photo logic
      if (photo.id) {
        try {
          const formData = new FormData();
          formData.append("id", photo.id);
          const response = await axiosPost("/posts/delete_photo", formData);
          if (response.Error) {
            setSnackbar({ open: true, message: "Error deleting photo.", severity: "error" });
          } else {
            setSnackbar({ open: true, message: "Photo deleted successfully.", severity: "success" });
            setPostData((prev) => ({
              ...prev,
              page_photos: prev.page_photos.filter((p) => p.id !== photo.id),
            }));
          }
        } catch (error) {
          console.error("Error deleting photo:", error);
        }
      } else {
        // local photo, just remove
        setPostData((prev) => ({
          ...prev,
          page_photos: prev.page_photos.filter((p) => p !== photo),
        }));
      }
    }
  };
  

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("id", postData.id);
      formData.append("title", postData.title);
      formData.append("description", postData.description);
      formData.append("category_id", postData.category_id);
      formData.append("page_content", postData.page_content);
      if (postData.card_photo) {
        formData.append("card_photo", postData.card_photo);
      }
      postData.page_photos.forEach((p, index) => {
        if (p.file) {
          formData.append(`page_photos[${index}]`, p.file);
        }
      });

      const response = await axiosPost("/posts/save", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.post) {
        if (onSaveSuccess) onSaveSuccess();
        setSnackbar({ open: true, message: "Post saved successfully.", severity: "success" });
        onClose();
      }
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const handleCancel = () => onClose();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{post?.id ? "Edit Post" : "Create New Post"}</DialogTitle>
      <DialogContent dividers>
        {showCropper && rawImage && (
          <ImageCropper image={rawImage} onComplete={handleCropComplete} onCancel={handleCropCancel} />
        )}

        <TextField
          margin="normal" fullWidth label="Title"
          value={postData.title} onChange={(e) => handleChange('title', e.target.value)}
        />
        <TextField
          margin="normal" fullWidth multiline label="Description"
          value={postData.description} onChange={(e) => handleChange('description', e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            value={postData.category_id}
            label="Category"
            onChange={(e) => handleChange('category_id', e.target.value)}
          >
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
              ))}
          </Select>
        </FormControl>

        {/* Card Photo Upload */}
        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1" gutterBottom>Card Photo</Typography>
          <Button variant="contained" component="label">
            Upload Card Photo
            <input hidden type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'card_photo')} />
          </Button>
        </div>
        {postData.card_photo_url && (
          <div style={{ marginTop: 10, position: 'relative', width: 'fit-content' }}>
            <img
              src={postData.card_photo_url} alt="Card"
              style={{ width: 200, height: 120, objectFit: 'cover', borderRadius: 4, boxShadow: '0 0 4px rgba(0,0,0,0.2)' }}
            />
            <IconButton
              size="small"
              onClick={() => handleDeletePhoto(null, 'card')}
              style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.7)' }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        )}

        {/* Page Photos Upload */}
        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1" gutterBottom>Page Photos</Typography>
          <Button variant="contained" component="label">
            Upload Page Photos
            <input hidden type="file" accept="image/*" multiple onChange={(e) => handleFileChange(e, 'page_photos')} />
          </Button>
        </div>
        {postData.page_photos.length > 0 && (
          <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {postData.page_photos.map((photo, idx) => {
              const imageUrl = photo.url || photo.previewUrl;
              return (
                <div key={photo.id || idx} style={{ position: 'relative', width: 100, height: 100 }}>
                  <img
                    src={imageUrl} alt={`Page ${photo.id || idx}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4, boxShadow: '0 0 4px rgba(0,0,0,0.2)' }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => handleDeletePhoto(photo)}
                    style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.7)' }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              );
            })}
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1">Page Content</Typography>
          <TiptapEditor value={postData.page_content} onChange={(val) => handleChange('page_content', val)} />
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          {post?.id ? "Update" : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
