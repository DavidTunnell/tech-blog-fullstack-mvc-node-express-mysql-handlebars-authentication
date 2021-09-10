const router = require("express").Router();

router.get("/", async (req, res) => {
    res.render("dashboard", { loggedIn: req.session.loggedIn });
});

module.exports = router;
