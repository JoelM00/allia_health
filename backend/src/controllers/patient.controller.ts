import { Request, Response } from 'express'
import { PatientService } from '../services/patient.service'
import { NotFoundError } from '../errors/not-found.error'
import { BadRequestError } from '../errors/bad-request.error'

export class PatientController {
  private patientService = new PatientService()

  createPatient = async (req: Request, res: Response) => {
    try {
      const { name, age, weight, gender } = req.body

      const patient = await this.patientService.createPatient(
        name,
        age,
        weight,
        gender,
      )

      res.status(201).json({ success: true, data: patient })
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message })
    }
  }

  getAllPatients = async (_req: Request, res: Response) => {
    try {
      const patients = await this.patientService.getAllPatients()
      res.json({ success: true, data: patients })
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  getPatientById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      const patient = await this.patientService.getPatientById(id)

      if (!patient) {
        throw new BadRequestError('Patient does not exist')
      }

      res.json({ success: true, data: patient })
    } catch (error: any) {
      res.status(404).json({ success: false, error: error.message })
    }
  }

  updatePatient = async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const { name, age, weight, gender } = req.body

      const patient = await this.patientService.updatePatient(
        id,
        name,
        age,
        weight,
        gender,
      )

      res.json({ success: true, data: patient })
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message })
    }
  }

  deletePatient = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      await this.patientService.deletePatient(id)

      res.json({ success: true, message: 'Patient deleted successfully' })
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message })
    }
  }
}
