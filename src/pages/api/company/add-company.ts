import type { User } from '@prisma/client'
import prisma from '@utils/db'
import bcrypt from 'bcrypt'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import { validateRoute } from '../../../../lib/auth'

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user: User) => {
    const { region, currency, products } = req.body
  }
)
