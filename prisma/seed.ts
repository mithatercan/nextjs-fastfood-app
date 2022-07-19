import type { Prisma } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.SellerCreateInput[] = [
  {
    name: 'George',
    company: 'Fried Fried',
    region: 'US',
    currency: 'dollar',
    menus: {
      create: [
        {
          name: 'big fried',
        },
      ],
    },
  },
]
