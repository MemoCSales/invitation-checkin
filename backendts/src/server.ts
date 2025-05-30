import Fastify from "fastify";
import dotenv from "dotenv";
import setupDatabase from "./database/schema.js";

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

// Init database
try {
	setupDatabase();
	console.log('Database initialized successfully');
} catch (error) {
	console.error('Failed to initialized database:', error);
	process.exit(1);
}

// Register first route
fastify.get('/',  (_request, reply) => {
	reply.send({
		message: 'Hello Fastify is running!'
	});
});

// Register routes here

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