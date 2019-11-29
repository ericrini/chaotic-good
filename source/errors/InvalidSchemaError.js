module.exports = class InvalidSchemaError extends Error {
  constructor(errors) {
    super(errors[0].message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidSchemaError);
    }

    this.name = "InvalidSchemaError";
    this.errors = errors;
  }
}