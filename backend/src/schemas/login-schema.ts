
export const loginSchema = {
	body: {
		type: 'object',
		properties: {
			username: { type: 'string' },
			password: { type: 'string' }
		},
		required: ['username', 'password']
	},
	response: {
		200: {
			type: 'object',
			properties: {
				success: { type: 'boolean' },
				accessToken: { type: 'string' },
				message: { type: 'string' }
			}
		},
		400: {
			type: 'object',
			properties: {
				error: { type: 'string' },
				code: { type: 'string' },
				message: { type: 'string' }
			}
		},
		401: {
			type: 'object',
			properties: {
				error: { type: 'string' },
				code: { type: 'string' },
				message: { type: 'string' }
			}
		},
		500: {
			type: 'object',
			properties: {
				error: { type: 'string' },
				code: { type: 'string' },
				message: { type: 'string' }
			}
		}
	}
}