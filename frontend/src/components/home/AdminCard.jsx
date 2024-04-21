import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function AdminCard() {
    return (
      <div style={{ paddingBottom: '10px', height: '460px', width: '549px' }}>
        <Card sx={{ height: '100%', backgroundColor: 'lightgrey', color: 'black' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Administrators
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
  