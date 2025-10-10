import './App.css'
import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className="container">
      <AppBar
        position="static"
        sx={{
          background: '#2c2c54',
          width: '900px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Toolbar>
          {' '}
          <Typography>My first UI App</Typography>
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 5,
        }}
      >
        <Typography sx={{ mb: 10, fontSize: 25, color: '#CAD3C8' }}>
          Welcome
        </Typography>
        <Button variant="contained" color="#303952" onClick={handleOpen}>
          OpenWindow
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ background: '#778beb' }}>Hallo </DialogTitle>
          <DialogContent sx={{ background: '#778beb' }}>
            <DialogContentText>You're on the right track</DialogContentText>
          </DialogContent>
          <DialogActions sx={{ background: '#778beb' }}>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  )
}

export default App
