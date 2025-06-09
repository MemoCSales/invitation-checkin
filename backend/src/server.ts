import Fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
import { FastifyRequest, FastifyReply } from "fastify";
import dotenv from "dotenv";
import setupDatabase from "./database/schema.js";
import seedDatabase from "../scripts/seed.js";
import loginRoute from "./routes/auth.js"

declare module 'fastify' {
	interface FastifyInstance {
		authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
	}
}

dotenv.config();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

const fastify = Fastify({
	logger: {
		transport: {
			target: 'pino-pretty',
			options: {
				translateTime: 'HH:MM',
				colorize: true
			},
		},
	},
});

// Plugins
fastify.register(fastifyCookie);
fastify.register(fastifyJwt, {
	secret: process.env.JWT_SECRET || 'supersecreto',
	cookie: {
		cookieName: 'token',
		signed: false
	}
});

// Global middleware for authentication
fastify.decorate('authenticate', async function (request: FastifyRequest, reply: FastifyReply) {
	try {
		await request.jwtVerify();
	} catch (error) {
		reply.code(401).send({ error: 'No authorized' });
	}
});

// Init database
try {
	await setupDatabase();
	await seedDatabase();
	console.log('Database initialized and seeded successfully');
} catch (error) {
	console.error('Failed to initialized database:', error);
	process.exit(1);
}

fastify.register(fastifyCors, {
	origin: [
		`${process.env.FRONT_URL}` // local frontend
		// Production origin
	],
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	credentials: true, // Allow sending cookies or auth headers
	maxAge: 86400
})


// Register routes here
fastify.register(loginRoute);

//Server
const start = async () => {
	try {
		await fastify.listen({
			port: PORT,
			host: '0.0.0.0'
		});
		console.log(`Invitation checkIn server listening at port: ${PORT}`);
	} catch (error) {
		fastify.log.error(error);
		process.exit(1);
	}
};

start();