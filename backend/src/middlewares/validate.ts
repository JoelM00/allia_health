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
      const messages = JSON.parse(err)?.map((e: any) => ({
        attribute: e.path.at(-1) ?? null,
        message: e.message,
      }))

      return res.status(400).json({
        success: false,
        errors: messages,
      })
    }
  }
}
