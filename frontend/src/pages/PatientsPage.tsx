import React, { useEffect, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { PatientForm } from '../components/molecules/PatientForm'
import { PatientList } from '../components/organisms/PatientsList'
import { NoteForm } from '../components/molecules/NoteForm'
import { NoteList } from '../components/organisms/NoteList'
import type { Patient } from '../types/patient'
import type { Note } from '../types/note'
import { api } from '../api/axios'

export const PatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    null,
  )
  const [notes, setNotes] = useState<Note[]>([])

  const fetchPatients = async () => {
    const res = await api.get('/patients')
    setPatients(res.data.data)
  }

  const fetchNotes = async (patientId: string) => {
    const res = await api.get(`/patients/${patientId}/notes`)
    setNotes(res.data.data)
  }

  const handleSelectPatient = (id: string) => {
    setSelectedPatientId(id)
    fetchNotes(id)
  }

  const handleCreatePatient = async (data: Patient) => {
    await api.post('/patients', data)
    fetchPatients()
  }

  const handleCreateNote = async (data: Note) => {
    if (!selectedPatientId) return
    await api.post(`/patients/${selectedPatientId}/notes`, data)
    fetchNotes(selectedPatientId)
  }

  useEffect(() => {
    fetchPatients()
  }, [])

  return (
    <Stack spacing={4} padding={4}>
      <Typography variant="h4">Patients</Typography>
      <PatientForm onSubmit={handleCreatePatient} />
      <PatientList patients={patients} onSelect={handleSelectPatient} />

      {selectedPatientId && (
        <>
          <Typography variant="h4">Notes for selected patient</Typography>
          <NoteForm onSubmit={handleCreateNote} />
          <NoteList notes={notes} />
        </>
      )}
    </Stack>
  )
}
