import { PrismaClient } from "@prisma/client"

export interface Context {
  prisma: PrismaClient
}

const context = {
  prisma: new PrismaClient()
}

export default context