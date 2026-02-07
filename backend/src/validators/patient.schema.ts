import { z } from 'zod'

export const createPatientSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    age: z.number().int().positive().optional(),
    weight: z.number().positive().optional(),
    gener: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  }),
})

export const updatePatientSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    age: z.number().int().positive().optional(),
    weight: z.number().positive().optional(),
    gener: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
  }),
})

export const patientIdParamSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid patientId'),
  }),
})
