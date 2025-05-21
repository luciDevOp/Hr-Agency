import React, { useEffect, useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, MenuItem, FormControl, InputLabel, Select
} from '@mui/material';
import { axiosPost } from "../../utils/api";

export default function CategoryDialog({ open, onClose, onSaveSuccess, setSnackbar, category }) {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
    });

    useEffect(() => {
        if (category) {
          setFormData({
            id: category.id || '',
            name: category.name || '',
            type: category.type || '', 
          });
        } else {
          setFormData({
            name: '',
            type: '',
          });
        }
      }, [category]);
      

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await axiosPost("/categories/save", formData);
      if (!response.Error) {
        if (onSaveSuccess) onSaveSuccess();
        setSnackbar({ open: true, message: "Category saved successfully.", severity: "success" });
        onClose();
      } else {
        setSnackbar({ open: true, message: "Failed to save category.", severity: "error" });
      }
    } catch (error) {
      console.error("Error saving category:", error);
      setSnackbar({ open: true, message: "Error saving category.", severity: "error" });
    }
  };

  const handleCancel = () => onClose();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Create/Edit Category</DialogTitle>
      <DialogContent dividers>
        <TextField
            margin="normal"
            fullWidth
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
        />

        <FormControl fullWidth margin="normal">
            <InputLabel>Type</InputLabel>
            <Select
            value={formData.type}
            label="Type"
            onChange={(e) => handleChange('type', e.target.value)}
            >
            <MenuItem value="latest_toughts">Latest Toughts</MenuItem>
            <MenuItem value="posts">Posts</MenuItem>
            </Select>
        </FormControl>
        </DialogContent>


      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
