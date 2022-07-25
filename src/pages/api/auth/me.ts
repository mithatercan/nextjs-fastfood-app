import type { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import { validateRoute } from '../../../../lib/auth'

export default validateRoute(
  async (_req: NextApiRequest, res: NextApiResponse, user: User) => {
    res.status(201).json({ ...user })
  }
)
