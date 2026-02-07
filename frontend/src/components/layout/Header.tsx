import React from 'react'
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Header: React.FC = () => {
  const navigate = useNavigate()

  return (
    <AppBar position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{ ':hover': { cursor: 'pointer' } }}
          onClick={() => navigate('/')}
        >
          <Typography variant="h5" component="h1">
            Patient Management App
          </Typography>
        </Box>

        <div>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/patients')}>
            Patients
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
