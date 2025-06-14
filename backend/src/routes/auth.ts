import { FastifyInstance } from "fastify";
import { loginController } from "../controller/login-controller.js";
import { loginSchema } from "../schemas/login-schema.js";
import { tokenController } from "../controller/token-controller.js";

export default async function (app: FastifyInstance) {
	app.post('/login', { schema: loginSchema }, loginController.verifyCredentials);

	app.get('/refresh', tokenController.verifyToken);

	app.get('/test-auth', { preHandler: [app.authenticate] }, async (request, _reply) => {
		return {
			message: 'Authentication successful',
			user: request.user
		};
	});

	app.get('/me', { preHandler: [app.authenticate] }, async (request, _reply) => {
		return { user: request.user };
	});
}