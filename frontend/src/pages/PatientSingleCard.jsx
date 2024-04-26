import React from 'react'
import Header from '../components/Header/Header'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px'
};

const PatientSingleCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      Patient Single Card
      <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Patient Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Patient sex
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Patient DOB
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Patient Address
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Patient Phone
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Provider Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Pharmacy Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Prescription Benefit
          </Typography>
          <Button>Show Details</Button>
          <Button>Delete Patient</Button>
          <Button>Edit Patient</Button>
          <Typography>Medications List</Typography>
        </Box>
      </Modal>
    </div>
    </div>
  )
}

export default PatientSingleCard
