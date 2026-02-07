import { Router, Request, Response } from 'express'
import { PatientRoutes } from './patient.route'
import { NoteRoutes } from './note.route'

export class AppRoutes {
  public router: Router

  constructor() {
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    // Health check
    this.router.get('/health', (req: Request, res: Response) => {
      res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      })
    })

    // API version info
    this.router.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'Chat API v1.0',
        documentation: '/api/docs',
        endpoints: {
          patients: '/api/patients',
          notes: '/api/notes',
        },
      })
    })

    // Mount entity routes
    this.router.use('/patients', new PatientRoutes().router)
    this.router.use('/notes', new NoteRoutes().router)
  }
}
