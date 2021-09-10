const router = require("express").Router();

const testRoutes = require("./test-routes.js");
const userRoutes = require("./user-routes.js");

router.use("/test", testRoutes);
router.use("/users", userRoutes);

module.exports = router;
