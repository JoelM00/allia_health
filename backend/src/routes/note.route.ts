import { Router } from 'express'
import { requireAuth } from '../middlewares/auth'
import { validateZod } from '../middlewares/validate'
import {
  createPatientSchema,
  patientIdParamSchema,
  updatePatientSchema,
} from '../validators/patient.schema'
import { NoteController } from '../controllers/note.controller'
import {
  createNoteSchema,
  noteIdParamSchema,
  updateNoteSchema,
} from '../validators/note.schema'

export class NoteRoutes {
  public router: Router
  private controller: NoteController

  constructor() {
    this.router = Router()
    this.controller = new NoteController()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(
      '/patients/:id/notes',
      validateZod(patientIdParamSchema),
      validateZod(createNoteSchema),
      this.controller.createNote,
    )

    this.router.get(
      '/patients/:id/notes',
      validateZod(patientIdParamSchema),
      this.controller.getNotesByPatient,
    )

    this.router.get(
      '/:id',
      validateZod(noteIdParamSchema),
      this.controller.getNoteById,
    )

    this.router.put(
      '/:id',
      validateZod(noteIdParamSchema),
      validateZod(updateNoteSchema),
      this.controller.updateNote,
    )

    this.router.delete(
      '/:id',
      validateZod(noteIdParamSchema),
      this.controller.deleteNote,
    )
  }
}
