const router = require("express").Router();

const testRoutes = require("./test-routes.js");

router.use("/test", testRoutes);

module.exports = router;
