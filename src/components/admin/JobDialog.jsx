import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { axiosPost } from "../../utils/api";
import CloseIcon from "@mui/icons-material/Close";

const JobDialog = ({ open, onClose, job, onSaveSuccess}) => {
  const [jobData, setJobData] = useState({
    id: "",
    title: "",
    location: "",
    description: "",
    environment: "on site", // Default to on-site
    type: "full time", // Default to full-time
    subtitles: [],
  });
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: '',
      severity: 'info', // 'success' | 'error' | 'warning' | 'info'
    });

  useEffect(() => {
    const fetchJobDetails = async (id) => {
      try {
        const formData = new FormData();
        formData.append("id", id);
        const response = await axiosPost("/jobs/get_job", formData); 
        var jobBackend = response.job;
        setJobData({
          id: jobBackend.id,
          title: jobBackend.title || "",
          location: jobBackend.location || "",
          description: jobBackend.description || "",
          environment: jobBackend.environment || "on site", // fallback
          type: jobBackend.type || "full time",             // fallback
          subtitles: jobBackend.subtitles || [],
        });
        
      } catch (error) {
        console.error("Eroare la preluarea datelor jobului:", error);
      }
    };
  
    if (job?.id) {
      fetchJobDetails(job.id);
    }
  }, [job]);
  

  // Handle input changes for text fields and the subtitles
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDeleteListItem = (subtitleIndex, listIndex) => {
    const updatedSubtitles = [...jobData.subtitles];
    updatedSubtitles[subtitleIndex].list.splice(listIndex, 1); // elimină itemul
    setJobData((prevState) => ({
      ...prevState,
      subtitles: updatedSubtitles,
    }));
  };

  const handleSubtitlesChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSubtitles = [...jobData.subtitles];
    updatedSubtitles[index] = {
      ...updatedSubtitles[index],
      [name]: value,
    };
    setJobData((prevState) => ({
      ...prevState,
      subtitles: updatedSubtitles,
    }));
  };

  const addSubtitle = () => {
    setJobData((prevState) => ({
      ...prevState,
      subtitles: [...prevState.subtitles, { subtitle: "", list: [] }],
    }));
  };

  const addListItem = (index) => {
    const updatedSubtitles = [...jobData.subtitles];
    updatedSubtitles[index].list.push(""); // Adds an empty string for a new text field
    setJobData((prevState) => ({
      ...prevState,
      subtitles: updatedSubtitles,
    }));
  };

  const handleListItemChange = (index, listIndex, value) => {
    const updatedSubtitles = [...jobData.subtitles];
    updatedSubtitles[index].list[listIndex] = value; // Updates the specific list item
    setJobData((prevState) => ({
      ...prevState,
      subtitles: updatedSubtitles,
    }));
  };
  const handleDeleteSubtitle = (index) => {
    const updatedSubtitles = [...jobData.subtitles];
    updatedSubtitles.splice(index, 1); // șterge subtitlul la indexul dat
    setJobData((prevState) => ({
      ...prevState,
      subtitles: updatedSubtitles,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axiosPost("/jobs/save", jobData,{
        headers: {
          'Content-Type': 'application/json',  
        },
      });
      if (response.Error) {
        // Notificare de eroare
        setSnackbar({
          open: true,
          message: response.MesajEroare || "A apărut o eroare.",
          severity: "error",
        });
      } else {
        // Notificare de succes
        if (response.jobId) {
          if (onSaveSuccess) {
            onSaveSuccess(); 
            setSnackbar({
              open: true,
              message: "Job-ul a fost salvat cu succes.",
              severity: "success",
            });
      
          }
          onClose();
        }
      }

    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  const handleClose = () => {
    setJobData({
      id: null,
      title: "",
      location: "",
      description: "",
      environment: "on site",
      type: "full time",
      subtitles: [],
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
        {jobData.id ? "Edit Job" : "Add Job"}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Job Title"
          name="title"
          value={jobData.title}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          name="location"
          value={jobData.location}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={jobData.description}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="environment-label">Environment</InputLabel>
          <Select
            labelId="environment-label"
            id="environment"
            name="environment"
            value={jobData.environment}
            onChange={handleInputChange}
            label="Environment"
          >
            <MenuItem value="on site">On Site</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="hybrid">Hybrid</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="type-label">Type</InputLabel>
          <Select
            labelId="type-label"
            id="type"
            name="type"
            value={jobData.type}
            onChange={handleInputChange}
            label="Type"
          >
            <MenuItem value="full time">Full Time</MenuItem>
            <MenuItem value="part time">Part Time</MenuItem>
          </Select>
        </FormControl>


        <div>
          <h4>Job Details (Subtitles)</h4>
          {jobData.subtitles.map((subtitle, index) => (
  <div
    key={index}
    style={{
      marginBottom: 24,
      padding: 12,
      border: "1px solid #ccc",
      borderRadius: 8,
      position: "relative",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <TextField
        label="Subtitle"
        name="subtitle"
        value={subtitle.subtitle}
        onChange={(e) => handleSubtitlesChange(e, index)}
        fullWidth
        margin="normal"
      />
      <IconButton
        onClick={() => handleDeleteSubtitle(index)}
        color="error"
        size="small"
        aria-label="delete subtitle"
        sx={{ marginTop: '8px' }}
      >
        <CloseIcon />
      </IconButton>
    </div>

    {subtitle.list.map((listItem, listIndex) => (
      <div
        key={listIndex}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <TextField
          label={`List Item ${listIndex + 1}`}
          value={listItem}
          onChange={(e) =>
            handleListItemChange(index, listIndex, e.target.value)
          }
          fullWidth
        />
        <IconButton
          onClick={() => handleDeleteListItem(index, listIndex)}
          color="error"
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </div>
    ))}

    <Button
      variant="outlined"
      color="primary"
      onClick={() => addListItem(index)}
      sx={{ marginTop: 2 }}
    >
      Add List Item
    </Button>
  </div>
))}

          <Button
            variant="outlined"
            color="primary"
            onClick={addSubtitle}
            sx={{ marginTop: 2 }}
          >
            Add Subtitle
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
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
};

export default JobDialog;
