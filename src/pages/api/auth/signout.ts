import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function signout(req: NextApiRequest, res: NextApiResponse) {
	if (req.headers.ACCESS_TOKEN) {
		res.status(200).setHeader(
			'Set-Cookie',
			cookie.serialize('ACCESS_TOKEN', '', {
				httpOnly: true,
				maxAge: 8 * 60 * 60
			})
		)
	}
	res.status(404).json({ msg: "Access token isn't found!" })
}
