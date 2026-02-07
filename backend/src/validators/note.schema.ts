import { z } from 'zod'

export const createNoteSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    dosage: z.number().int().positive('Dosage must be a positive integer'),
    frequency: z
      .number()
      .int()
      .positive('Frequency must be a positive integer'),
    duration: z.string().min(1, 'Duration is required'),
    instructions: z.string().min(1, 'Instructions are required'),
  }),
})

export const updateNoteSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    dosage: z.number().int().positive().optional(),
    frequency: z.number().int().positive().optional(),
    duration: z.string().min(1).optional(),
    instructions: z.string().min(1).optional(),
  }),
})

export const noteIdParamSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid noteId'),
  }),
})
