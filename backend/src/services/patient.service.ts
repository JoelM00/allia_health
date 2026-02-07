import { Patient } from '@prisma/client'
import { prisma } from '../config/database'
import { BadRequestError } from '../errors/bad-request.error'

export class PatientService {
  async createPatient(
    name: string,
    age: number,
    weight: number,
    gener: 'MALE' | 'FEMALE' | 'OTHER',
  ): Promise<Patient> {
    return prisma.patient.create({
      data: { name, age, weight, gener },
    })
  }

  async getAllPatients(): Promise<Patient[]> {
    return prisma.patient.findMany({
      include: { notes: true },
      orderBy: { id: 'desc' },
    })
  }

  async getPatientById(id: string): Promise<Patient | null> {
    return await prisma.patient.findUnique({
      where: { id },
      include: { notes: true },
    })
  }

  async updatePatient(
    id: string,
    name?: string,
    age?: number,
    weight?: number,
    gener?: 'MALE' | 'FEMALE' | 'OTHER',
  ): Promise<Patient> {
    return prisma.patient.update({
      where: { id },
      data: { name, age, weight, gener },
    })
  }

  async deletePatient(id: string): Promise<void> {
    await prisma.patient.delete({ where: { id } })
  }
}
