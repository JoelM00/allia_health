// src/middlewares/validateZod.ts
import { Request, Response, NextFunction } from 'express'
import { ZodObject } from 'zod'

export const validateZod = (schema: ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (err: any) {
      return res.status(400).json({
        success: false,
        errors: err.errors,
      })
    }
  }
}
