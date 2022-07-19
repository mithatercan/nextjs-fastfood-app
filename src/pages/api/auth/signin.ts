import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookie from 'cookie'
import prisma from '@utils/db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body

  const foundUser = await prisma.user.findUnique({
    where: {
      username: username,
    },
  })

  if (foundUser && bcrypt.compareSync(password, foundUser?.password)) {
    const token = jwt.sign(foundUser, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    })

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('ACCESS_TOKEN', token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
      })
    )

    return res.status(200).json({ ...foundUser })
  }

  return res.status(200).send({ msg: 'Invalid credentials!' })
}
