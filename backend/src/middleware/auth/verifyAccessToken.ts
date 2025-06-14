import { FastifyRequest, FastifyReply } from "fastify";
import { JWTPayload } from "../../types.js";

export async function verifyAccessToken(request: FastifyRequest, reply: FastifyReply) {
	try {
		const authHeader = request.headers.authorization;

		if (!authHeader) {
			return reply.code(401).send({
				error: 'Authentication required',
				code: 'AUTH_REQUIRED',
				message: 'Access token is missing'
			});
		}

		const parts = authHeader.split(' ');
		if (parts.length !== 2 || parts[0] !== 'Bearer') {
			return reply.code(401).send({
				error: 'Invalid token format',
				code: 'INVALID_TOKEN_FORMAT',
				message: 'Authorization beader must be in format: Bearer [token]'
			});
		}

		const token = parts[1];

		const decoded = request.server.jwt.verify<JWTPayload>(token);

		if (decoded.tokenType !== 'access') {
			return reply.code(401).send({
				error: 'Invalid token type',
				code: 'INVALID_TOKEN_TYPE',
				message: 'Provided token is not an access token'
			});
		}

		request.user = decoded; //ensures your protected routes can access the authenticated user's data

	} catch (error) {
		return reply.code(401).send({
			error: 'Authentication failed',
			code: 'AUTH_FAILED',
			message: 'Invalid or expired access token'
		});
	}
}