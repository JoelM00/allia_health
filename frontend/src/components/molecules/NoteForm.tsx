import React, { useState } from 'react'
import { Button, Stack, TextField } from '@mui/material'
import type { Note } from '../../types/note'

interface Props {
  onSubmit: (note: Note) => void
}

export const NoteForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [dosage, setDosage] = useState(0)
  const [frequency, setFrequency] = useState(0)
  const [duration, setDuration] = useState('')
  const [instructions, setInstructions] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, dosage, frequency, duration, instructions })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Medication Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Dosage"
          type="number"
          value={dosage}
          onChange={(e) => setDosage(Number(e.target.value))}
        />
        <TextField
          label="Frequency"
          type="number"
          value={frequency}
          onChange={(e) => setFrequency(Number(e.target.value))}
        />
        <TextField
          label="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <TextField
          label="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Add Note
        </Button>
      </Stack>
    </form>
  )
}
