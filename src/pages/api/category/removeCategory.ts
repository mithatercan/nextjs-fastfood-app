import prisma from '@utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'

import { validateRoute } from '../../../../lib/auth'

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const removedMenu = await prisma.category.delete({
        where: {
          id: req.body.id as number,
        },
      })
      res.status(200).json({ removedMenu })
    } catch (e) {
      res.status(401).json(e)
    }
  }
)
