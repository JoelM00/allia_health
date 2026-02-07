import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { NotAuthorizedError } from '../errors/not-authorized.error'

import { JwtPayload } from 'jsonwebtoken'

declare module 'express' {
  export interface Request {
    user?: JwtPayload & { userId: string }
  }
}

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) throw new NotAuthorizedError()

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as {
      userId: string
      email: string
    }

    req.user = decoded

    next()
  } catch (err) {
    next(new NotAuthorizedError())
  }
}
