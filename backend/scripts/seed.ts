import db from "../src/database/connection.js";
import bcrypt from "bcrypt";

async function seedDatabase() {
	const guestCount = await db('guest').count('* as count').first();

	if (guestCount && Number(guestCount.count) > 0) {
		console.log("Databse already has guests, skipping seed");
		return;
	}

	const saltRounds = 10;
	const password1 = await bcrypt.hash("guest123", saltRounds);
	const password2 = await bcrypt.hash("family456", saltRounds);
	const password3 = await bcrypt.hash("friend789", saltRounds);

	await db('guest').insert([
		{
			first_name: 'John',
			last_name: 'Smith',
			password: password1
		},
		{
			first_name: 'Maria',
			last_name: 'Garcia',
			password: password2
		}, {
			first_name: 'James',
			last_name: 'Johnson',
			password: password3
		}
	]);

	console.log("Database seeded successfully with sample guests");
	await generateUsernames();
}

async function generateUsernames() {
	const guests = await db('guest')
		.whereNull('username')
		.orWhere('username', '')
		.select('id', 'first_name', 'last_name');

	if (guests.length === 0) return;

	console.log(`Generating usernames for ${guests.length} guests...`);

	for (const guest of guests) {
		let username = '';

		if (guest.first_name && guest.last_name) {
			username = `${guest.first_name.toLowerCase()}_${guest.last_name.toLowerCase()}`;
		} else if (guest.first_name) {
			username = guest.first_name.toLowerCase();
		} else if (guest.last_name) {
			username = guest.last_name.toLowerCase();
		} else {
			username = `guest_${guest.id}`;
		}

		let finalUsername = username
		let counter = 1;

		while (true) {
			const existing = await db('guest')
				.where('username', finalUsername)
				.whereNot('id', guest.id)
				.first();

			if (!existing) break;

			finalUsername = `${username}${counter}`;
			counter++;
		}

		await db('guest')
			.where('id', guest.id)
			.update({ username: finalUsername });
	}
	console.log("Username generation complete");
}

export default seedDatabase;