import express, { Application } from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { AppRoutes } from './routes'
import { Database } from './config/database'
import { errorHandler } from './middlewares/error'

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
dotenv.config({ path: envFile })

export class App {
  private app: Application
  private server: any
  private port: number

  constructor() {
    this.app = express()
    this.server = createServer(this.app)

    this.port = parseInt(process.env.PORT || '3000')

    this.initializeMiddleware()
    this.initializeRoutes()
  }

  private initializeMiddleware(): void {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
  }

  private initializeRoutes(): void {
    const routes = new AppRoutes()
    this.app.use('/api', routes.router)

    this.app.get('/health', (req, res) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() })
    })

    this.app.use(errorHandler)
  }

  public async start(): Promise<void> {
    await Database.connect()

    this.server.listen(this.port, () => {
      console.log(`🚀 Server running on port ${this.port}`)
    })
  }

  public async stop(): Promise<void> {
    await Database.disconnect()
    this.server.close()
  }

  public getExpressApp() {
    return this.app
  }
}
