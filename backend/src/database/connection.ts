import knex from "knex";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '../../../data/');
const dbPath = path.join(dataDir, 'database.sqlite');

if (!fs.existsSync(dataDir)) {
	fs.mkdirSync(dataDir, {
		recursive: true
	});
}

const db = knex({
	client: 'better-sqlite3',
	connection: {
		filename: dbPath
	},
	useNullAsDefault: true
});

export default db;