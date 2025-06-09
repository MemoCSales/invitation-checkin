import { FastifyInstance } from "fastify";
import bcrypt from "bcrypt";
import { generateToken } from "../middleware/auth/generateToken.js";
import db from "../database/connection.js";

export default async function (app: FastifyInstance) {
	app.post('/login', async (request, reply) => {
		const { username, password } = request.body as { username: string, password: string };
		const user = await db('guest')
			.where({ username })
			.first();
		if (!user || !(await bcrypt.compare(password, user.password))) {
			return reply.code(401).send({ error: 'Invalid Credentials' });
		}
		await generateToken(reply, { id: user.id, firstName: user.first_name });
		return { success: true };
	});

	app.get('/me', { preHandler: [app.authenticate] }, async (request, _reply) => {
		return { user: request.user };
	});
}