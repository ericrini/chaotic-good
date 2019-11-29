const db = require("../db.js");
const crypto = require("crypto");
const uuid = require("uuid");
const NotUniqueError = require("../errors/NotUniqueError");

module.exports = {
	create: async (first, last, email) => {
		const id = uuid.v4();
		const client = await db.getClient("accounts");
		const account = client.findOne({ email });

		if (account) {
			throw new NotUniqueError("The email address was already registered.");
		}

		await client.insertOne({ id, first, last, email, verified: false });
	},

	verifyEmail: async (id, password) => {
	},

	updatePassword: async (id, password) => {
		const salt = crypto.randomBytes(20).toString("hex");
		const hash = crypto.createHmac("sha512", password).update(salt).digest("base64");
		const result = await client.findOneAndUpdate({ id }, { salt, hash });
	},

	beginPasswordReset: async (id) => {

	}
}