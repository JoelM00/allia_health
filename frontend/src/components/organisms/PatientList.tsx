import React from 'react'
import { Stack, Card, CardContent, Typography, Button } from '@mui/material'
import type { Patient } from '../../types/patient'

interface Props {
  patients: Patient[]
  selectedPatientId: string | null
  onSelect: (id: string) => void
}

export const PatientList: React.FC<Props> = ({
  patients,
  selectedPatientId,
  onSelect,
}) => {
  return (
    <Stack spacing={2}>
      {patients.map((p) => {
        const isSelected = selectedPatientId === p.id
        return (
          <Card
            key={p.id}
            variant="outlined"
            sx={{
              borderColor: isSelected ? 'primary.main' : 'grey.300',
              backgroundColor: isSelected ? 'lightgray' : 'background.paper',
              transition: '0.2s',
            }}
          >
            <CardContent>
              <Typography variant="h6">{p.name}</Typography>
              <Typography>Age: {p.age}</Typography>
              <Typography>Weight: {p.weight}</Typography>
              <Typography>Gender: {p.gender}</Typography>
              <Button
                variant={isSelected ? 'outlined' : 'contained'}
                onClick={() => onSelect(p.id!)}
                sx={{ mt: 1 }}
              >
                View Notes
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </Stack>
  )
}
