const Router = require('koa-router');
const router = new Router({ prefix: "/api/v1/" });

require("./accounts/create.js")(router);

module.exports = router;