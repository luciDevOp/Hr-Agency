import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  IconButton,
} from "@mui/material";
import { axiosPost } from "../../utils/api";
import CloseIcon from "@mui/icons-material/Close";

const JobDialog = ({ open, onClose, job }) => {
  const [jobData, setJobData] = useState({
    id: "",
    title: "",
    location: "",
    description: "",
    environment: "on site", // Default to on-site
    type: "full time", // Default to full-time
    subtitles: [],
  });

  useEffect(() => {
    if (job) {
      setJobData({
        id: job.id,
        title: job.title,
        location: job.location,
        description: job.description,
        environment: job.environment,
        type: job.type,
        subtitles: job.subtitles || [],
      });
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

  const handleSave = async () => {
    try {
      const response = await axiosPost("/jobs/save", jobData,{
        headers: {
          'Content-Type': 'application/json',  
        },
      });
      if (response.jobId) {
        // Handle success (e.g., close the dialog, refresh job list)
        onClose();
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
          <InputLabel>Environment</InputLabel>
          <Select
            name="environment"
            value={jobData.environment}
            onChange={handleInputChange}
          >
            <MenuItem value="on site">On Site</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="hybrid">Hybrid</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            value={jobData.type}
            onChange={handleInputChange}
          >
            <MenuItem value="full time">Full Time</MenuItem>
            <MenuItem value="part time">Part Time</MenuItem>
          </Select>
        </FormControl>

        <div>
          <h4>Job Details (Subtitles)</h4>
          {jobData.subtitles.map((subtitle, index) => (
            <div key={index} style={{ marginBottom: 16 }}>
              <TextField
                label="Subtitle"
                name="subtitle"
                value={subtitle.subtitle}
                onChange={(e) => handleSubtitlesChange(e, index)}
                fullWidth
                margin="normal"
              />
              {subtitle.list.map((listItem, listIndex) => (
                <TextField
                  key={listIndex}
                  label={`List Item ${listIndex + 1}`}
                  value={listItem}
                  onChange={(e) =>
                    handleListItemChange(index, listIndex, e.target.value)
                  }
                  fullWidth
                  margin="normal"
                />
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
    </Dialog>
  );
};

export default JobDialog;
