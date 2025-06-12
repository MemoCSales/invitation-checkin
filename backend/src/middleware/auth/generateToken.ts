import { FastifyReply } from "fastify";

export async function generateToken(reply: FastifyReply, payload: object) {
	const accessToken = await reply.jwtSign(
		{ ...payload, tokenType: 'access' },
		{ expiresIn: '30m' }
	);
	const refreshToken = await reply.jwtSign(
		{ ...payload, tokenType: 'refresh' },
		{ expiresIn: '3d' }
	);
	reply.setCookie('refreshToken', refreshToken, {
		path: '/',
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'strict',
		maxAge: 3 * 24 * 60 * 60
	});
	return { accessToken, refreshToken };
}