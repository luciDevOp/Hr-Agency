import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import dayjs from 'dayjs';

const CandidateModal = ({ open, onClose, candidate }) => {
  if (!candidate) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Detalii Candidat</DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography><strong>Nume: </strong> {candidate.firstname} {candidate.lastname}</Typography>
          <Typography><strong>Email: </strong> {candidate.email}</Typography>
          <Typography><strong>Telefon: </strong> {candidate.phone_number}</Typography>
          <Typography><strong>Recomandat de: </strong> 
            {candidate.recommended_by === null || candidate.recommended_by === ''  ? 'Nerecomandat' : candidate.recommended_by }
          </Typography>
          <Typography><strong>Titlu job actual: </strong>
             {candidate.current_job_title === null || candidate.current_job_title === ''  ? 'Neangajat' : candidate.current_job_title }
          </Typography>
          <Typography><strong>Angajat la: </strong> 
            {candidate.current_employer === null || candidate.current_employer === ''  ? 'Neangajat' : candidate.current_employer }
          </Typography>
          <Typography><strong>Informatii suplimentare:</strong> 
            {candidate.additional_information === null || candidate.additional_information === ''  ? 'Nesetat' : candidate.additional_information }
          </Typography>
          <Typography><strong>Data trimitere CV: </strong> 
          {!candidate.created_at
            ? "Nesetat"
            : dayjs(candidate.created_at).format("DD-MM-YYYY HH:mm:ss")}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Închide</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CandidateModal;
