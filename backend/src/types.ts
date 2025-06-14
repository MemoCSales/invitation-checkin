export interface JWTPayload {
	id: string | number;
	firstName: string;
	tokenType: 'access' | 'refresh';
	iat?: number;
	exp?: number;
}

declare module '@fastify/jwt' {
	interface FastifyJWT {
		payload: JWTPayload;
		user: {
			id: string | number;
			firstName: string;
			tokenType: 'access' | 'refresh';
		}
	}
}

declare module 'fastify' {
	interface FastifyInstance {
		authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
	}
}