import { FastifyReply } from "fastify";

export async function generateToken(reply: FastifyReply, payload: object) {
	const accessToken = await reply.jwtSign(payload, { expiresIn: '7d' });
	reply.setCookie('accessToken', accessToken, {
		path: '/',
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 7 * 24 * 60 * 60
	});
	return accessToken
}