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
    name: z.string().min(1),
    dosage: z.number().int().positive(),
    frequency: z.number().int().positive(),
    duration: z.string().min(1),
    instructions: z.string().min(1),
  }),
})

export const noteIdParamSchema = z.object({
  params: z.object({
    id: z.string().uuid('Invalid noteId'),
  }),
})
