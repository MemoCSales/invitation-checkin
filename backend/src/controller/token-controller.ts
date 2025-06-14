import { FastifyRequest, FastifyReply } from "fastify";
import { generateToken } from "../middleware/auth/generateToken.js";
import { JWTPayload } from "../types.js";

export const tokenController = {
	async verifyToken (request: FastifyRequest, reply: FastifyReply) {
		try {
			const refreshToken = request.cookies.refreshToken;
			if (!refreshToken) {
				return reply.code(401).send({
					error: 'Refresh token missing',
					code: 'TOKEN_MISSING',
					message: 'No refresh token provided'
				});
			}

			// Verify refresh token
			let decoded;
			try {
				// onlyCookies set to true tells it to only look at cookies for the token
				 decoded = await request.jwtVerify<JWTPayload>({ onlyCookie: true });
			} catch (error) {
				return reply.code(401).send({
					error: 'Invalid refresh token',
					code: 'TOKEN_INVALID',
					message: 'Refresh token is invalid'
				});
			}

			if (decoded.tokenType !== 'refresh') {
				return reply.code(401).send({
					error: 'Invalid token type',
					code: 'TOKEN_TYPE_INVALID',
					message: 'The provided token is not a refresh token'
				});
			}

			const { accessToken } = await generateToken(reply, {
				id: decoded.id,
				firstName: decoded.firstName
			});

			return {
				success: true,
				accessToken,
				message: 'Token refreshed successfully'
			};
		} catch (error) {
			request.log.error(error, 'Token refresh error');
			return reply.code(500).send({
				error: 'Server error',
				code: 'SERVER_ERROR',
				message: 'An unexpected error occurred'
			});
		}
	}
}