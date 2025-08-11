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
  IconButton,
} from "@mui/material";
import { axiosPost } from "../../utils/api";
import CloseIcon from "@mui/icons-material/Close";

const JobDialogObservations = ({ open, onClose, job, onSaveSuccess}) => {
  const [jobData, setJobData] = useState({
    id: "",
    observations: "",
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
        const response = await axiosPost("/jobs/get_job_observations", formData); 

        var id = response.id || "";
        var observations = response.observations || "";
        setJobData({
          id: id,
          observations: observations || ""
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



  const handleSave = async () => {
    try {

        const formData = new FormData();
        formData.append("id", jobData.id);
        formData.append("observations", jobData.observations);
        const response = await axiosPost("/jobs/save_observations", formData); 

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
              message: "Observations saved successfully.",
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
        observations: "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
        {jobData.id ? "Edit Job Observations" : "Add Job Observations"}
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
          label="Observations"
          name="observations"
          value={jobData.observations}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          multiline
          minRows={4} 
        />
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

export default JobDialogObservations;
