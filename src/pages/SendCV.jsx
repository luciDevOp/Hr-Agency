import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, FormControlLabel, Checkbox, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';

const SendCV = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    current_employer: "",
    current_job_title: "",
    additional_information: "",
    recommended_by: "",
    cv_file: null,
    gdpr_consent: false,
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" }); // Snackbar state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, gdpr_consent: e.target.checked });
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone_number: value });
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, cv_file: file });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if GDPR consent is given
    if (!formData.gdpr_consent) {
      setSnackbar({ open: true, message: "You must give your consent to proceed.", severity: "error" });
      return;
    }

    // Check if CV file is uploaded
    if (!formData.cv_file) {
      setSnackbar({ open: true, message: "You must upload your CV.", severity: "error" });
      return;
    }

    const data = new FormData();
    data.append("firstname", formData.firstname);
    data.append("lastname", formData.lastname);
    data.append("email", formData.email);
    data.append("phone_number", formData.phone_number);
    data.append("current_employer", formData.current_employer);
    data.append("current_job_title", formData.current_job_title);
    data.append("additional_information", formData.additional_information);
    data.append("recommended_by", formData.recommended_by);
    data.append("cv_file", formData.cv_file);

    try {
      const response = await axios.post("http://localhost:8080/candidate/save", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "success") {
        setSnackbar({ open: true, message: "Your CV has been submitted successfully!", severity: "success" });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone_number: "",
          current_employer: "",
          current_job_title: "",
          additional_information: "",
          recommended_by: "",
          cv_file: null,
          gdpr_consent: false,
        });
      } else if (response.data.status === "error") {
        const errorMessages = Object.values(response.data.errors)
        .join(", ")
        .replace(/_/g, " ")
        .replace(/^\w/, (char) => char.toUpperCase());
        setSnackbar({ open: true, message: errorMessages, severity: "error" });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.response?.data?.message || "An error occurred. Please try again.",
        severity: "error",
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        minHeight: "90vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Submit Your CV
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Firstname"
                name="firstname"
                fullWidth
                margin="normal"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Your Lastname"
                name="lastname"
                fullWidth
                margin="normal"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box
                    sx={{
                    "& .PhoneInput": {
                        width: "100%",
                        marginTop: "16px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        padding: "14px",
                        boxSizing: "border-box",
                        fontSize: "16px",
                        color: "#000",
                        backgroundColor: "#fff",
                        outline: "none",
                        "&:focus-within": {
                        borderColor: "#3f51b5", 
                        boxShadow: "0 0 0 2px rgba(63, 81, 181, 0.2)",
                        },
                    },
                    "& .PhoneInputInput": {
                        border: "none",
                        outline: "none",
                        fontSize: "16px",
                        width: "100%",
                    },
                    }}
                >
                    <PhoneInput
                    international
                    defaultCountry="US"
                    value={formData.phone_number}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number"
                    className="PhoneInput"
                    />
                </Box>
                </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Current Employer"
                name="current_employer"
                fullWidth
                margin="normal"
                value={formData.current_employer}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Current Job Title"
                name="current_job_title"
                fullWidth
                margin="normal"
                value={formData.current_job_title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Additional Information"
                name="additional_information"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={formData.additional_information}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Recommended By"
                name="recommended_by"
                fullWidth
                margin="normal"
                value={formData.recommended_by}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{
                    mt: 2,
                    backgroundColor: "#7947a2",
                    "&:hover": { backgroundColor: "#6a3d8e" },
                    }}
                >
                    Upload CV (PDF, DOC, DOCX, JPG, PNG)
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>
                {formData.cv_file && (
                    <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                    Uploaded File: {formData.cv_file.name}
                    </Typography>
                )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.gdpr_consent}
                    onChange={handleCheckboxChange}
                    name="gdpr_consent"
                    required
                  />
                }
                label="I give my consent for my data to be processed in accordance with GDPR."
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#4caf50",
                  "&:hover": { backgroundColor: "#388e3c" },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: "100%", marginTop: 8 }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SendCV;