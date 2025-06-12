import bcrypt from "bcrypt";
import db from "../database/connection.js";

export const authService = {
	async validateCredentials(username: string, password: string) {
		const user = await db('guest')
			.where({ username })
			.first();
		
		if (!user) {
			return { valid: false, user: null };
		}

		const passwordValid = await bcrypt.compare(password, user.password);

		return {
			valid: passwordValid,
			user: passwordValid ? user : null
		};
	}
};