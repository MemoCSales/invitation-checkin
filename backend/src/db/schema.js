import db from './connection.js'

async function setupDatabase() {
	await db.schema.hasTable('users').then(async (exists) => {
		if (!exists) {
			await db.schema.createTable('users', (table) => {
				table.increments('id');
				table.string('name').notNullable();
				table.integer('age');
			});

			console.log('Tabla "users" creada exitosamente.');
		}
	});
}

// Ejecuta la configuración
export default setupDatabase;