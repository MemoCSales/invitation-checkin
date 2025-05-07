import Fastify from 'fastify'
import setupDatabase from './db/schema.js'

const PORT = 3001

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM',
        colorize: true,
      },
    },
  },
});

// Initialize database here
try {
  setupDatabase();
  console.log('Database initialized successfully');
} catch (error) {
  console.error('Failed to initialize database:', error);
  process.exit(1);
};

// Register first route
fastify.get('/', (request, reply) => {
  reply.send({
    message: 'Hello Fastify is running!'
  });
});

// Register routes here


// Server
const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Wedding checkin server listening at port: ${PORT} `);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
