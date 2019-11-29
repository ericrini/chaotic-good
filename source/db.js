const MongoClient = require('mongodb').MongoClient;
let client = null;

module.exports = {
	getClient: async (collection) => {
		if (!client) {
			client = new MongoClient("mongodb://localhost:27017");
			await client.connect();
		}

		const db = client.db("chaotic");
		return await db.collection(collection);
	}
}