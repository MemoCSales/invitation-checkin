import { FastifyInstance } from "fastify";
import { loginController } from "../controller/login-controller.js";
import { loginSchema } from "../schemas/login-schema.js";

export default async function (app: FastifyInstance) {
	app.post('/login', { schema: loginSchema }, loginController.verifyCredentials);

	app.get('/me', { preHandler: [app.authenticate] }, async (request, _reply) => {
		return { user: request.user };
	});
}