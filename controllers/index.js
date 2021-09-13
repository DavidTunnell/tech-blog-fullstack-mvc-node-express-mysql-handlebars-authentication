const router = require("express").Router();
//api requires can also be done separately
const apiRoutes = require("./api");
const indexRoutes = require("./index-routes");
const loginRoutes = require("./login-routes");
const postRoutes = require("./post-routes");
const signupRoutes = require("./signup-routes");
const logoutRoutes = require("./logout-routes");
const dashboardRoutes = require("./dashboard-routes");
const editRoutes = require("./edit-routes");

//use each of the routes files in the controllers folder
router.use("/", indexRoutes);
router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/post", postRoutes);
router.use("/signup", signupRoutes);
router.use("/logout", logoutRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/edit", editRoutes);

module.exports = router;
