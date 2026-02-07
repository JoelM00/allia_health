import { Router } from 'express'
import { PatientController } from '../controllers/patient.controller'
import { requireAuth } from '../middlewares/auth'
import { validateZod } from '../middlewares/validate'
import {
  createPatientSchema,
  patientIdParamSchema,
  updatePatientSchema,
} from '../validators/patient.schema'

export class PatientRoutes {
  public router: Router
  private controller: PatientController

  constructor() {
    this.router = Router()
    this.controller = new PatientController()
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(
      '/',
      validateZod(createPatientSchema),
      this.controller.createPatient,
    )
    this.router.get('/', this.controller.getAllPatients)
    this.router.get(
      '/:id',
      validateZod(patientIdParamSchema),
      this.controller.getPatientById,
    )
    this.router.put(
      '/:id',
      validateZod(updatePatientSchema),
      this.controller.updatePatient,
    )
    this.router.delete(
      '/:id',
      validateZod(patientIdParamSchema),
      this.controller.deletePatient,
    )
  }
}
