import Fastify from "fastify";
import dotenv from "dotenv";

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