import { Notes } from '@prisma/client'
import { prisma } from '../config/database'
import { BadRequestError } from '../errors/bad-request.error'

export class NoteService {
  async createNote(
    patientId: string,
    name: string,
    dosage: number,
    frequency: number,
    duration: string,
    instructions: string,
  ): Promise<Notes> {
    return prisma.notes.create({
      data: { patientId, name, dosage, frequency, duration, instructions },
    })
  }

  async getNotesByPatient(patientId: string): Promise<Notes[]> {
    return prisma.notes.findMany({
      where: { patientId },
      orderBy: { idnotes: 'desc' },
    })
  }

  async getNoteById(id: string): Promise<Notes> {
    const note = await prisma.notes.findUnique({ where: { idnotes: id } })
    if (!note) throw new BadRequestError('Note not found')
    return note
  }

  async updateNote(
    id: string,
    name?: string,
    dosage?: number,
    frequency?: number,
    duration?: string,
    instructions?: string,
  ): Promise<Notes> {
    
    return prisma.notes.update({
      where: { idnotes: id },
      data: { name, dosage, frequency, duration, instructions },
    })
  }

  async deleteNote(id: string): Promise<void> {
    await prisma.notes.delete({ where: { idnotes: id } })
  }
}
