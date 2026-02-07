// src/components/atoms/ErrorMessage.tsx
import React from 'react'
import { Typography } from '@mui/material'

interface ErrorMessageProps {
  message: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Typography color="error" variant="body2" sx={{ mb: 1 }}>
      {message}
    </Typography>
  )
}
