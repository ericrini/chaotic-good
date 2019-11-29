const schema = require("./schema.json");
const Ajv = require('ajv');
const accounts = require("../../services/accounts");
const InvalidSchemaError = require("../../errors/InvalidSchemaError");

module.exports = (router) => {
	var ajv = new Ajv();
	var validate = ajv.compile(schema);

	router.post("accounts", async (context) => {
		if (!validate(context.request.body)) {
			throw new InvalidSchemaError(validator.errors);
		}

		const account = await accounts.create(
			context.request.body.first,
			context.request.body.last,
			context.request.body.email
		);

		context.body = account;
	});
}