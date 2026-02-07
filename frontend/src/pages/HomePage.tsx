import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const HomePage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Stack spacing={4} padding={4} alignItems="center" justifyContent="center">
      <Typography variant="h3">Welcome to Patient Management App</Typography>
      <Typography variant="body1">
        Manage patients and their medical notes easily.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/patients')}>
        Go to Patients
      </Button>
    </Stack>
  )
}
