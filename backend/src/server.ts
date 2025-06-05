import Fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import { FastifyRequest, FastifyReply } from "fastify";
import dotenv from "dotenv";
import setupDatabase from "./database/schema.js";
import loginRoute from "./routes/auth.js"

declare module 'fastify' {
	interface FastifyInstance {
		authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
	}
	// interface FastifyRequest {
	// 	user: string;
	// }
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

// Middleware
fastify.decorate('authenticate', async function(request: FastifyRequest, reply: FastifyReply) {
	try {
		await request.jwtVerify();
	} catch (error) {
		reply.code(401).send({ error: 'No authorized' });
	}
});

// Init database
try {
	setupDatabase();
	console.log('Database initialized successfully');
} catch (error) {
	console.error('Failed to initialized database:', error);
	process.exit(1);
}

// Register first route
fastify.get('/',  (_request: FastifyRequest, reply: FastifyReply) => {
	reply.send({
		message: 'Hello Fastify is running!'
	});
});

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