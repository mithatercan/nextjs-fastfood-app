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
    const { name, description }: { description: string; name: string } =
      req.body
    try {
      const createdCategory = await prisma.category.create({
        data: {
          name,
          description,
          Company: {
            connect: {
              id: company?.id,
            },
          },
        },
      })

      res.status(201).json({ createdCategory })
    } catch (e) {
      res.status(401).json({ error: 'error while trying to create company' })
    }
  }
)
