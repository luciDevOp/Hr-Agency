import React, { useState } from "react";
import { axiosPost } from "../../utils/api"; // adjust path based on location
import { useNavigate } from "react-router-dom";


import { TextField, Button, Box, Typography, Alert } from "@mui/material";



const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
  
      const response = await axiosPost("/admin/login", formData);
      

      console.log(response);  
      if (!response.Error) {
        setSuccess("Login successful!");
        // Redirect to admin dashboard
        localStorage.setItem("Token", response.Token);
        console.log(response.Token);
        navigate("/admin6769/dashboard");
      } else {
        setError(response.MesajEroare || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#7947a2", "&:hover": { backgroundColor: "#6a3d8e" } }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AdminLogin;