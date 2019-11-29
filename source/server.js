const port = 3000;

const Koa = require("koa");
const errorHandler = require("./errors/errorHandler");
const bodyParser = require('koa-bodyparser');
const router = require("./resources/router.js");

const app = new Koa();
app.use(errorHandler);
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  router.stack.forEach((item) => {
    console.log(item.path);
  });
});