import React from 'react'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import type { Note } from '../../types/note'

interface Props {
  notes: Note[]
}

export const NoteList: React.FC<Props> = ({ notes }) => {
  return (
    <Stack spacing={2}>
      {notes.map((n) => (
        <Card key={n.id} variant="outlined">
          <CardContent>
            <Typography variant="h6">{n.name}</Typography>
            <Typography>Dosage: {n.dosage}</Typography>
            <Typography>Frequency: {n.frequency}</Typography>
            <Typography>Duration: {n.duration}</Typography>
            <Typography>Instructions: {n.instructions}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}
