import { FastifyReply } from "fastify";
import { JWTPayload } from "../../types.js";

export async function generateToken(reply: FastifyReply, payload: {
	id: string | number;
	firstName: string;
}) {
	const accessToken = await reply.jwtSign(
		// ensure TypeScript recognizes these objects match your JWT payload interface
		{ ...payload, tokenType: 'access' } as JWTPayload,
		{ expiresIn: '30m' }
	);
	const refreshToken = await reply.jwtSign(
		{ ...payload, tokenType: 'refresh' } as JWTPayload,
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