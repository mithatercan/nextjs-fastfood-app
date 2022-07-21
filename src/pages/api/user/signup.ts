import bcrypt from 'bcrypt'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../../../lib/prisma'

const signup: (
	req: NextApiRequest,
	res: NextApiResponse
) => Promise<void> = async (req: NextApiRequest, res: NextApiResponse) => {
	const salt = bcrypt.genSaltSync(10)
	const { email, password } = req.body
	let seller
	try {
		seller = await prisma.seller.create({
			data: {
				email,
				password: bcrypt.hashSync(password, salt),
        company: "ls",
        currency:"us",
        username: "qwke",
        region: "aws"
			}
		})
	} catch (e) {
		res.status(401).json({ error: 'user already exixst' })
		return
	}
	const token = jwt.sign(
		{
			email: seller.email,
			id: seller.id,
			time: Date.now()
		},
		process.env.SECRET_KEY as string,
		{ expiresIn: '8h' }
	)
	res.setHeader(
		'Set-cookie',
		cookie.serialize('ACCESS_TOKEN', token, {
			httpOnly: true,
			maxAge: 8 * 60 * 60,
			path: '/',
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production'
		})
	)
	res.json(seller)
}
export default signup
