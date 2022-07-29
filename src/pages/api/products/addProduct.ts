import type { User } from '@prisma/client'
import prisma from '@utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'

import { validateRoute } from '../../../../lib/auth'

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: User) => {
    const company = await prisma.company.findUnique({
      where: {
        userId: user.id,
      },
    })
    const {
      name,
      description,
      price,
    }: {
      price: number
      name: string
      description: string
    } = req.body
    try {
      // TODO THIS DOESNT WORK FIX
      const updatedCompany = await prisma.company.update({
        where: {
          id: company?.id,
        },
        data: {
          Product: {
            create: {
              description,
              name,
              price: Number(price),
            },
          },
        },
      })

      res.status(201).json({ updatedCompany })
    } catch (e) {
      res.status(401).json({ error: e })
    }
  }
)
