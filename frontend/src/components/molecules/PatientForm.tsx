import React, { useState } from 'react'
import { Button, Stack, TextField } from '@mui/material'
import type { Patient } from '../../types/patient'

interface Props {
  onSubmit: (patient: Patient) => void
}

export const PatientForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)
  const [gender, setgender] = useState('MALE')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, age, weight, gender })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <TextField
          label="Weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <TextField
          label="Gender"
          value={gender}
          onChange={(e) => setgender(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Create Patient
        </Button>
      </Stack>
    </form>
  )
}
