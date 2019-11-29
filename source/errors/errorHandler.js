module.exports = async (context, next) => {
  try {
    await next();
  }
  catch (error) {
    if (error.name === "NotUniqueError") {
      context.status = 400;
      context.body = {
        type: "NotUniqueError",
        path: error.path,
        value: error.value,
        message: error.message
      };
      return;
    }

    context.status = 500;
    context.message = {
      type: "UndocumentedError",
      message: "The service encountered an undocumented error."
    }
  }
};