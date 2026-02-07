import React from 'react'
import { Stack, Card, CardContent, Typography, Button } from '@mui/material'
import type { Patient } from '../../types/patient'

interface Props {
  patients: Patient[]
  onSelect: (id: string) => void
}

export const PatientList: React.FC<Props> = ({ patients, onSelect }) => {
  return (
    <Stack spacing={2}>
      {patients.map((p) => (
        <Card key={p.id} variant="outlined">
          <CardContent>
            <Typography variant="h6">{p.name}</Typography>
            <Typography>Age: {p.age}</Typography>
            <Typography>Weight: {p.weight}</Typography>
            <Typography>Gender: {p.gener}</Typography>
            <Button variant="outlined" onClick={() => onSelect(p.id!)}>
              View Notes
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}
