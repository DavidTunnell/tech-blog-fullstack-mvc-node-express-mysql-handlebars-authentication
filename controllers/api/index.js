const router = require("express").Router();

const testRoutes = require("./test-routes.js");
const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes.js");

router.use("/test", testRoutes);
router.use("/users", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
