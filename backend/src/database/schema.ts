import db from "./connection.js";

async function setupDatabase() {
	await db.schema.hasTable('guest').then(async (exists) => {
		if (!exists) {
			await db.schema.createTable('guest', (table) => {
				table.increments('id');
				table.string('first_name').notNullable();
				table.string('last_name');
				table.string('password');
			})
			console.log("Table 'guest' created successfully");
		}
	});
}

export default setupDatabase;