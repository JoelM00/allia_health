import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { PatientForm } from '../components/molecules/PatientForm'
import { NoteForm } from '../components/molecules/NoteForm'
import { NoteList } from '../components/organisms/NoteList'
import type { Patient } from '../types/patient'
import type { Note } from '../types/note'
import { api } from '../api/axios'
import toast from 'react-hot-toast'
import { PatientList } from '../components/organisms/PatientList'

export const PatientsPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([])
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    null,
  )
  const [notes, setNotes] = useState<Note[]>([])

  // Fetch all patients
  const fetchPatients = async () => {
    try {
      const res = await api.get('/patients')
      setPatients(res.data.data)
    } catch (err: any) {
      toast.error(
        err.response?.data?.errors?.[0]?.message || 'Failed to fetch patients',
      )
    }
  }

  // Fetch notes for a specific patient
  const fetchNotes = async (patientId: string) => {
    try {
      const res = await api.get(`/notes/patients/${patientId}/notes`)
      setNotes(res.data.data)
    } catch (err: any) {
      toast.error(
        err.response?.data?.errors?.[0]?.message || 'Failed to fetch notes',
      )
    }
  }

  const handleSelectPatient = (id: string) => {
    setSelectedPatientId(id)
    fetchNotes(id)
  }

  const handleCreatePatient = async (data: Patient) => {
    try {
      await api.post('/patients', data)
      fetchPatients()
      toast.success('Patient created successfully')
    } catch (err: any) {
      toast.error(
        err.response?.data?.errors?.[0]
          ? `${err.response?.data?.errors?.[0]?.attribute}: ${err.response?.data?.errors?.[0]?.message}`
          : 'Failed to create patient',
      )
    }
  }

  const handleCreateNote = async (data: Note) => {
    if (!selectedPatientId) return
    try {
      await api.post(`/notes/patients/${selectedPatientId}/notes`, data)
      fetchNotes(selectedPatientId)
      toast.success('Note created successfully')
    } catch (err: any) {
      toast.error(
        err.response?.data?.errors?.[0]?.message || 'Failed to create note',
      )
    }
  }

  useEffect(() => {
    fetchPatients()
  }, [])

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Patients Dashboard
      </Typography>

      <Box sx={{ display: 'flex', gap: 4 }}>
        {/* Column 1: Patient Form */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Add Patient
          </Typography>
          <PatientForm onSubmit={handleCreatePatient} />
        </Box>

        {/* Column 2: Patient List */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Patient List
          </Typography>
          <PatientList
            patients={patients}
            selectedPatientId={selectedPatientId}
            onSelect={handleSelectPatient}
          />
        </Box>

        {/* Column 3: Note Form */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Add Note
          </Typography>
          {selectedPatientId ? (
            <NoteForm onSubmit={handleCreateNote} />
          ) : (
            <Typography>Select a patient to add notes</Typography>
          )}
        </Box>

        {/* Column 4: Note List */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Notes
          </Typography>
          {selectedPatientId ? (
            <NoteList notes={notes} />
          ) : (
            <Typography>Select a patient to view notes</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}
