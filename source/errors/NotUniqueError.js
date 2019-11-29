module.exports = class NotUniqueError extends Error {
  constructor(path, value) {
    super(`The value "${value}" at path "${path}" was not unique.`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotUniqueError);
    }

    this.name = "NotUniqueError";
    this.path = path;
    this.value = value;
  }
}