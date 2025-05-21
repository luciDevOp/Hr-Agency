import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const VacanciesDialog = ({ job, open, onClose }) => {
  const navigate = useNavigate();

  if (!job) return null;

  const Apply = () => {
    navigate(`/send-cv/${job.id}`);
  };


  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{job.title}</DialogTitle>

      <DialogContent dividers>
        <Typography variant="body1" gutterBottom>
        {job.description.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
            &nbsp;&nbsp;{line}
            <br />
            </React.Fragment>
        ))}
        </Typography>


        {job.subtitles?.length > 0 && (
            <div style={{ marginTop: 16 }}>
                {job.subtitles.map((section, idx) => (
                <div key={idx} style={{ marginBottom: 16 }}>
                    <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold' }}>
                        {section.subtitle}
                    </Typography>
                    <List dense disablePadding>
                    {section.list.map((item, i) => (
                        <ListItem key={i} style={{ paddingTop: 2, paddingBottom: 2 }}>
                            <ListItemText
                                primary={`• ${item}`}
                                slotProps={{
                                    primary: {
                                        sx: {
                                            fontSize: '1rem',
                                        },
                                    },
                                }}
                            />
                        </ListItem>
                    ))}
                    </List>
                    <Divider sx={{ borderBottomWidth: 3, marginTop: '10px' }} />

                </div>
                ))}
            </div>
        )}
        <Typography variant="h5" gutterBottom>
            <strong>Contact: office@hha.ro</strong>
        </Typography>
      </DialogContent>

      <DialogActions>
      <Button
          onClick={Apply}
          variant="contained"
          sx={{
            backgroundColor: '#7947a2',
            color: '#fff', // text color
            '&:hover': {
              backgroundColor: '#6b3f90', // optional darker shade for hover
            },
          }}
        >
          Apply
        </Button>

      </DialogActions>
    </Dialog>
  );
};

export default VacanciesDialog;
