import { Request, Response } from 'express'
import { NoteService } from '../services/note.service'

export class NoteController {
  private notesService = new NoteService()

  createNote = async (req: Request, res: Response) => {
    try {
      const { id: patientId } = req.params
      const { name, dosage, frequency, duration, instructions } = req.body

      const note = await this.notesService.createNote(
        patientId,
        name,
        dosage,
        frequency,
        duration,
        instructions,
      )

      res.status(201).json({ success: true, data: note })
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message })
    }
  }

  getNotesByPatient = async (req: Request, res: Response) => {
    try {
      const { id: patientId } = req.params

      const notes = await this.notesService.getNotesByPatient(patientId)

      res.json({ success: true, data: notes })
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  getNoteById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      console.log('NOTE: ', id)

      const note = await this.notesService.getNoteById(id)

      res.json({ success: true, data: note })
    } catch (error: any) {
      res.status(404).json({ success: false, error: error.message })
    }
  }

  updateNote = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const { name, dosage, frequency, duration, instructions } = req.body

      const note = await this.notesService.updateNote(
        id,
        name,
        dosage,
        frequency,
        duration,
        instructions,
      )

      res.json({ success: true, data: note })
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message })
    }
  }

  deleteNote = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      await this.notesService.deleteNote(id)

      res.json({ success: true, message: 'Note deleted successfully' })
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message })
    }
  }
}
