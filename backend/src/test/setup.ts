import { prisma } from '../config/database'
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export const resetDatabase = async () => {
  await prisma.notes.deleteMany({})
  await prisma.patient.deleteMany({})
}

beforeAll(async () => {
  await prisma.notes.deleteMany({})
  await prisma.patient.deleteMany({})
})

afterAll(async () => {
  await prisma.notes.deleteMany({})
  await prisma.patient.deleteMany({})
  await prisma.$disconnect()
})
