import { FastifyRequest, FastifyReply } from "fastify";
import { generateToken } from "../middleware/auth/generateToken.js";
import { authService } from "../services/authentication-service.js";

export const loginController = {
	async verifyCredentials (request: FastifyRequest, reply: FastifyReply) {
		try {
			const body = request.body as any;
			if (!body || typeof body !== 'object') {
				return reply.code(400).send({
					error: 'Invalid request',
					code: 'INVALID_REQUEST',
					message: 'El cuerpo de la solicitud es obligatorio'
				});
			}

			const { username, password } = body;

			if (!username || !password) {
				return reply.code(400).send({
					error: 'Missing credentials',
					code: 'MISSING_CREDENTIALS',
					message: 'Nombre de usuario y contraseña son requeridos'
				});
			}

			const verifyUser = await authService.validateCredentials(username, password);

			if (!verifyUser) {
				request.log.info(`Login attempt with non-existent username: ${username}`);
				return reply.code(401).send({
					error: 'Authentication failed',
					code: 'AUTH_FAILED',
					message: 'Usuario o contraseña inválido'
				});
			}
			
			if (!verifyUser.valid) {
				request.log.info(`Failed login attempt for user: ${username}`);
				return reply.code(401).send({
					error: 'Authentication failed',
					code: 'AUTH_FAILED',
					message: 'Usuario o contraseña inválido'
				});
			}

			const tokens = await generateToken(reply, { id: verifyUser.user.id, firstName: verifyUser.user.first_name });
			return {
				success: true,
				accessToken: tokens.accessToken,
				message: 'Inicio de sesión exitoso' };

		} catch (error) {
			request.log.error(error, 'Login error occurred');
			return reply.code(500).send({
				error: 'Server error',
				code: 'SERVER_ERROR',
				message: 'Un error inesperado ha ocurrido'
			});
		}
	}
}