import { PrismaClient } from '@prisma/client'

export class Database {
  private static instance: PrismaClient

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!Database.instance) {
      Database.instance = new PrismaClient({
        log: ['error', 'warn'],
      })
    }
    return Database.instance
  }

  public static async connect(): Promise<void> {
    const client = Database.getInstance()
    try {
      await client.$connect()
      console.log(
        '✅ Database connection established: ',
        process.env.DATABASE_URL,
      )
    } catch (err) {
      console.error('❌ Database connection failed:', err)
      throw err
    }
  }

  public static async disconnect(): Promise<void> {
    if (Database.instance) {
      await Database.instance.$disconnect()
      console.log('🔌 Database disconnected')
    }
  }
}

export const prisma = Database.getInstance()
