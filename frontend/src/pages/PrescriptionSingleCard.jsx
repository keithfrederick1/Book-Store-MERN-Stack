import React from 'react'
import Header from '../components/Header/Header'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  ); 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1080,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const PrescriptionSingleCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      Prescription Single Card
      <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography>Review Prescription</Typography>
            <div style={{ position: 'relative', display: 'flex' , justifyContent: 'space-between'}}>
                <Typography variant="h5" component="h3">
                    Patient Name
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Typography variant="h6" component="h3">
                            Patient Sex {bull} DOB
                        </Typography>
                        <Typography variant="h6" component="h3">
                            Patient Address
                        </Typography>
                        <Typography variant="h6" component="h3">
                            Patient Phone
                        </Typography>
                    </div>
                </Typography>
            </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Pharmacy Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Provider Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Card sx={{ minWidth: 275, backgroundColor: "#d4d4d4" }}>
             <CardContent>
                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Prescription
                </Typography>
                <Typography variant="h5" component="div">
                     be{bull}nev{bull}o{bull}lent
                </Typography>
             <Typography sx={{ mb: 1.5 }} color="text.secondary">
                 adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
             </CardActions>
            </Card>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Prev + Last injection + stop Medication on date
          </Typography>
          <Button>Save Pending Rx</Button>
          <Button>Back</Button>
          <Button>Cancel</Button>
          <Typography>Signature Password</Typography>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button>Send</Button>
          <Button>Send & Print</Button>
          <Button>Print w/o sending</Button>
          <Button>Sign w/o sending</Button>
        </Box>
      </Modal>
    </div>
    </div>
  )
}

export default PrescriptionSingleCard
