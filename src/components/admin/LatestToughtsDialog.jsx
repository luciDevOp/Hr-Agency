import React, { useEffect, useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem, FormControl, InputLabel, Select,
  
} from '@mui/material';
import { axiosPost } from "../../utils/api";

export default function LatestThoughtsDialog({ open, onClose, onSaveSuccess, setSnackbar, latestTought }) {
    const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    description: '',
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        var formData = new FormData();
        formData.append("type", "latest_toughts");
        const response = await axiosPost("/posts/fetchCategories", formData);
        setCategories(response.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (open) {
      if (latestTought) {
        setFormData({
          id: latestTought.id || '',
          title: latestTought.title || '',
          category_id: latestTought.category_id || '',
          description: latestTought.description || '',
        });
      } else {
        setFormData({
          title: '',
          category_id: '',
          description: '',
        });
      }
    }
  }, [latestTought, open]); // ← Add `open` here
  

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axiosPost("/latestToughts/save", formData);
      if (!response.Error) {
        if (onSaveSuccess) onSaveSuccess();
        setSnackbar({ open: true, message: "Thought saved successfully.", severity: "success" });
        onClose();
      } else {
        setSnackbar({ open: true, message: "Failed to save thought.", severity: "error" });
      }
    } catch (error) {
      console.error("Error saving thought:", error);
      setSnackbar({ open: true, message: "Error saving thought.", severity: "error" });
    }
  };

  const handleCancel = () => onClose();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Create Latest Thought</DialogTitle>
      <DialogContent dividers>
        <TextField
          margin="normal" fullWidth label="Title"
          value={formData.title} onChange={(e) => handleChange('title', e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category_id}
            label="Category"
            onChange={(e) => handleChange('category_id', e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal" fullWidth multiline minRows={4} label="Description"
          value={formData.description} onChange={(e) => handleChange('description', e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
